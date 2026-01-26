---
layout: default
title: Blog
description: 技術記事・個人ブログ
---

# Blog

技術記事や個人的な記事を投稿しています。

---

## 最新の記事

{% for post in site.posts limit: 10 %}
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
