#!/usr/bin/env node
/**
 * GitHub Contributions SVG Generator
 * プライベートリポジトリ含む全コントリビューションを可視化
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// GraphQL query to get contribution data
const query = `
{
  viewer {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            weekday
          }
        }
      }
    }
  }
}`;

// Fetch data using gh CLI
function fetchContributions() {
  const result = execSync(`gh api graphql -f query='${query}'`, { encoding: 'utf8' });
  return JSON.parse(result).data.viewer.contributionsCollection.contributionCalendar;
}

// Color scale (GitHub-like)
function getColor(count) {
  if (count === 0) return '#ebedf0';
  if (count <= 3) return '#9be9a8';
  if (count <= 6) return '#40c463';
  if (count <= 9) return '#30a14e';
  return '#216e39';
}

// Generate SVG
function generateSVG(calendar) {
  const cellSize = 11;
  const cellGap = 3;
  const weeks = calendar.weeks;
  const width = weeks.length * (cellSize + cellGap) + 60;
  const height = 7 * (cellSize + cellGap) + 50;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <style>
    .title { font: 600 14px 'Segoe UI', sans-serif; fill: #24292f; }
    .legend { font: 400 10px 'Segoe UI', sans-serif; fill: #57606a; }
    .day { font: 400 9px 'Segoe UI', sans-serif; fill: #57606a; }
  </style>
  <text x="10" y="18" class="title">${calendar.totalContributions} contributions in the last year</text>
`;

  // Day labels
  const days = ['Sun', '', 'Tue', '', 'Thu', '', 'Sat'];
  days.forEach((day, i) => {
    if (day) {
      svg += `  <text x="0" y="${35 + i * (cellSize + cellGap) + 9}" class="day">${day}</text>\n`;
    }
  });

  // Contribution cells
  weeks.forEach((week, weekIndex) => {
    week.contributionDays.forEach((day, dayIndex) => {
      const x = 30 + weekIndex * (cellSize + cellGap);
      const y = 28 + dayIndex * (cellSize + cellGap);
      const color = getColor(day.contributionCount);
      svg += `  <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" ry="2" fill="${color}"><title>${day.date}: ${day.contributionCount} contributions</title></rect>\n`;
    });
  });

  // Legend
  const legendX = width - 130;
  svg += `  <text x="${legendX - 30}" y="${height - 8}" class="legend">Less</text>\n`;
  [0, 3, 6, 9, 12].forEach((level, i) => {
    svg += `  <rect x="${legendX + i * 14}" y="${height - 18}" width="10" height="10" rx="2" fill="${getColor(level)}"/>\n`;
  });
  svg += `  <text x="${legendX + 75}" y="${height - 8}" class="legend">More</text>\n`;

  svg += '</svg>';
  return svg;
}

// Main
try {
  console.log('Fetching contribution data...');
  const calendar = fetchContributions();
  console.log(`Total contributions: ${calendar.totalContributions}`);

  const svg = generateSVG(calendar);
  const outputPath = path.join(__dirname, '..', 'assets', 'images', 'contributions.svg');

  // Ensure directory exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, svg);

  console.log(`SVG saved to: ${outputPath}`);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
