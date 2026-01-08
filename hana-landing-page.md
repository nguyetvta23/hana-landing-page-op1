# Plan: Hana Landing Page với i18n

> **Status**: 🟢 IN_PROGRESS  
> **Created**: 2026-01-08 13:30  
> **Updated**: 2026-01-08 14:05

---

## 1. Tổng Quan

Landing page cho Hana AI Browser Extension với:
- Vite + React + Tailwind CSS
- Theme "Hana Bloom" (Indigo-Pink gradient, dark mode, glassmorphism)
- Đa ngôn ngữ: Tiếng Việt (vi), Tiếng Anh (en), Tiếng Nhật (ja)
- Video popup cho hướng dẫn sử dụng

---

## 2. Đặc Tả Nội Dung Chi Tiết

### 2.1 Navigation

| Element | VI | EN | JA |
|---------|----|----|-----|
| Logo | Hana | Hana | Hana |
| Link 1 | Features | Features | 機能 |
| Link 2 | How it works | How it works | 使い方 |
| Link 3 | Pricing | Pricing | 価格 |
| Sign In | Sign In | Sign In | サインイン |
| **CTA Button** | **Add to Chrome** | **Add to Chrome** | **Chromeに追加** |

### 2.2 Hero Section

**Headline:**
| Language | Line 1 | Line 2 (Gradient) |
|----------|--------|-------------------|
| VI | Duyệt Web Thông Minh | Với Sức Mạnh AI |
| EN | Browse Smarter | With AI Power |
| JA | スマートにブラウジング | AIの力で |

**Description:**
- **VI**: Hana tự động tóm tắt nội dung, quản lý tabs thông minh, và giúp bạn tăng năng suất gấp 3 lần - hoàn toàn tự động và không làm gián đoạn công việc.
- **EN**: Hana automatically summarizes content, manages tabs intelligently, and boosts your productivity 3x - completely automated and non-intrusive.
- **JA**: Hanaはコンテンツを自動要約し、タブをインテリジェントに管理し、生産性を3倍向上させます。完全に自動化され、邪魔になりません。

**CTA Buttons:**
| Button | VI | EN | JA |
|--------|----|----|-----|
| Primary | Thêm vào Chrome - Miễn phí | Add to Chrome - It's Free | Chromeに追加 - 無料 |
| Secondary | Xem Video Hướng Dẫn 🎬 | Watch Instruction Video 🎬 | ガイド動画を見る 🎬 |

**Stats Badges:**
- ⭐ 4.9/5 trên Chrome Store / on Chrome Store / Chrome ストアで
- 👥 10K+ người dùng / users / ユーザー
- ⏱️ Tiết kiệm 2h/ngày / Save 2h/day / 節約 2h/日

---

### 2.3 How It Works Section

**Title:**
| VI | EN | JA |
|----|----|-----|
| Hana Hoạt Động Như Thế Nào? | How Does Hana Work? | Hanaの仕組み |

**Subtitle:**
- **VI**: Chỉ 3 bước đơn giản để bắt đầu duyệt web thông minh hơn. Không cần cấu hình phức tạp - Hana tự động làm mọi thứ cho bạn.
- **EN**: Just 3 simple steps to start browsing smarter. No complex setup required - Hana handles everything automatically for you.
- **JA**: スマートなブラウジングを始めるための3つの簡単なステップ。複雑な設定は不要 - Hanaがすべてを自動で処理します。

**Step 1: Cài Đặt Extension / Install the Extension / 拡張機能をインストール**
| VI | EN | JA |
|----|----|-----|
| Thêm Hana vào Chrome chỉ trong 1 click từ Chrome Web Store. Hoàn toàn miễn phí, không cần đăng ký tài khoản, không cần cung cấp email. Extension rất nhẹ và sẽ không làm chậm trình duyệt của bạn. | Add Hana to Chrome with just one click from the Chrome Web Store. Completely free, no registration required, no email needed. The extension is super lightweight and won't slow down your browser. | Chrome ウェブストアからワンクリックでHanaを追加。完全無料、登録不要、メールも不要。拡張機能は非常に軽量で、ブラウザを遅くすることはありません。 |

**Step 2: Duyệt Web Bình Thường / Browse as Usual / 通常通りブラウジング**
| VI | EN | JA |
|----|----|-----|
| Tiếp tục duyệt web như bình thường - đọc tin tức, nghiên cứu, làm việc. Hana chạy ngầm trong nền, tự động phân tích nội dung bạn đang xem, tóm tắt bài viết dài, và tổ chức tabs thông minh theo chủ đề. | Continue browsing the web normally - read news, research, work. Hana runs silently in the background, automatically analyzing the content you're viewing, summarizing long articles, and organizing tabs intelligently by topic. | 通常通りウェブを閲覧してください - ニュースを読んだり、調べ物をしたり、仕事をしたり。Hanaはバックグラウンドで静かに動作し、閲覧中のコンテンツを自動分析し、長い記事を要約し、トピック別にタブを整理します。 |

**Step 3: Nhận Insights Thông Minh / Get Smart Insights / スマートなインサイトを取得**
| VI | EN | JA |
|----|----|-----|
| Click vào icon Hana bất cứ lúc nào để xem bản tóm tắt của trang hiện tại, insights về nội dung, và các gợi ý được cá nhân hóa bởi AI. Bạn cũng có thể hỏi Hana bất cứ điều gì về nội dung đang đọc. | Click the Hana icon anytime to see a summary of the current page, content insights, and AI-personalized suggestions. You can also ask Hana anything about what you're reading. | いつでもHanaアイコンをクリックして、現在のページの要約、コンテンツのインサイト、AIによるパーソナライズされた提案を確認できます。読んでいる内容についてHanaに何でも質問することもできます。 |

---

### 2.4 Dashboard Preview Section

**Title:**
| VI | EN | JA |
|----|----|-----|
| Dashboard Phân Tích Mạnh Mẽ | Powerful Analytics Dashboard | 強力な分析ダッシュボード |

**Description (Enriched):**
- **VI**: Theo dõi toàn diện thói quen duyệt web của bạn. Xem chi tiết thời gian đã tiết kiệm nhờ tóm tắt AI, số lượng bài viết đã đọc, website truy cập thường xuyên, và phân tích hiệu suất làm việc theo tuần/tháng. Đặt mục tiêu cá nhân và theo dõi tiến độ.
- **EN**: Comprehensive tracking of your browsing habits. View detailed time saved through AI summaries, number of articles read, frequently visited websites, and weekly/monthly productivity analysis. Set personal goals and track your progress.
- **JA**: ブラウジング習慣を包括的に追跡。AI要約による節約時間、読んだ記事数、よく訪問するウェブサイト、週/月ごとの生産性分析を詳細に確認できます。個人目標を設定し、進捗を追跡しましょう。

**Dashboard Features:**
- Thời gian tiết kiệm / Time Saved / 節約時間
- Bài viết đã tóm tắt / Articles Summarized / 要約した記事
- Website truy cập nhiều nhất / Most Visited Sites / よく訪問するサイト
- Thống kê hàng tuần / Weekly Statistics / 週間統計
- Điểm năng suất / Productivity Score / 生産性スコア

---

### 2.5 Features Section

**Title:**
| VI | EN | JA |
|----|----|-----|
| Tính Năng Nổi Bật | Key Features | 主な機能 |

**Subtitle:**
- **VI**: Được thiết kế để tăng năng suất tối đa với công nghệ AI tiên tiến nhất
- **EN**: Designed for maximum productivity with cutting-edge AI technology
- **JA**: 最先端のAI技術で最大限の生産性を実現

#### Feature 1: Tóm Tắt Thông Minh / Smart Summarization / スマート要約

| Language | Description |
|----------|-------------|
| VI | AI phân tích và tóm tắt bất kỳ bài viết nào chỉ trong vài giây. Nắm bắt ý chính từ bài báo dài, paper nghiên cứu, hay documentation kỹ thuật mà không cần đọc toàn bộ. Hỗ trợ đa ngôn ngữ và tùy chỉnh độ dài tóm tắt. |
| EN | AI analyzes and summarizes any article in just seconds. Grasp key points from long articles, research papers, or technical documentation without reading everything. Supports multiple languages and customizable summary length. |
| JA | AIがあらゆる記事をわずか数秒で分析・要約。長い記事、研究論文、技術ドキュメントから全文を読まずに要点を把握。多言語対応、要約の長さもカスタマイズ可能。 |

**Highlights:** Tóm tắt trong 3 giây | 20+ ngôn ngữ | Tùy chỉnh độ dài

#### Feature 2: Siêu Nhanh & Nhẹ / Lightning Fast & Lightweight / 超高速＆軽量

| Language | Description |
|----------|-------------|
| VI | Được tối ưu hóa đến từng byte. Hana sử dụng caching thông minh, lazy loading, và background processing để đảm bảo không làm chậm trình duyệt dù bạn mở bao nhiêu tabs. Tiêu thụ RAM dưới 50MB. |
| EN | Optimized down to every byte. Hana uses smart caching, lazy loading, and background processing to ensure it never slows down your browser regardless of how many tabs you open. Uses less than 50MB RAM. |
| JA | 1バイトまで最適化。Hanaはスマートキャッシュ、遅延読み込み、バックグラウンド処理を使用し、タブをいくつ開いてもブラウザを遅くしません。RAM使用量は50MB未満。 |

**Highlights:** Dưới 50MB RAM | Không ảnh hưởng tốc độ | Background processing

#### Feature 3: Bảo Mật Tuyệt Đối / Absolute Security / 絶対的なセキュリティ

| Language | Description |
|----------|-------------|
| VI | Dữ liệu của bạn được xử lý cục bộ trên máy, không gửi về bất kỳ server nào. Chúng tôi không thu thập lịch sử duyệt web, không tracking, không quảng cáo. Mã nguồn được kiểm toán bảo mật định kỳ. |
| EN | Your data is processed locally on your machine, never sent to any server. We don't collect browsing history, no tracking, no ads. Our codebase is regularly security audited. |
| JA | データはローカルマシンで処理され、サーバーには一切送信されません。閲覧履歴の収集なし、トラッキングなし、広告なし。コードベースは定期的にセキュリティ監査を受けています。 |

**Highlights:** Xử lý cục bộ | Không tracking | Kiểm toán bảo mật

---

### 2.6 CTA Section

**Title:**
| VI | EN | JA |
|----|----|-----|
| Sẵn Sàng Nâng Cấp Trình Duyệt? | Ready to Upgrade Your Browser? | ブラウザをアップグレードする準備はできましたか？ |

**Subtitle:**
- **VI**: Tham gia cùng hàng nghìn người dùng đã thay đổi cách họ tương tác với web. Bắt đầu tiết kiệm 2 giờ mỗi ngày ngay hôm nay.
- **EN**: Join thousands of users who have transformed the way they interact with the web. Start saving 2 hours every day today.
- **JA**: ウェブとの関わり方を変えた何千人ものユーザーに参加しましょう。今日から毎日2時間を節約しましょう。

**CTA Button:**
| VI | EN | JA |
|----|----|-----|
| Thêm Vào Chrome | Add to Chrome | Chromeに追加 |

**Trust Badges:**
| VI | EN | JA |
|----|----|-----|
| ✓ Miễn phí mãi mãi | ✓ Free forever | ✓ 永久無料 |
| ✓ Không cần thẻ tín dụng | ✓ No credit card required | ✓ クレジットカード不要 |
| ✓ Xóa bất cứ lúc nào | ✓ Uninstall anytime | ✓ いつでも削除可能 |

---

### 2.7 Footer

| Element | VI | EN | JA |
|---------|----|----|-----|
| Privacy | Chính Sách Bảo Mật | Privacy Policy | プライバシーポリシー |
| Terms | Điều Khoản Sử Dụng | Terms of Service | 利用規約 |
| Twitter | Twitter | Twitter | Twitter |
| Support | Hỗ Trợ | Support | サポート |
| Copyright | © 2024 Hana Extension. All rights reserved. | (same) | (same) |

---

## 3. Tính Năng Đặc Biệt

### 3.1 Video Popup

- **Trigger**: Click "Xem Video Hướng Dẫn" / "Watch Instruction Video"
- **Behavior**: Modal overlay với video embed
- **Features**:
  - ESC để đóng
  - Click outside để đóng
  - Blur backdrop effect
  - Responsive sizing

### 3.2 Language Switcher

- **Languages**: 🇻🇳 Tiếng Việt | 🇺🇸 English | 🇯🇵 日本語
- **Persistence**: localStorage
- **Detection**: Browser language auto-detect
- **Fallback**: Vietnamese (vi)

---

## 4. Files Đã Thay Đổi

| File | Status | Description |
|------|--------|-------------|
| `src/i18n/locales/vi.json` | ✅ Updated | Nội dung tiếng Việt đầy đủ |
| `src/i18n/locales/en.json` | ✅ Updated | Nội dung tiếng Anh đầy đủ |
| `src/i18n/locales/ja.json` | ✅ Updated | Nội dung tiếng Nhật đầy đủ |
| `src/components/VideoPopup.tsx` | ✅ Created | Video popup component |
| `src/App.tsx` | ✅ Updated | Integrated VideoPopup, Chrome icon, updated CTAs |

---

## 5. Next Steps

- [ ] Replace YouTube placeholder với video thực tế
- [ ] Thêm Chrome Web Store link thực tế
- [ ] Review Japanese translations bởi native speaker
- [ ] Test responsive layout
- [ ] Production build và deploy

---

## 6. Proposed Enhancements (từ phân tích Monica.im)

> Xem chi tiết tại: `implementation_plan.md`

### 6.1 High Priority

#### Privacy Comparison Badge
Highlight điểm mạnh của Hana: local processing, no tracking, security audited

#### Tabbed Feature Preview
Thay thế static feature cards bằng interactive tabs với animation:
- Tab: Summarize | Translate | Chat | Write
- Mỗi tab hiển thị GIF/screenshot tương ứng

### 6.2 Medium Priority

#### Persona-Based Section
"Hana dành cho ai?" với 4 personas:
- 📚 Researchers: Tóm tắt papers nhanh
- 💻 Developers: Theo dõi API performance
- 🔒 Privacy Advocates: Xử lý cục bộ
- 🌍 Multilingual Users: Dịch thuật 20+ ngôn ngữ

#### FAQ Section
Câu hỏi thường gặp:
- Is it really free?
- How do you protect my data?
- Does it slow down my browser?
- What browsers are supported?

### 6.3 Low Priority

#### Sticky Header CTA
Navigation cố định khi scroll với "Add to Chrome" button luôn hiển thị

#### Browser Compatibility Icons
Hiển thị logos: Chrome, Edge, Brave

### 6.4 Future

#### Interactive Demo
Mock demo cho phép user thử tính năng mà không cần cài extension

