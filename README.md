# mk-portfolio

Personal portfolio site powered by Jekyll and GitHub Pages.

## Overview

This repository contains the source code for my personal portfolio website.

- **URL**: https://portfolio.stack-bee.io
- **Resume**: https://portfolio.stack-bee.io/resume

## Technology Stack

- **Static Site Generator**: Jekyll
- **Hosting**: GitHub Pages
- **Theme**: Cayman (customized)

---

## Blog Workflow

ブログ記事の作成・公開ワークフローです。

### ディレクトリ構造

```
mk-portfolio/
├── _drafts/          # 下書き（非公開）
│   └── new-article.md
├── _posts/           # 公開済み記事
│   └── 2026-01-26-building-ai-team.md
└── blog/
    └── index.md      # 一覧ページ
```

### ワークフロー概要

```
1. /blog-draft でトピック入力
       ↓
2. kb-repo に Issue 作成（blog:draft ラベル）
       ↓
3. _drafts/ にファイル生成
       ↓
4. Discussion でコンテンツレビュー
       ↓
5. レビュー完了後 /blog-publish
       ↓
6. _drafts/ → _posts/ に移動
       ↓
7. Issue クローズ（blog:published ラベル）
```

### ラベル管理（kb-repo）

| ラベル | 意味 | 状態 |
|--------|------|------|
| `blog:draft` | 下書き中 | Issue オープン |
| `blog:review` | レビュー中 | Issue オープン |
| `blog:published` | 公開済み | Issue クローズ |

### カテゴリ管理

記事のカテゴリはフロントマターで指定します：

```yaml
---
layout: post
title: "記事タイトル"
date: 2026-01-26
categories: [tech, claude-code]  # カテゴリ（階層可）
tags: [AI, 生産性]               # タグ
---
```

URL 構造: `/blog/{categories}/{year}/{month}/{day}/{title}/`

例: `/blog/tech/claude-code/2026/01/26/building-ai-team/`

### Skills（kb-repo）

| Skill | 説明 |
|-------|------|
| `/blog-draft [トピック]` | 下書き作成（Issue + _drafts/ + Discussion） |
| `/blog-publish [issue番号]` | 公開（_drafts/ → _posts/ + Issue クローズ） |

---

## Local Development

### Prerequisites

- Ruby (2.7+)
- Bundler

### Setup

```bash
# Install dependencies
bundle install

# Run local server (with drafts)
bundle exec jekyll serve --drafts

# Run local server (published only)
bundle exec jekyll serve
```

Visit `http://localhost:4000` to view the site locally.

### Drafts

`_drafts/` ディレクトリのファイルは本番では公開されません。
ローカルで確認するには `--drafts` オプションを使用してください。

---

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

GitHub Actions がビルドを実行し、1-2分で反映されます。

---

## Related Repositories

| Repository | 説明 |
|-----------|------|
| [kb-repo](https://github.com/StackBeeDash/kb-repo) | ワークフロー管理、Skills、Discussion |

---

## License

MIT License
