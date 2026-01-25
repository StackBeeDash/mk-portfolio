---
layout: default
title: Color Comparison
---

<style>
.color-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px 0;
}
@media (max-width: 768px) {
  .color-grid { grid-template-columns: 1fr; }
}
.color-sample {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.color-header {
  padding: 40px 20px;
  text-align: center;
  color: white;
}
.color-header h3 {
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.color-header p {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}
.color-body {
  padding: 20px;
  background: #fff;
}
.color-body .sample-link {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
  margin-bottom: 8px;
}
.color-info {
  font-size: 12px;
  color: #666;
  margin-top: 10px;
}
.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  margin-left: 8px;
}
.badge-trend { background: #ff6b6b; color: white; }
.badge-classic { background: #4a4a4a; color: white; }

/* 1. Cyber Gradient (トレンド) */
.grad-cyber { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.link-cyber { background: #667eea; color: white; }
.link-cyber:hover { background: #764ba2; }

/* 2. Sunset Vibes (トレンド) */
.grad-sunset { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.link-sunset { background: #f5576c; color: white; }
.link-sunset:hover { background: #f093fb; }

/* 3. Ocean Breeze (トレンド) */
.grad-ocean { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.link-ocean { background: #4facfe; color: white; }
.link-ocean:hover { background: #00c9d4; }

/* 4. Aurora (トレンド) */
.grad-aurora { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
.grad-aurora h3, .grad-aurora p { color: #2d3748; text-shadow: none; }
.link-aurora { background: #5a9f9f; color: white; }
.link-aurora:hover { background: #d4788c; }

/* 5. Midnight City (トレンド) */
.grad-midnight { background: linear-gradient(135deg, #232526 0%, #414345 100%); }
.link-midnight { background: #414345; color: white; }
.link-midnight:hover { background: #232526; }

/* 6. Forest */
.grad-forest { background: linear-gradient(135deg, #134e5e 0%, #71b280 100%); }
.link-forest { background: #134e5e; color: white; }
.link-forest:hover { background: #71b280; }

/* 7. Royal Purple */
.grad-royal { background: linear-gradient(135deg, #41295a 0%, #2f0743 100%); }
.link-royal { background: #41295a; color: white; }
.link-royal:hover { background: #2f0743; }

/* 8. Slate Professional */
.grad-slate { background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%); }
.link-slate { background: #2c3e50; color: white; }
.link-slate:hover { background: #3498db; }

/* 9. Warm Ember */
.grad-ember { background: linear-gradient(135deg, #cb356b 0%, #bd3f32 100%); }
.link-ember { background: #cb356b; color: white; }
.link-ember:hover { background: #bd3f32; }

/* 10. Deep Space (現在のカラー) */
.grad-deepspace { background: linear-gradient(120deg, #1a1a2e, #16213e, #0f3460); }
.link-deepspace { background: #0f3460; color: white; }
.link-deepspace:hover { background: #1a1a2e; }
</style>

# Color Comparison

フォント: **Poppins** で固定。以下のカラーパターンから選んでください。

---

## トレンドグラデーション（1-5）

<div class="color-grid">

<div class="color-sample">
  <div class="color-header grad-cyber">
    <h3>1. Cyber Gradient<span class="badge badge-trend">TREND</span></h3>
    <p>Purple to Violet - テック系に人気</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-cyber">View Resume</a>
    <a href="#" class="sample-link link-cyber">GitHub</a>
    <div class="color-info">#667eea → #764ba2</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-sunset">
    <h3>2. Sunset Vibes<span class="badge badge-trend">TREND</span></h3>
    <p>Pink to Coral - 華やかでモダン</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-sunset">View Resume</a>
    <a href="#" class="sample-link link-sunset">GitHub</a>
    <div class="color-info">#f093fb → #f5576c</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-ocean">
    <h3>3. Ocean Breeze<span class="badge badge-trend">TREND</span></h3>
    <p>Blue to Cyan - 爽やかでクリーン</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-ocean">View Resume</a>
    <a href="#" class="sample-link link-ocean">GitHub</a>
    <div class="color-info">#4facfe → #00f2fe</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-aurora">
    <h3>4. Aurora<span class="badge badge-trend">TREND</span></h3>
    <p>Mint to Pink - 柔らかく優しい印象</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-aurora">View Resume</a>
    <a href="#" class="sample-link link-aurora">GitHub</a>
    <div class="color-info">#a8edea → #fed6e3</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-midnight">
    <h3>5. Midnight City<span class="badge badge-trend">TREND</span></h3>
    <p>Dark Grey - ミニマルでシック</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-midnight">View Resume</a>
    <a href="#" class="sample-link link-midnight">GitHub</a>
    <div class="color-info">#232526 → #414345</div>
  </div>
</div>

</div>

---

## クラシック & プロフェッショナル（6-10）

<div class="color-grid">

<div class="color-sample">
  <div class="color-header grad-forest">
    <h3>6. Forest<span class="badge badge-classic">CLASSIC</span></h3>
    <p>Teal to Green - 自然で落ち着いた印象</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-forest">View Resume</a>
    <a href="#" class="sample-link link-forest">GitHub</a>
    <div class="color-info">#134e5e → #71b280</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-royal">
    <h3>7. Royal Purple<span class="badge badge-classic">CLASSIC</span></h3>
    <p>Deep Purple - 高級感・知的な印象</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-royal">View Resume</a>
    <a href="#" class="sample-link link-royal">GitHub</a>
    <div class="color-info">#41295a → #2f0743</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-slate">
    <h3>8. Slate Professional<span class="badge badge-classic">CLASSIC</span></h3>
    <p>Navy to Blue - ビジネス向け信頼感</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-slate">View Resume</a>
    <a href="#" class="sample-link link-slate">GitHub</a>
    <div class="color-info">#2c3e50 → #3498db</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-ember">
    <h3>9. Warm Ember<span class="badge badge-classic">CLASSIC</span></h3>
    <p>Magenta to Red - 情熱的でエネルギッシュ</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-ember">View Resume</a>
    <a href="#" class="sample-link link-ember">GitHub</a>
    <div class="color-info">#cb356b → #bd3f32</div>
  </div>
</div>

<div class="color-sample">
  <div class="color-header grad-deepspace">
    <h3>10. Deep Space（現在）<span class="badge badge-classic">CLASSIC</span></h3>
    <p>Dark Blue - 現在適用中のカラー</p>
  </div>
  <div class="color-body">
    <a href="#" class="sample-link link-deepspace">View Resume</a>
    <a href="#" class="sample-link link-deepspace">GitHub</a>
    <div class="color-info">#1a1a2e → #16213e → #0f3460</div>
  </div>
</div>

</div>

---

## 選び方のポイント

| カテゴリ | おすすめ |
|---------|---------|
| **テック・スタートアップ感** | 1. Cyber, 3. Ocean |
| **クリエイティブ・デザイン系** | 2. Sunset, 4. Aurora |
| **ミニマル・シック** | 5. Midnight, 10. Deep Space |
| **プロフェッショナル・ビジネス** | 6. Forest, 8. Slate |
| **高級感・知的** | 7. Royal Purple |
| **情熱・エネルギー** | 9. Warm Ember |

---

番号で教えてね！（例：「3番にして」）

[Back to Home](.){: .btn}
