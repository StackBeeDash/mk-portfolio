---
layout: default
title: MK Portfolio - Masato Kikukawa
description: Portfolio of Masato Kikukawa - Full-Stack Developer & Technical Trainer specializing in Azure, Google Cloud, and AI/LLM technologies.
---

<style>
.lang-toggle {
  position: fixed;
  top: 20px;
  right: 120px;
  z-index: 1000;
  display: flex;
  gap: 8px;
}
.lang-btn {
  padding: 8px 12px;
  border-radius: 6px;
  border: 2px solid var(--border-color);
  background: var(--content-bg);
  color: var(--text-color);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s;
}
.lang-btn:hover {
  border-color: var(--link-color);
}
.lang-btn.active {
  background: var(--link-color);
  color: white;
  border-color: var(--link-color);
}
.lang-en, .lang-ja { display: none; }
[data-lang="en"] .lang-en { display: block; }
[data-lang="ja"] .lang-ja { display: block; }
</style>

<!-- Language Toggle -->
<div class="lang-toggle">
  <button class="lang-btn active" onclick="setLang('en')">EN</button>
  <button class="lang-btn" onclick="setLang('ja')">JA</button>
</div>

<!-- English Content -->
<div class="lang-en" markdown="1">

# Welcome

I'm **Masato Kikukawa**, a software engineer focused on building practical tools that enhance productivity and communication workflows.

## What I Do

- Build automation tools using **Claude Code** and **MCP**
- Integrate various platforms (Slack, Gmail, Google Calendar)
- Create knowledge management systems using GitHub

---

## Featured Projects

### kb-repo
Personal knowledge management system using GitHub Issues and Claude Code.

- GitHub Issues as CMS for communication logs, ideas, and places
- MCP servers for Slack, Gmail, Google Calendar integration
- Automated daily summaries

[View on GitHub](https://github.com/StackBeeDash/kb-repo){: .btn}

### mk-portfolio
This portfolio site - built with Jekyll and GitHub Pages.

[View on GitHub](https://github.com/StackBeeDash/mk-portfolio){: .btn}

---

[View My Resume](./resume){: .btn .btn-primary}

</div>

<!-- Japanese Content -->
<div class="lang-ja" markdown="1">

# ようこそ

**菊川 正人**です。生産性とコミュニケーションワークフローを向上させる実用的なツールの構築に注力しているソフトウェアエンジニアです。

## 活動内容

- **Claude Code** と **MCP** を使った自動化ツールの構築
- 各種プラットフォーム（Slack、Gmail、Google カレンダー）の連携
- GitHub を活用したナレッジマネジメントシステムの構築

---

## 主なプロジェクト

### kb-repo
GitHub Issues と Claude Code を活用した個人ナレッジマネジメントシステム。

- GitHub Issues を CMS として活用（コミュニケーションログ、アイデア、場所の記録）
- Slack、Gmail、Google カレンダー連携用 MCP サーバー
- 自動デイリーサマリー生成

[GitHub で見る](https://github.com/StackBeeDash/kb-repo){: .btn}

### mk-portfolio
このポートフォリオサイト - Jekyll と GitHub Pages で構築。

[GitHub で見る](https://github.com/StackBeeDash/mk-portfolio){: .btn}

---

[レジュメを見る](./resume){: .btn .btn-primary}

</div>

<script>
const headerDescriptions = {
  en: 'Full-Stack Developer & Technical Trainer specializing in Azure, Google Cloud, and AI/LLM.',
  ja: 'フルスタック開発者＆技術トレーナー。Azure、Google Cloud、AI/LLMを専門とする。'
};

function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('lang', lang);
  updateLangButtons(lang);
  updateHeaderDescription(lang);
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === lang.toUpperCase()) {
      btn.classList.add('active');
    }
  });
}

function updateHeaderDescription(lang) {
  const headerDesc = document.querySelector('.project-tagline');
  if (headerDesc && headerDescriptions[lang]) {
    headerDesc.textContent = headerDescriptions[lang];
  }
}

// Initialize language on page load
(function() {
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
})();
</script>
