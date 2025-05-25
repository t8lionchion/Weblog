# **Weblog 網頁規劃文件**

## 一、設計理念

本專案為個人部落格網站，目標是打造一個能清楚呈現自我介紹、技術分享與心得記錄的平台，並搭配後台管理功能實現 CRUD 操作。使用者僅限本人，將透過伺服器保護機制（如 IP 限制）控管後台存取權限。

核心理念：

* 練習從 UI/UX 設計 → 前端實作 → 後端串接 → 上線部署 的完整流程
* 打造一套可持續更新內容的全端部落格系統
* 設計與使用體驗上保持簡潔、流暢、低學習門檻

---

## 二、視覺風格

整體以 **簡潔深色系搭配亮色點綴**為主，風格理性、有系統性，符合個人技術風格與求職作品展示需求。

| 元素類型     | 視覺設計說明                        |
| -------- | ----------------------------- |
| **顏色配色** | 主色：深藍紫（#2C2C4D）/ 輔色：灰白與亮色按鈕點綴 |
| **字型**   | 無襯線字體，清晰易讀，避免花俏風格             |
| **版面佈局** | 網頁使用響應式設計，支援桌機與手機版            |
| **元件設計** | 使用卡片式風格呈現內容區塊，搭配 hover 動畫效果   |
| **圖片處理** | 使用遮罩與固定比例展示，保持一致性與整潔感         |

---

## 三、網頁結構

整體架構共分為前台（使用者端）與後台（管理端）兩區塊：

### （一）前台頁面

| 頁面名稱      | 功能說明                |
| --------- | ------------------- |
| **Home**  | 呈現最新心得與隨筆文章         |
| **Code**  | 技術筆記與實作經驗分享         |
| **About** | 自我介紹、技能樹、時間軸形式的經歷展示 |

### （二）後台管理頁面

| 頁面名稱         | 功能說明               |
| ------------ | ------------------ |
| **Home 管理**  | 管理心情心得文章（新增／修改／刪除） |
| **Code 管理**  | 管理技術文章（新增／修改／刪除）   |
| **About 管理** | 管理自傳、技能與時間軸資料      |

### （三）共用元件

* Header：主選單與 Logo
* 側邊 Menu（管理介面）：快速跳轉各功能區
* Footer：聯絡方式

---

## 四、使用技術

| 類別           | 使用技術與工具                                                          |
| ------------ | ---------------------------------------------------------------- |
| **UI/UX 設計** | [Figma](https://www.figma.com/) — 用於流程圖繪製與視覺版面設計                 |
| **前端**       | HTML + CSS（純手刻）＋（第二階段導入） Bootstrap＋ JavaScript（第三階段導入互動功能）       |
| **後端（預定）**   | Node.js + Express.js（RESTful API 設計）、MySQL（資料儲存）、Postman（API 測試） |
| **版本控制**     | Git + GitHub，採 Git Flow 流程：`dev` →  → `master`       |
| **伺服器部署**    | Ubuntu + Apache2 + 虛擬主機設定 + .htaccess URL 覆寫+SQL安裝                     |
| **開發工具**     | VS Code、Notion、Chrome DevTools                                   |

---
## 🎨 五、Figma 設計稿連結  


此專案 UI 介面使用 Figma 設計，包括首頁、技術分享頁、關於我頁與管理者介面。  


🔗 [點我查看 Figma 設計稿｜View Weblog Figma Design](https://www.figma.com/design/PHtkzwXF5LdESX4uhWYNoK/weblog-V2?node-id=15-2&t=hOfnCZlLgos5t7hu-1)

當然可以，以下是你提供的《Weblog 網頁規劃文件》的**英文版翻譯**，已保持專業口吻與條理清晰的格式，適合放入 GitHub、Notion、或 README 文件中。

---

# 🗂️ Weblog Project Planning Document 

## 1. Design Concept

This project is a personal blog system designed to clearly present personal introductions, technical sharing, and reflection posts. It also includes a backend management interface with full CRUD functionality.
Access to the admin interface is restricted to the site owner and will be protected via server-side mechanisms such as IP whitelisting.

**Core principles:**

* Practice the full development flow from UI/UX design → frontend implementation → backend integration → deployment
* Build a maintainable full-stack blog system for long-term content updates
* Maintain a clean, smooth, and user-friendly experience with low learning cost

---

## 2. Visual Style

The overall design adopts a **dark-themed interface with bright accents**, reflecting a clean and structured visual tone—ideal for technical branding and showcasing professional work.

| Element Type         | Visual Style Description                                              |
| -------------------- | --------------------------------------------------------------------- |
| **Color Scheme**     | Primary: Deep Indigo (#2C2C4D); Accents: light tones and buttons      |
| **Typography**       | Sans-serif fonts for clarity and readability; avoids decorative fonts |
| **Layout**           | Responsive web design supporting both desktop and mobile              |
| **Component Design** | Card-based layout with hover animation effects                        |
| **Image Handling**   | Uses masks and fixed aspect ratios for consistency and cleanliness    |

---

## 3. Site Structure

The website is divided into two main sections: **Frontend (User Side)** and **Backend (Admin Panel)**.

### (1) Frontend Pages

| Page      | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| **Home**  | Displays the latest reflections and casual posts                        |
| **Code**  | Technical articles and coding experiences                               |
| **About** | Personal introduction, skills overview, and timeline experience section |

### (2) Backend Admin Pages

| Page            | Description                                          |
| --------------- | ---------------------------------------------------- |
| **Home Admin**  | Manage blog reflections (Create / Edit / Delete)     |
| **Code Admin**  | Manage technical posts (Create / Edit / Delete)      |
| **About Admin** | Edit personal intro, skills, and timeline experience |

### (3) Shared Components

* **Header**: Main navigation and logo
* **Sidebar (Admin)**: Quick access menu to each admin section
* **Footer**: Contact info or site disclaimer

---

## 4. Technologies Used

| Category              | Tools & Technologies                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| **UI/UX Design**      | Figma — for flowcharts and responsive wireframes                                                   |
| **Frontend**          | HTML + CSS (hand-coded), Bootstrap (introduced in Phase 2), JavaScript (Phase 3 for interactivity) |
| **Backend (Planned)** | Node.js + Express.js (RESTful API), MySQL (database), Postman (API testing)                        |
| **Version Control**   | Git + GitHub, following Git Flow branching: `dev → qa → stage → master`                            |
| **Server Deployment** | Ubuntu + Apache2, virtual host configuration, `.htaccess` rewriting, MySQL installation            |
| **Dev Tools**         | VS Code, Notion, Chrome DevTools                                                                   |

---

## 🎨 5. Figma Design Link

The UI interface for this project was designed using Figma, including layouts for the homepage, code sharing page, about page, and admin dashboard.

🔗 [Click here to view the Figma Design – Weblog UI](https://www.figma.com/design/PHtkzwXF5LdESX4uhWYNoK/weblog-V2?node-id=15-2&t=hOfnCZlLgos5t7hu-1)

> *If the link is inaccessible, please make sure the file is shared as “Anyone with the link can view.”*

---
