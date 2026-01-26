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
.author-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f6f8fa;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.author-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.author-info h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.2rem;
}
.author-info p {
  margin: 0;
  color: #586069;
  font-size: 0.95rem;
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

<!-- Author Section -->
<div class="author-section">
  <img src="/assets/images/profile.jpg" alt="Masato Kikukawa" class="author-avatar">
  <div class="author-info">
    <div class="lang-en">
      <h3>Masato Kikukawa</h3>
      <p>Full-Stack Developer & Technical Trainer. Writing about AI, cloud technologies, and productivity tools.</p>
      <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #586069;">
        kikukawa@stack-bee.io ・
        <a href="https://linkedin.com/in/kikukawa9" target="_blank">LinkedIn</a> ・
        <a href="/resume">Resume</a>
      </p>
    </div>
    <div class="lang-ja">
      <h3>菊川 正人</h3>
      <p>フルスタック開発者＆技術トレーナー。AI、クラウド技術、生産性ツールについて書いています。</p>
      <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #586069;">
        kikukawa@stack-bee.io ・
        <a href="https://linkedin.com/in/kikukawa9" target="_blank">LinkedIn</a> ・
        <a href="/resume">レジュメ</a>
      </p>
    </div>
  </div>
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

  // Update header tagline
  const tagline = document.querySelector('.project-tagline');
  if (tagline) {
    tagline.textContent = lang === 'ja'
      ? '技術記事・個人ブログ'
      : 'Technical articles and personal blog';
  }

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
