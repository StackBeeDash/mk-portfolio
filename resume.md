---
layout: default
title: Resume - Masato Kikukawa
description: AI-Driven Developer & Technical Enablement Specialist
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
/* Key Highlights */
.highlights p {
  margin-bottom: 12px;
  line-height: 1.6;
  padding: 12px 16px;
  background: var(--table-alt-bg);
  border-radius: 8px;
  border-left: 3px solid var(--link-color);
}
.highlights p strong {
  color: var(--heading-color);
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
/* Password Protection - Inline Unlock Section */
.protected-content {
  display: none;
}
.protected-content.unlocked {
  display: block;
}
.unlock-section {
  text-align: center;
  padding: 40px 20px;
  margin: 30px 0;
  border: 2px dashed var(--border-color, #e2e8f0);
  border-radius: 12px;
  background: var(--table-alt-bg, #f7fafc);
}
.unlock-section.hidden {
  display: none;
}
.unlock-section h3 {
  color: var(--heading-color, #2d3748);
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
}
.unlock-section p {
  color: var(--text-color, #4a5568);
  margin-bottom: 20px;
  line-height: 1.6;
}
.unlock-section input {
  padding: 10px 16px;
  font-size: 16px;
  border: 2px solid var(--border-color, #e2e8f0);
  border-radius: 6px;
  text-align: center;
  width: 120px;
  margin-right: 10px;
  background: var(--content-bg, #ffffff);
  color: var(--text-color, #4a5568);
}
.unlock-section input:focus {
  outline: none;
  border-color: var(--link-color, #5f8a8a);
}
.unlock-section button {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  background: var(--link-color, #5f8a8a);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}
.unlock-section button:hover {
  opacity: 0.9;
}
.unlock-section .error {
  color: #e53e3e;
  font-size: 14px;
  margin-top: 10px;
}
.unlock-section .contact-hint {
  margin-top: 20px;
  font-size: 13px;
  color: var(--text-muted, #718096);
}
.unlock-section .contact-hint a {
  color: var(--link-color, #5f8a8a);
}
</style>

<script>
function unlockContent() {
  const input = document.getElementById('passwordInput').value;
  if (input === 'hai') {
    document.querySelectorAll('.protected-content').forEach(el => el.classList.add('unlocked'));
    document.querySelectorAll('.unlock-section').forEach(el => el.classList.add('hidden'));
    sessionStorage.setItem('resumeAccess', 'granted');
  } else {
    document.getElementById('errorMsg').textContent = 'Incorrect password';
    document.getElementById('passwordInput').value = '';
  }
}

function unlockContentJa() {
  const input = document.getElementById('passwordInputJa').value;
  if (input === 'hai') {
    document.querySelectorAll('.protected-content').forEach(el => el.classList.add('unlocked'));
    document.querySelectorAll('.unlock-section').forEach(el => el.classList.add('hidden'));
    sessionStorage.setItem('resumeAccess', 'granted');
  } else {
    document.getElementById('errorMsgJa').textContent = 'パスワードが正しくありません';
    document.getElementById('passwordInputJa').value = '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('passwordInput');
  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') unlockContent();
    });
  }

  const inputJa = document.getElementById('passwordInputJa');
  if (inputJa) {
    inputJa.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') unlockContentJa();
    });
  }

  // Check if already authenticated in this session
  if (sessionStorage.getItem('resumeAccess') === 'granted') {
    document.querySelectorAll('.protected-content').forEach(el => el.classList.add('unlocked'));
    document.querySelectorAll('.unlock-section').forEach(el => el.classList.add('hidden'));
  }
});
</script>

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
kikukawa@stack-bee.io
<a href="https://www.linkedin.com/in/kikukawa9/">LinkedIn</a>
<a href="https://github.com/StackBeeDash">GitHub</a>
<a href="https://x.com/StackBeeDash">X (Twitter)</a>
</div>
</div>
</div>

---

## Summary

IT professional with over 20 years of experience in cloud technologies, AI-driven development, and technical enablement. Career spans Microsoft Japan, TOPGATE, and current freelance work combining full-stack development with AI agent-powered workflows. Passionate about enabling teams and organizations to leverage AI for transformative productivity gains.

Currently focused on three areas:
- **AI-Driven Development**: Building production systems using AI pair programming (Claude Code), achieving 400%+ development acceleration
- **Business Process Optimization**: Transforming manual workflows into efficient, data-driven operations through AI automation
- **Technical Training & Enablement**: Delivering Azure/AI training with 2,500+ students trained and 90%+ satisfaction

---

## Key Highlights

<div class="highlights" markdown="1">

**AI-Driven Innovation** --- Built full-stack production systems using AI agents (Claude Code), achieving 400%+ development acceleration and 80% cost reduction. Developed Ad Evaluation platform (349 commits in 3 weeks, ~2.4MB code) and Affiliate Management system (109 commits in 3 weeks, 310KB code) --- all driven by AI pair programming.

**Business Process Optimization** --- Dramatically streamlined business workflows through AI-driven automation, transforming manual processes into efficient, data-driven operations across multiple client engagements.

**Technical Enablement & AI Advocacy** --- Champion AI agent adoption within organizations, leading hands-on Claude Code training sessions and establishing AI-driven development practices for engineering teams.

**Proven Training Delivery** --- Delivered 320+ training sessions reaching 2,500+ students with 90%+ satisfaction. Recognized Microsoft trainer with Ignite speaking experience.

</div>

---

## GitHub Activity

<img src="assets/images/contributions.svg" alt="GitHub Contributions" style="width: 100%; max-width: 800px;">

---

## Experience

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Freelance Trainer / Full-Stack Engineer</div>
<div class="job-period">July 2025 - Present</div>
</div>

- Build production systems using AI-driven development (Claude Code), achieving 400%+ acceleration over traditional workflows
- Deliver Azure online training through Udemy and customized content for enterprise clients
- Design and develop web applications, data analysis systems, and business process automation
- Champion AI agent adoption within organizations, leading hands-on training sessions
- Manage offshore development teams, overseeing the entire development lifecycle

<p class="achievements-label">Achievements:</p>
- **Ad Evaluation System**: 349 commits, ~2.4MB code delivered in 3 weeks using AI pair programming
- **Affiliate Management System**: 109 commits, 310KB code delivered in 3 weeks
- Successfully launched and maintained Azure fundamentals courses on Udemy
- Built partnerships with leading training companies (Trainocate, Fast Lane, Microsoft)
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Microsoft Japan - Cloud Technical Trainer</div>
<div class="job-period">February 2021 - July 2025</div>
</div>
<div class="protected-content" markdown="1">

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
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">TOPGATE - GCP Authorized Trainer</div>
<div class="job-period">August 2019 - January 2021</div>
</div>
<div class="protected-content" markdown="1">

- Offered official GCP training courses covering IaaS, PaaS, Kubernetes, Network, Load Balancing, Storage, Big Data, and ML
- Started the GCP training business from scratch
- Trained new authorized GCP trainers

<p class="achievements-label">Achievements:</p>
- Launched training business from scratch
- Offered 3 GCP official training courses
- Student satisfaction average rating 4.6+ out of 5.0
- Trained 4 GCP trainers
</div>
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Freelance Engineer</div>
<div class="job-period">April 2017 - July 2019</div>
</div>
<div class="protected-content" markdown="1">

- Online instructor of Python programming
- Web scraping development projects using Python and Selenium
- WordPress and Python (Flask) web application development

<p class="achievements-label">Achievements:</p>
- Produced and offered 4 Udemy online courses
- Completed 4 full-stack development projects using Python
</div>
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Healthcare Relations</div>
<div class="job-period">January 2015 - May 2017</div>
</div>
<div class="protected-content" markdown="1">

- Community medical system requirements, construction, deployment, and maintenance
- Regional collaboration wearable device IoT demonstration project

<p class="achievements-label">Achievements:</p>
- Built medical network system connecting 50+ facilities
- Managed and completed difficult migration projects on schedule
</div>
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">Fuji Xerox - Medical / Product Planning / Software Development</div>
<div class="job-period">April 2003 - December 2015</div>
</div>
<div class="protected-content" markdown="1">

- In-hospital document management system development
- Network service product planning for SMEs
- Print system development for 20,000 convenience stores nationwide

<p class="achievements-label">Achievements:</p>
- Doubled viewer component drawing speed of medical package system
- System introduction to large hospitals (1,000+ beds)
- Released 2 enterprise service products
</div>
</div>

<div class="unlock-section" id="unlockSection">
<h3>View Full Details</h3>
<p>To view detailed work history, skills, and education, please enter the password.</p>
<input type="password" id="passwordInput" placeholder="Password" maxlength="10">
<button onclick="unlockContent()">Unlock</button>
<div class="error" id="errorMsg"></div>
<div class="contact-hint">
To request access, please contact kikukawa@stack-bee.io
</div>
</div>

<div class="protected-content" markdown="1">

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
| **AI** | Claude Code, GitHub Copilot, Azure OpenAI, GPT-4, AI-driven development workflows |
| **Cloud** | Azure, Google Cloud |
| **Training** | Course design, Instructional content creation, Udemy, Technical enablement |
| **Programming** | TypeScript, Python, C#, C++, .NET |
| **Web** | Nuxt.js, Vue.js, Node.js, HTML, JavaScript |
| **Databases** | Supabase, SQL Server, MySQL, Redis, Cosmos DB, Firestore |
| **DevOps** | Docker, Kubernetes, GitHub Actions |

</div>

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
kikukawa@stack-bee.io
<a href="https://www.linkedin.com/in/kikukawa9/">LinkedIn</a>
<a href="https://github.com/StackBeeDash">GitHub</a>
<a href="https://x.com/StackBeeDash">X (Twitter)</a>
</div>
</div>
</div>

---

## 概要

20年以上の経験を持つITプロフェッショナル。クラウドテクノロジー、AI駆動開発、テクニカルイネーブルメントを専門とする。日本マイクロソフトとTOPGATEでの経験を経て、現在はAIエージェントを活用したフルスタック開発とトレーニングを提供。チームと組織がAIを活用して生産性を変革することを支援することに注力。

現在、3つの分野で活動:
- **AI駆動開発**: AIペアプログラミング（Claude Code）を活用し、従来比400%以上の開発速度を実現
- **業務プロセス改善**: AI自動化による手動ワークフローの効率的なデータ駆動型運用への変革
- **テクニカルトレーニング＆イネーブルメント**: Azure/AIトレーニングで2,500人以上を指導、満足度90%以上

---

## 主な強み

<div class="highlights" markdown="1">

**AI駆動イノベーション** --- AIエージェント（Claude Code）を活用してフルスタックプロダクションシステムを構築。開発速度400%以上の向上、コスト80%削減を実現。広告評価プラットフォーム（3週間で349コミット、コード量約2.4MB）やアフィリエイト管理システム（3週間で109コミット、コード量310KB）をAIペアプログラミングで開発。

**業務プロセス最適化** --- AI駆動の自動化で業務ワークフローを劇的に効率化。手動プロセスを効率的なデータ駆動型運用に変革。

**テクニカルイネーブルメント＆AI推進** --- 組織内でのAIエージェント導入を推進。Claude Codeのハンズオン研修をリードし、エンジニアリングチームにAI駆動開発プラクティスを確立。

**確かなトレーニング実績** --- 320回以上の研修を実施し、2,500人以上の受講生に到達。満足度90%以上。Microsoft認定トレーナーとしてIgniteでの登壇経験あり。

</div>

---

## GitHub Activity

<img src="assets/images/contributions.svg" alt="GitHub Contributions" style="width: 100%; max-width: 800px;">

---

## 職務経歴

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">フリーランス トレーナー / フルスタックエンジニア</div>
<div class="job-period">2025年7月 - 現在</div>
</div>

- AI駆動開発（Claude Code）でプロダクションシステムを構築、従来比400%以上の開発速度を実現
- Udemyを通じてAzureオンライン研修を提供、企業向けカスタマイズコンテンツを作成
- Webアプリケーション、データ分析システム、業務プロセス自動化の設計・開発
- 組織内でのAIエージェント導入を推進、ハンズオン研修をリード
- オフショア開発チームの管理、計画からリリースまでの全工程を監督

<p class="achievements-label">実績:</p>
- **広告評価システム**: AIペアプログラミングで3週間、349コミット、コード量約2.4MB
- **アフィリエイト管理システム**: 3週間、109コミット、コード量310KB
- UdemyでAzure基礎コースの立ち上げ・運営に成功
- 主要トレーニング企業（Trainocate、Fast Lane、Microsoft）とパートナーシップを構築
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">日本マイクロソフト株式会社 - クラウド技術トレーナー</div>
<div class="job-period">2021年2月 - 2025年7月</div>
</div>
<div class="protected-content" markdown="1">

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
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">TOPGATE - GCP認定トレーナー</div>
<div class="job-period">2019年8月 - 2021年1月</div>
</div>
<div class="protected-content" markdown="1">

- IaaS、PaaS、Kubernetes、ネットワーク、ロードバランシング、ストレージ、ビッグデータ、MLをカバーするGCP公式トレーニングコースを提供
- GCPトレーニング事業をゼロから立ち上げ
- 新規GCP認定トレーナーを育成

<p class="achievements-label">実績:</p>
- トレーニング事業をゼロから立ち上げ
- 3つのGCP公式トレーニングコースを提供
- 学生満足度平均4.6点以上（5.0点満点）
- 4名のGCPトレーナーを育成
</div>
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">フリーランスエンジニア</div>
<div class="job-period">2017年4月 - 2019年7月</div>
</div>
<div class="protected-content" markdown="1">

- Pythonプログラミングのオンライン講師
- Python・Seleniumを使用したWebスクレイピング開発プロジェクト
- WordPressおよびPython (Flask) Webアプリケーション開発

<p class="achievements-label">実績:</p>
- Udemyオンラインコースを4つ制作・提供
- Pythonを使用したフルスタック開発プロジェクトを4件完了
</div>
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">ヘルスケアリレーションズ</div>
<div class="job-period">2015年1月 - 2017年5月</div>
</div>
<div class="protected-content" markdown="1">

- 地域医療システムの要件定義・構築・導入・保守
- 地域連携ウェアラブルデバイスIoT実証実験プロジェクト

<p class="achievements-label">実績:</p>
- 50以上の施設をつなぐ医療ネットワークシステムを構築
- 困難な移行プロジェクトを管理し、計画通りに完了
</div>
</div>

<div class="job" markdown="1">
<div class="job-header">
<div class="job-title">富士ゼロックス - メディカル / 商品企画 / ソフトウェア開発</div>
<div class="job-period">2003年4月 - 2015年12月</div>
</div>
<div class="protected-content" markdown="1">

- 院内文書管理システムの開発
- 中小企業向けネットワークサービス商品の企画
- 全国2万店のコンビニ向け印刷システム開発

<p class="achievements-label">実績:</p>
- 医療パッケージシステムのビューア描画速度を2倍に改善
- 1,000床以上の大規模病院へシステム導入
- エンタープライズ向けサービス商品を2つリリース
</div>
</div>

<div class="unlock-section unlock-section-ja">
<h3>詳細を表示</h3>
<p>詳細な職務経歴、スキル、学歴を確認するには、パスワードを入力してください。</p>
<input type="password" id="passwordInputJa" placeholder="パスワード" maxlength="10">
<button onclick="unlockContentJa()">ロック解除</button>
<div class="error" id="errorMsgJa"></div>
<div class="contact-hint">
アクセス権の取得は kikukawa@stack-bee.io までご連絡ください
</div>
</div>

<div class="protected-content" markdown="1">

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
| **AI** | Claude Code, GitHub Copilot, Azure OpenAI, GPT-4, AI駆動開発ワークフロー |
| **クラウド** | Azure, Google Cloud |
| **トレーニング** | コース設計、教育コンテンツ作成、Udemy、テクニカルイネーブルメント |
| **プログラミング** | TypeScript, Python, C#, C++, .NET |
| **Web** | Nuxt.js, Vue.js, Node.js, HTML, JavaScript |
| **データベース** | Supabase, SQL Server, MySQL, Redis, Cosmos DB, Firestore |
| **DevOps** | Docker, Kubernetes, GitHub Actions |

</div>

---

[ホームに戻る](.){: .btn}

</div>

<script>
const headerDescriptions = {
  en: 'AI-Driven Developer & Technical Enablement Specialist | 20+ years in Cloud, AI, and Full-Stack Development',
  ja: 'AI駆動開発者＆テクニカルイネーブルメントスペシャリスト｜クラウド・AI・フルスタック開発で20年以上の経験'
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
  // Update Cayman theme header description
  const headerDesc = document.querySelector('.project-tagline');
  if (headerDesc) {
    headerDesc.textContent = headerDescriptions[lang];
  }
  // Update custom header description
  const customDesc = document.querySelector('.custom-header-desc');
  if (customDesc) {
    customDesc.textContent = headerDescriptions[lang];
  }
}

// Initialize language on page load
(function() {
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
})();
</script>
