---
layout: default
title: Resume
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
.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}
.contact-info {
  margin-bottom: 20px;
  font-size: 14px;
}
.contact-info a {
  margin-right: 15px;
}
.job {
  margin-bottom: 35px;
  padding-bottom: 30px;
  position: relative;
}
.job::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: var(--border-color);
  border-radius: 1px;
}
.job:last-child::after {
  display: none;
}
.job-header {
  margin-bottom: 12px;
}
.job-title {
  font-weight: 600;
  font-size: 18px;
  color: var(--content-bg);
  background: var(--heading-color);
  padding: 6px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
}
.job-period {
  color: var(--text-muted);
  font-size: 13px;
}
.job ul {
  margin: 10px 0;
  padding-left: 20px;
  list-style-type: disc;
}
.job li {
  margin-bottom: 6px;
  line-height: 1.5;
}
.job li::marker {
  color: var(--link-color);
}
.achievements {
  margin-top: 10px;
  padding-left: 20px;
}
.achievements li {
  margin-bottom: 5px;
}
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 10px;
}
.cert-item {
  padding: 8px 12px;
  background: var(--table-alt-bg);
  border-radius: 6px;
  font-size: 14px;
}
/* Profile Photo */
.profile-section {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;
}
.profile-photo-wrapper {
  position: relative;
  flex-shrink: 0;
}
.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--border-color);
  background: var(--table-alt-bg);
}
.open-to-work {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background: #0a66c2;
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 10px;
  white-space: nowrap;
}
.profile-info h1 {
  margin: 0 0 5px 0;
}
/* Achievements label */
.achievements-label {
  font-weight: 500;
  font-size: 12px;
  color: var(--border-color);
  background: var(--table-alt-bg);
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
  opacity: 0.8;
}
</style>

<!-- Language Toggle -->
<div class="lang-toggle">
  <button class="lang-btn active" onclick="setLang('en')">EN</button>
  <button class="lang-btn" onclick="setLang('ja')">JA</button>
</div>

<!-- English Content -->
<div class="lang-en" markdown="1">

<div class="profile-section">
<div class="profile-photo-wrapper">
<img src="assets/images/profile.jpg" alt="Masato Kikukawa" class="profile-photo">
<span class="open-to-work">OPEN TO WORK</span>
</div>
<div class="profile-info">

# Masato Kikukawa

<div class="contact-info">
<a href="mailto:kikukawa@stack-bee.io">kikukawa@stack-bee.io</a>
<a href="https://www.linkedin.com/in/kikukawa9/">LinkedIn</a>
<a href="https://github.com/StackBeeDash">GitHub</a>
</div>
</div>
</div>

---

## Summary

IT professional with over 20 years of experience, specializing in cloud technologies, software development, and technical education. Career includes significant roles at Microsoft Japan and TOPGATE. Currently providing training and full-stack development services as a freelancer.

At Microsoft, focused on Azure infrastructure and cloud technologies, delivering comprehensive technical training on networking, virtual machines, storage, disaster recovery, and cloud applications. Successfully trained over 2,500 students with consistently high satisfaction scores.

Currently engaged in two primary areas:
- **Full-Stack Development**: End-to-end system development, business data analytics platforms, and offshore team management
- **Training**: Azure instructor on Udemy and official Microsoft courses through Trainocate, Fast Lane, and other global partners

---

## Experience

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Freelance Trainer / Full-Stack Engineer</div>
<div class="job-period">July 2025 - Present</div>
</div>

- Deliver Azure online training through Udemy and customized content for enterprise clients
- Design and develop web applications and data analysis systems
- Build Facebook business data analytics systems for data-driven decision-making
- Manage offshore development teams, overseeing the entire development lifecycle

<p class="achievements-label">Achievements:</p>
- Successfully launched and maintained Azure fundamentals courses on Udemy
- Directed multiple international projects with offshore teams
- Built partnerships with leading training companies (Trainocate, Fast Lane, Microsoft)
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Microsoft Japan - Cloud Technical Trainer</div>
<div class="job-period">February 2021 - July 2025</div>
</div>

- Provided technical training for Azure infrastructure courses (networking, storage, VMs, disaster recovery, backup, cloud applications)
- Trained on AI solutions using ChatGPT's engine on Azure
- Provided training on big data analysis foundations (Spark, Databricks, Azure Synapse, Machine Learning)
- Created custom training materials to enhance learning effectiveness

<p class="achievements-label">Achievements:</p>
- Delivered training at least 12 days per month
- Instructor Recognition: 1,500+ students reached
- Over 90% student satisfaction score
- Speaking at Microsoft Ignite event
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">TOPGATE - GCP Authorized Trainer</div>
<div class="job-period">August 2019 - January 2021</div>
</div>

- Offered official GCP training courses covering IaaS, PaaS, Kubernetes, Network, Load Balancing, Storage, Big Data, and ML
- Started the GCP training business from scratch
- Trained new authorized GCP trainers

<p class="achievements-label">Achievements:</p>
- Launched training business from scratch
- Offered 3 GCP official training courses
- Student satisfaction average rating 4.6+ out of 5.0
- Trained 4 GCP trainers
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Freelance Engineer</div>
<div class="job-period">April 2017 - July 2019</div>
</div>

- Online instructor of Python programming
- Web scraping development projects using Python and Selenium
- WordPress and Python (Flask) web application development

<p class="achievements-label">Achievements:</p>
- Produced and offered 4 Udemy online courses
- Completed 4 full-stack development projects using Python
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Healthcare Relations</div>
<div class="job-period">January 2015 - May 2017</div>
</div>

- Community medical system requirements, construction, deployment, and maintenance
- Regional collaboration wearable device IoT demonstration project

<p class="achievements-label">Achievements:</p>
- Built medical network system connecting 50+ facilities
- Managed and completed difficult migration projects on schedule
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Fuji Xerox - Medical / Product Planning / Software Development</div>
<div class="job-period">April 2003 - December 2015</div>
</div>

- In-hospital document management system development
- Network service product planning for SMEs
- Print system development for 20,000 convenience stores nationwide

<p class="achievements-label">Achievements:</p>
- Doubled viewer component drawing speed of medical package system
- System introduction to large hospitals (1,000+ beds)
- Released 2 enterprise service products
</div>

---

## Education

**Master of Computer Science** - Waseda University (2003)

---

## Certifications

### Microsoft Certified Trainer (MCT) - Feb 2021 - Present

<div class="cert-grid">
<div class="cert-item">AI-050: Azure OpenAI Service</div>
<div class="cert-item">AI-102: Azure AI Solution</div>
<div class="cert-item">AI-900: Azure AI Fundamentals</div>
<div class="cert-item">AZ-104: Azure Administrator</div>
<div class="cert-item">AZ-204: Azure Developer</div>
<div class="cert-item">AZ-305: Azure Solutions Architect</div>
<div class="cert-item">AZ-400: Azure DevOps</div>
<div class="cert-item">AZ-700: Azure Networking</div>
<div class="cert-item">AZ-900: Azure Fundamentals</div>
<div class="cert-item">DP-100: Data Science on Azure</div>
<div class="cert-item">DP-203: Data Engineering</div>
<div class="cert-item">SC-300: Identity & Access Admin</div>
</div>

### Google Cloud Certifications

<div class="cert-grid">
<div class="cert-item">Professional Cloud Architect (2019)</div>
<div class="cert-item">Associate Cloud Engineer (2020)</div>
<div class="cert-item">Authorized GCP Trainer (2019)</div>
</div>

---

## Skills

| Category | Technologies |
|----------|--------------|
| **Cloud** | Azure, Google Cloud |
| **Training** | Course design, Instructional content creation, Udemy |
| **Programming** | C#, C++, Python, .NET, TypeScript |
| **Databases** | SQL Server, MySQL, Supabase, Redis, Cosmos DB, Firestore, etc. |
| **DevOps** | Docker, Kubernetes, GitHub Actions |
| **Full-Stack** | HTML, JavaScript, Python, Node.js |

---

[Back to Home](.){: .btn}

</div>

<!-- Japanese Content -->
<div class="lang-ja" markdown="1">

<div class="profile-section">
<div class="profile-photo-wrapper">
<img src="assets/images/profile.jpg" alt="菊川正人" class="profile-photo">
<span class="open-to-work">OPEN TO WORK</span>
</div>
<div class="profile-info">

# 菊川 正人

<div class="contact-info">
<a href="mailto:kikukawa@stack-bee.io">kikukawa@stack-bee.io</a>
<a href="https://www.linkedin.com/in/kikukawa9/">LinkedIn</a>
<a href="https://github.com/StackBeeDash">GitHub</a>
</div>
</div>
</div>

---

## 概要

20年以上の経験を持つITプロフェッショナル。クラウドテクノロジー、ソフトウェア開発、技術教育を専門とする。日本マイクロソフトとTOPGATEでの重要な役割を経て、現在はフリーランスとしてトレーニングとフルスタック開発サービスを提供。

マイクロソフトでは、Azureインフラストラクチャとクラウドテクノロジーに焦点を当て、ネットワーキング、仮想マシン、ストレージ、災害復旧、クラウドアプリケーションに関する包括的な技術トレーニングを提供。2,500人以上の受講生を指導し、常に高い満足度を獲得。

現在、主に2つの分野で活動:
- **フルスタック開発**: エンドツーエンドのシステム開発、ビジネスデータ分析プラットフォーム、オフショアチーム管理
- **トレーニング**: UdemyでのAzure講師、Trainocate、Fast Laneなどを通じたMicrosoft公式コース提供

---

## 職務経歴

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">フリーランス トレーナー / フルスタックエンジニア</div>
<div class="job-period">2025年7月 - 現在</div>
</div>

- Udemyを通じてAzureオンライン研修を提供、企業向けカスタマイズコンテンツを作成
- Webアプリケーションおよびデータ分析システムの設計・開発
- Facebookビジネスデータ分析システムの構築
- オフショア開発チームの管理、計画からリリースまでの全工程を監督

<p class="achievements-label">実績:</p>
- UdemyでAzure基礎コースの立ち上げ・運営に成功
- 複数の国際プロジェクトを指揮、オフショアチームを管理
- 主要トレーニング企業（Trainocate、Fast Lane、Microsoft）とパートナーシップを構築
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">日本マイクロソフト株式会社 - クラウド技術トレーナー</div>
<div class="job-period">2021年2月 - 2025年7月</div>
</div>

- Azureインフラストラクチャコース（ネットワーク、ストレージ、VM、災害復旧、バックアップ、クラウドアプリ）の技術トレーニング提供
- Azure上でChatGPTエンジンを使用したAIソリューションのトレーニング
- ビッグデータ分析基礎（Spark、Databricks、Azure Synapse、機械学習）のトレーニング
- 学習効果向上のため独自教材を作成

<p class="achievements-label">実績:</p>
- 月12日以上のトレーニング提供
- インストラクター表彰: 1,500人以上の学生を指導
- 学生満足度90%以上
- Microsoft Igniteイベントで登壇
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">TOPGATE - GCP認定トレーナー</div>
<div class="job-period">2019年8月 - 2021年1月</div>
</div>

- IaaS、PaaS、Kubernetes、ネットワーク、ロードバランシング、ストレージ、ビッグデータ、MLをカバーするGCP公式トレーニングコースを提供
- GCPトレーニング事業をゼロから立ち上げ
- 新規GCP認定トレーナーを育成

<p class="achievements-label">実績:</p>
- トレーニング事業をゼロから立ち上げ
- 3つのGCP公式トレーニングコースを提供
- 学生満足度平均4.6点以上（5.0点満点）
- 4名のGCPトレーナーを育成
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">フリーランスエンジニア</div>
<div class="job-period">2017年4月 - 2019年7月</div>
</div>

- Pythonプログラミングのオンライン講師
- Python・Seleniumを使用したWebスクレイピング開発プロジェクト
- WordPressおよびPython (Flask) Webアプリケーション開発

<p class="achievements-label">実績:</p>
- Udemyオンラインコースを4つ制作・提供
- Pythonを使用したフルスタック開発プロジェクトを4件完了
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">ヘルスケアリレーションズ</div>
<div class="job-period">2015年1月 - 2017年5月</div>
</div>

- 地域医療システムの要件定義・構築・導入・保守
- 地域連携ウェアラブルデバイスIoT実証実験プロジェクト

<p class="achievements-label">実績:</p>
- 50以上の施設をつなぐ医療ネットワークシステムを構築
- 困難な移行プロジェクトを管理し、計画通りに完了
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">富士ゼロックス - メディカル / 商品企画 / ソフトウェア開発</div>
<div class="job-period">2003年4月 - 2015年12月</div>
</div>

- 院内文書管理システムの開発
- 中小企業向けネットワークサービス商品の企画
- 全国2万店のコンビニ向け印刷システム開発

<p class="achievements-label">実績:</p>
- 医療パッケージシステムのビューア描画速度を2倍に改善
- 1,000床以上の大規模病院へシステム導入
- エンタープライズ向けサービス商品を2つリリース
</div>

---

## 学歴

**早稲田大学大学院 コンピュータサイエンス研究科 修士課程修了** (2003年)

---

## 認定資格

### Microsoft認定トレーナー (MCT) - 2021年2月 - 現在

<div class="cert-grid">
<div class="cert-item">AI-050: Azure OpenAI Service</div>
<div class="cert-item">AI-102: Azure AI Solution</div>
<div class="cert-item">AI-900: Azure AI Fundamentals</div>
<div class="cert-item">AZ-104: Azure Administrator</div>
<div class="cert-item">AZ-204: Azure Developer</div>
<div class="cert-item">AZ-305: Azure Solutions Architect</div>
<div class="cert-item">AZ-400: Azure DevOps</div>
<div class="cert-item">AZ-700: Azure Networking</div>
<div class="cert-item">AZ-900: Azure Fundamentals</div>
<div class="cert-item">DP-100: Data Science on Azure</div>
<div class="cert-item">DP-203: Data Engineering</div>
<div class="cert-item">SC-300: Identity & Access Admin</div>
</div>

### Google Cloud認定資格

<div class="cert-grid">
<div class="cert-item">Professional Cloud Architect (2019)</div>
<div class="cert-item">Associate Cloud Engineer (2020)</div>
<div class="cert-item">Authorized GCP Trainer (2019)</div>
</div>

---

## スキル

| カテゴリ | 技術 |
|---------|------|
| **クラウド** | Azure, Google Cloud |
| **トレーニング** | コース設計、教育コンテンツ作成、Udemy |
| **プログラミング** | C#, C++, Python, .NET, TypeScript |
| **データベース** | SQL Server, MySQL, Supabase, Redis, Cosmos DB, Firestore, etc. |
| **DevOps** | Docker, Kubernetes, GitHub Actions |
| **フルスタック** | HTML, JavaScript, Python, Node.js |

---

[ホームに戻る](.){: .btn}

</div>

<script>
function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('lang', lang);
  updateLangButtons(lang);
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === lang.toUpperCase()) {
      btn.classList.add('active');
    }
  });
}

// Initialize language on page load
(function() {
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
})();
</script>
