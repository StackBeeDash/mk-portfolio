#!/usr/bin/env node
/**
 * GitHub Contributions SVG Generator (Enhanced)
 *
 * 全リポジトリの実際のコミット数を直接カウントして可視化
 * - 個人リポジトリ（プライベート含む）
 * - 組織リポジトリ
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 設定
const CONFIG = {
  username: 'StackBeeDash',
  organizations: ['ReplusAsiaOrg'], // 追加したい組織
  daysToFetch: 365,
  outputPath: path.join(__dirname, '..', 'assets', 'images', 'contributions.svg')
};

// トークン（GitHub Actions用、ローカルでは gh auth を使用）
const TOKEN = process.env.GH_PAT || null;

// 日付ユーティリティ
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getDateRange(days) {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - days);
  return { start: formatDate(start), end: formatDate(end) };
}

// gh CLI でコマンド実行（トークン指定可能）
function ghExec(cmd, token = null) {
  try {
    const env = { ...process.env };
    if (token) {
      env.GH_TOKEN = token;
    }
    return execSync(cmd, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024, env });
  } catch (e) {
    console.error(`Command failed: ${cmd}`);
    return '[]';
  }
}

// 全リポジトリを取得
function getAllRepos() {
  console.log('Fetching repositories...');

  // 個人リポジトリ
  const personalRepos = JSON.parse(
    ghExec(`gh repo list ${CONFIG.username} --limit 500 --json name,owner`, TOKEN)
  ).map(r => ({ owner: r.owner.login, name: r.name, isOrg: false }));

  console.log(`  Personal repos: ${personalRepos.length}`);

  // 組織リポジトリ
  let orgRepos = [];
  for (const org of CONFIG.organizations) {
    try {
      const repos = JSON.parse(
        ghExec(`gh repo list ${org} --limit 200 --json name,owner`, TOKEN)
      ).map(r => ({ owner: org, name: r.name, isOrg: true }));
      orgRepos = orgRepos.concat(repos);
      console.log(`  ${org} repos: ${repos.length}`);
    } catch (e) {
      console.log(`  ${org}: access denied or not found`);
    }
  }

  return [...personalRepos, ...orgRepos];
}

// リポジトリのコミットを取得
function getCommitsForRepo(owner, name, since) {
  try {
    const commits = JSON.parse(
      ghExec(`gh api "repos/${owner}/${name}/commits?since=${since}&per_page=100" --paginate 2>/dev/null || echo "[]"`, TOKEN)
    );

    // 自分のコミットのみフィルタ
    return commits
      .filter(c => c.author?.login === CONFIG.username ||
                   c.commit?.author?.email?.includes('kikukawa'))
      .map(c => c.commit.author.date.split('T')[0]);
  } catch (e) {
    return [];
  }
}

// 全コミットを集計
function aggregateCommits(repos, since) {
  const commitsByDate = {};
  let totalCommits = 0;
  let processedRepos = 0;

  console.log(`\nFetching commits from ${repos.length} repositories...`);

  for (const repo of repos) {
    processedRepos++;
    if (processedRepos % 20 === 0) {
      console.log(`  Progress: ${processedRepos}/${repos.length} repos`);
    }

    const dates = getCommitsForRepo(repo.owner, repo.name, since);
    for (const date of dates) {
      commitsByDate[date] = (commitsByDate[date] || 0) + 1;
      totalCommits++;
    }
  }

  console.log(`\nTotal commits found: ${totalCommits}`);
  return { commitsByDate, totalCommits };
}

// 日別データを週別に変換
function organizeByWeeks(commitsByDate, days) {
  const weeks = [];
  const today = new Date();

  // 最初の日曜日を見つける
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  while (startDate.getDay() !== 0) {
    startDate.setDate(startDate.getDate() - 1);
  }

  let currentDate = new Date(startDate);
  let currentWeek = [];

  while (currentDate <= today) {
    const dateStr = formatDate(currentDate);
    currentWeek.push({
      date: dateStr,
      count: commitsByDate[dateStr] || 0,
      weekday: currentDate.getDay()
    });

    if (currentDate.getDay() === 6 || currentDate >= today) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return weeks;
}

// 色スケール
function getColor(count) {
  if (count === 0) return '#ebedf0';
  if (count <= 2) return '#9be9a8';
  if (count <= 5) return '#40c463';
  if (count <= 10) return '#30a14e';
  return '#216e39';
}

// 月名
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// SVG生成
function generateSVG(weeks, totalCommits) {
  const cellSize = 11;
  const cellGap = 3;
  const marginTop = 35; // 月ラベル用のスペース
  const width = weeks.length * (cellSize + cellGap) + 70;
  const height = 7 * (cellSize + cellGap) + marginTop + 45;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <style>
    .title { font: 600 14px 'Segoe UI', sans-serif; fill: #24292f; }
    .month { font: 400 10px 'Segoe UI', sans-serif; fill: #57606a; }
    .legend { font: 400 10px 'Segoe UI', sans-serif; fill: #57606a; }
    .day { font: 400 9px 'Segoe UI', sans-serif; fill: #57606a; }
  </style>
  <text x="10" y="18" class="title">${totalCommits.toLocaleString()} contributions in the last year</text>
`;

  // 月ラベル
  let lastMonth = -1;
  weeks.forEach((week, weekIndex) => {
    const firstDay = week[0];
    if (firstDay) {
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        const x = 35 + weekIndex * (cellSize + cellGap);
        svg += `  <text x="${x}" y="${marginTop - 5}" class="month">${MONTHS[month]}</text>\n`;
        lastMonth = month;
      }
    }
  });

  // 曜日ラベル
  const days = ['Sun', '', 'Tue', '', 'Thu', '', 'Sat'];
  days.forEach((day, i) => {
    if (day) {
      svg += `  <text x="0" y="${marginTop + i * (cellSize + cellGap) + 9}" class="day">${day}</text>\n`;
    }
  });

  // コントリビューションセル
  weeks.forEach((week, weekIndex) => {
    week.forEach((day) => {
      const x = 35 + weekIndex * (cellSize + cellGap);
      const y = marginTop + day.weekday * (cellSize + cellGap);
      const color = getColor(day.count);
      const tooltip = day.count > 0
        ? `${day.date}: ${day.count} commit${day.count > 1 ? 's' : ''}`
        : `${day.date}: No contributions`;
      svg += `  <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" ry="2" fill="${color}"><title>${tooltip}</title></rect>\n`;
    });
  });

  // 凡例
  const legendX = width - 140;
  svg += `  <text x="${legendX - 30}" y="${height - 8}" class="legend">Less</text>\n`;
  [0, 2, 5, 10, 15].forEach((level, i) => {
    svg += `  <rect x="${legendX + i * 14}" y="${height - 18}" width="10" height="10" rx="2" fill="${getColor(level)}"/>\n`;
  });
  svg += `  <text x="${legendX + 75}" y="${height - 8}" class="legend">More</text>\n`;

  svg += '</svg>';
  return svg;
}

// メイン処理
async function main() {
  console.log('=== GitHub Contributions Generator (Enhanced) ===\n');

  const { start } = getDateRange(CONFIG.daysToFetch);
  console.log(`Date range: ${start} to today`);

  // リポジトリ取得
  const repos = getAllRepos();

  // コミット集計
  const { commitsByDate, totalCommits } = aggregateCommits(repos, start);

  // 週別データに変換
  const weeks = organizeByWeeks(commitsByDate, CONFIG.daysToFetch);

  // SVG生成
  const svg = generateSVG(weeks, totalCommits);

  // 保存
  fs.mkdirSync(path.dirname(CONFIG.outputPath), { recursive: true });
  fs.writeFileSync(CONFIG.outputPath, svg);

  console.log(`\nSVG saved to: ${CONFIG.outputPath}`);
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
