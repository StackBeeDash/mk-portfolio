---
layout: default
title: Blog
description: Technical articles and personal blog / 技術記事・個人ブログ
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
.post-item {
  margin-bottom: 1.5rem;
}
.post-item.hidden {
  display: none;
}
.lang-en, .lang-ja { display: none; }
[data-lang="en"] .lang-en { display: block; }
[data-lang="ja"] .lang-ja { display: block; }
</style>

<!-- Language Toggle (same style as resume) -->
<div class="lang-toggle">
  <button class="lang-btn" id="lang-btn-en" onclick="setLang('en')">EN</button>
  <button class="lang-btn" id="lang-btn-ja" onclick="setLang('ja')">JA</button>
</div>

<div class="lang-en" markdown="1">

# Blog

Technical articles and personal posts.

</div>

<div class="lang-ja" markdown="1">

# Blog

技術記事や個人的な記事を投稿しています。

</div>

---

<div class="lang-en" markdown="1">

## Latest Posts

</div>

<div class="lang-ja" markdown="1">

## 最新の記事

</div>

{% for post in site.posts %}
<div class="post-item" data-lang="{{ post.lang | default: 'ja' }}" markdown="1">

### [{{ post.title }}]({{ post.url | relative_url }})

<small>{{ post.date | date: "%Y-%m-%d" }} | {{ post.categories | join: " / " }}{% if post.lang %} | {{ post.lang | upcase }}{% endif %}</small>

{% if post.tags %}
<div style="margin-top: 0.5rem;">
{% for tag in post.tags limit: 5 %}
<span style="background: #f1f8ff; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.8rem; margin-right: 0.3rem;">{{ tag }}</span>
{% endfor %}
</div>
{% endif %}

---

</div>
{% endfor %}

{% if site.posts.size == 0 %}
<div class="lang-en" markdown="1">

No posts yet.

</div>
<div class="lang-ja" markdown="1">

まだ記事がありません。

</div>
{% endif %}

<script>
function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('blogLang', lang);

  // Update button styles
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-btn-' + lang).classList.add('active');

  // Filter posts by language
  document.querySelectorAll('.post-item').forEach(item => {
    const postLang = item.getAttribute('data-lang');
    if (postLang === lang) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// Initialize on page load
(function() {
  const saved = localStorage.getItem('blogLang') || 'en';
  setLang(saved);
})();
</script>
