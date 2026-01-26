---
layout: default
title: Blog
description: 技術記事・個人ブログ
---

# Blog

技術記事や個人的な記事を投稿しています。

---

## 最新の記事

{% assign posts = site.pages | where_exp: "page", "page.path contains 'blog/'" | where_exp: "page", "page.layout == 'post'" | sort: "date" | reverse %}

{% for post in posts limit: 10 %}
### [{{ post.title }}]({{ post.url | relative_url }})

<small>{{ post.date | date: "%Y-%m-%d" }} | {{ post.categories | join: " / " }}</small>

{% if post.tags %}
{% for tag in post.tags limit: 5 %}
<span style="background: #f1f8ff; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.8rem;">{{ tag }}</span>
{% endfor %}
{% endif %}

---

{% endfor %}

{% if posts.size == 0 %}
まだ記事がありません。
{% endif %}
