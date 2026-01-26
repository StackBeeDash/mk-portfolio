---
layout: default
title: Blog
description: Technical articles and personal blog / 技術記事・個人ブログ
---

# Blog

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
  <p id="blog-description-en" style="margin: 0;">Technical articles and personal posts.</p>
  <p id="blog-description-ja" style="margin: 0; display: none;">技術記事や個人的な記事を投稿しています。</p>

  <!-- Language Switch -->
  <div class="lang-switch" style="display: flex; gap: 0.5rem;">
    <button id="lang-en" onclick="setLang('en')" style="padding: 0.3rem 0.8rem; border: 1px solid #0366d6; border-radius: 4px; cursor: pointer; background: #0366d6; color: white;">EN</button>
    <button id="lang-ja" onclick="setLang('ja')" style="padding: 0.3rem 0.8rem; border: 1px solid #0366d6; border-radius: 4px; cursor: pointer; background: white; color: #0366d6;">日本語</button>
  </div>
</div>

---

## Latest Posts / 最新の記事

<div id="posts-list">
{% for post in site.posts %}
<div class="post-item" data-lang="{{ post.lang | default: 'ja' }}" style="margin-bottom: 1.5rem;">

### [{{ post.title }}]({{ post.url | relative_url }})

<small>{{ post.date | date: "%Y-%m-%d" }} | {{ post.categories | join: " / " }}{% if post.lang %} | {{ post.lang | upcase }}{% endif %}</small>

{% if post.tags %}
{% for tag in post.tags limit: 5 %}
<span style="background: #f1f8ff; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.8rem;">{{ tag }}</span>
{% endfor %}
{% endif %}

---

</div>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<p id="no-posts-en">No posts yet.</p>
<p id="no-posts-ja" style="display: none;">まだ記事がありません。</p>
{% endif %}

<script>
function setLang(lang) {
  // Update button styles
  document.getElementById('lang-en').style.background = lang === 'en' ? '#0366d6' : 'white';
  document.getElementById('lang-en').style.color = lang === 'en' ? 'white' : '#0366d6';
  document.getElementById('lang-ja').style.background = lang === 'ja' ? '#0366d6' : 'white';
  document.getElementById('lang-ja').style.color = lang === 'ja' ? 'white' : '#0366d6';

  // Update description
  document.getElementById('blog-description-en').style.display = lang === 'en' ? 'block' : 'none';
  document.getElementById('blog-description-ja').style.display = lang === 'ja' ? 'block' : 'none';

  // Filter posts
  document.querySelectorAll('.post-item').forEach(item => {
    const postLang = item.getAttribute('data-lang');
    item.style.display = postLang === lang ? 'block' : 'none';
  });

  // Save preference
  localStorage.setItem('blogLang', lang);
}

// Initialize on page load
(function() {
  const saved = localStorage.getItem('blogLang') || 'en';
  setLang(saved);
})();
</script>
