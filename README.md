# Summed Medtech Regulatory Tracker
# 森迈医疗科技法规标准跟踪系统

## 📁 File Structure / 文件结构

```
Regulation/
├── index.html                  # Main HTML file (主HTML文件)
├── font-guide.html             # Font installation guide (字体安装指南)
├── README.md                   # This file (本文件)
├── MCP_21st_Guide.md          # 21st Magic MCP Plugin guide (MCP插件指南)
├── css/
│   └── styles.css             # All styling (所有样式)
├── js/
│   ├── standards-data.js      # ALL standards data (所有标准数据)
│   └── main.js                # All functionality (所有功能)
└── summed_medtech_regulatory_tracker.html  # Legacy single-file version
```

---

## 🚀 Quick Start / 快速开始

### Opening the Tracker / 打开跟踪器
1. Open `index.html` in any modern browser
   用任何现代浏览器打开 `index.html`
2. Or use local server: `python -m http.server 8000`
   或使用本地服务器: `python -m http.server 8000`

### Font Installation Guide / 字体安装指南
- **Optional but recommended**: Visit `font-guide.html` for font installation instructions
  **可选但推荐**: 访问 `font-guide.html` 查看字体安装说明
- **Purpose**: Ensure optimal display of Chinese and English characters
  **目的**: 确保中英文字符的最佳显示效果
- **Access**: Click "📝 Font Guide" button in the header
  **访问**: 点击标题栏中的"📝 字体指南"按钮

---

## 📝 How to Add/Remove/Update Standards / 如何添加/删除/更新标准

### ✅ TO ADD A NEW STANDARD / 添加新标准

**Step 1: Open `js/standards-data.js`**

**Step 2: Find the appropriate category array:**
- `"product"` - Product-specific standards (产品特定标准)
- `"iso"` - ISO standards
- `"fda"` - FDA regulations
- `"nmpa-laws"` - NMPA laws (NMPA法律)
- `"nmpa-gb"` - GB standards
- `"nmpa-yy"` - YY standards
- `"eu"` - EU regulations
- `"iec"` - IEC standards
- `"astm"` - ASTM standards

**Step 3: Add a new object to the array:**

```javascript
{
    id: "P999",              // Unique ID (唯一ID)
    code: "ISO 99999",       // Standard code (标准号)
    title_en: "Title in English",
    title_cn: "中文标题",
    version: "2024",         // Year/version (年份/版本)
    status: "current",       // Status: current, check, obsolete, draft
    relevance: "Category",   // Relevance category (相关性类别)
    criticality: "🔧",       // Optional: ⭐⭐⭐, 🔧, etc.
    url: "https://...",     // Official link (官方链接)
    subsection: "optional"   // Optional subsection (可选子分类)
}
```

**Example / 示例:**
```javascript
// In the "iso" array
{
    id: "I012",
    code: "ISO 99999",
    title_en: "New medical device standard",
    title_cn: "新医疗器械标准",
    version: "2024",
    status: "current",
    relevance: "General requirements",
    criticality: "⭐⭐",
    url: "https://www.iso.org/standard/99999.html"
}
```

---

### ❌ TO REMOVE A STANDARD / 删除标准

**Step 1: Open `js/standards-data.js`**

**Step 2: Find the standard object you want to remove**

**Step 3: Delete the entire object (from `{` to `},`)**

**Example / 示例:**
```javascript
// DELETE this entire block
{
    id: "I003",
    code: "ISO 10993-1",
    // ... rest of the object
},
```

---

### ✏️ TO UPDATE A STANDARD / 更新标准

**Step 1: Open `js/standards-data.js`**

**Step 2: Find the standard by ID or code**

**Step 3: Modify the fields you need to update**

**Example - Update version and status / 示例 - 更新版本和状态:**
```javascript
// BEFORE / 之前
{
    id: "I003",
    code: "ISO 10993-1",
    version: "2009",
    status: "check",
    // ...
}

// AFTER / 之后
{
    id: "I003",
    code: "ISO 10993-1",
    version: "2024",        // Updated
    status: "current",      // Updated
    // ...
}
```

---

## 🎨 How to Change Styling / 如何更改样式

### Table Column Standards / 表格列标准

All tables follow a **consistent 6-column layout**:

| Column | Width | Alignment | Description |
|--------|-------|-----------|-------------|
| **1. Standard Code** | 140px | Center | ISO, FDA, GB, YY codes (标准号) |
| **2. Title** | Auto (280-450px) | Left | English/Chinese titles (标题) |
| **3. Version/Year** | 100px | Center | Version or year (版本/年份) |
| **4. Status** | 140px | Center | ✅ ⚠️ ❌ 📋 (状态) |
| **5. Relevance** | 180px | Left | Product relevance (相关性) |
| **6. Link** | 80px | Center | URL link (链接) |

**Cross-reference tables** have equal-width columns for NMPA/FDA/EU/ISO.

### To Modify Colors / 修改颜色

**Open `css/styles.css` and find the CSS Variables section:**

```css
:root {
    /* Brand Colors - Summed Medtech Dark Blue */
    --primary-dark: #1a3a5c;    /* Change these */
    --primary: #2c5282;
    --primary-light: #3182ce;

    /* Status Colors */
    --success: #48bb78;
    --warning: #ed8936;
    --danger: #f56565;
    --info: #4299e1;

    /* ... more colors ... */
}
```

### To Change Fonts / 修改字体

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
    /* Change font stack here */
}
```

### To Change Table Column Widths / 修改表格列宽

**In `css/styles.css`, find the Tables section:**

```css
/* Example: Change Standard Code column width */
table > tbody > tr > td:nth-child(1),
table > thead > tr > th:nth-child(1) {
    width: 140px;        /* Change this value */
    min-width: 120px;
    max-width: 180px;
}
```

### To Change Layout / 修改布局

All styles are organized by section with comments:
- `/* === Header === */`
- `/* === Tables === */`
- `/* === Cards === */`
- etc.

Find the section you want to modify and make changes.

---

## 🔄 Data Structure Reference / 数据结构参考

### Status Codes / 状态代码

| Code | Icon | Description / 描述 |
|------|------|-------------------|
| `current` | ✅ | Latest version / 最新版本 |
| `check` | ⚠️ | Check for update / 需检查更新 |
| `obsolete` | ❌ | Superseded / 已废止 |
| `draft` | 📋 | Draft/exposure draft / 草案 |

### Category Codes / 类别代码

| Code | Description / 描述 |
|------|-------------------|
| `product` | Product-specific (产品特定) |
| `iso` | ISO standards |
| `fda` | FDA regulations |
| `nmpa-laws` | NMPA laws and regulations (NMPA法律法规) |
| `nmpa-gb` | GB national standards (GB国家标准) |
| `nmpa-yy` | YY industry standards (YY行业标准) |
| `eu` | EU regulations |
| `iec` | IEC standards |
| `astm` | ASTM standards |

---

## 🛠️ Advanced Customization / 高级自定义

### Adding a New Category / 添加新类别

**1. In `js/standards-data.js`, add new category:**

```javascript
const STANDARDS_DATA = {
    // ... existing categories ...
    "new-category": [
        {
            id: "N001",
            code: "CODE",
            title_en: "Title",
            title_cn: "标题",
            // ... rest of fields
        }
    ]
};
```

**2. In `index.html`, add new tab button:**

```html
<button class="tab-btn" data-tab="new-category" role="tab">
    <span class="text-en">New Category</span>
    <span class="text-cn">新类别</span>
</button>
```

**3. In `index.html`, add new tab content:**

```html
<div class="tab-content" id="new-category" role="tabpanel">
    <div class="section-header">
        <h2>
            <span class="text-en">New Category</span>
            <span class="text-cn">新类别</span>
        </h2>
    </div>
    <!-- Content here -->
</div>
```

---

## 📱 Features / 功能特性

### Built-in Features / 内置功能

1. **Bilingual Toggle / 双语切换**
   - Click EN/中文 button
   - Saves preference automatically

2. **Tab Navigation / 标签导航**
   - 12 organized tabs
   - Keyboard shortcuts: `Ctrl+1-9`

3. **Search / 搜索**
   - Real-time filtering
   - Keyboard shortcut: `Ctrl+K`
   - Press `Escape` to clear

4. **Expandable Sections / 可展开部分**
   - Click to expand/collapse
   - Remembers state

5. **Mobile Responsive / 移动端响应**
   - Works on all screen sizes
   - Touch-friendly

6. **Print Friendly / 打印友好**
   - `Ctrl+P` to print
   - Optimized layout

7. **LocalStorage / 本地存储**
   - Remembers language preference
   - Remembers last tab
   - Remembers expand/collapse states

---

## 🐛 Troubleshooting / 故障排除

### Standards not appearing / 标准不显示

**Problem:** Added standard but not showing in table

**Solution:**
1. Check JSON syntax is valid (use JSON validator)
2. Ensure comma after each object except last one
3. Check ID is unique
4. Clear browser cache and reload

### JavaScript errors / JavaScript错误

**Problem:** Console shows errors

**Solution:**
1. Open browser DevTools (F12)
2. Check Console tab for specific error
3. Ensure `standards-data.js` loads before `main.js`
4. Check for syntax errors in data file

### Styling issues / 样式问题

**Problem:** Styles not applying

**Solution:**
1. Check `styles.css` path is correct
2. Clear browser cache
3. Check CSS syntax (missing closing brace, etc.)

---

## 📊 Maintenance Schedule / 维护计划

### Recommended Update Frequency / 建议更新频率

| Task | Frequency / 频率 |
|------|-----------------|
| Check for new standard versions | Quarterly / 每季度 |
| Update status flags | As needed / 按需 |
| Add new standards | As published / 发布时 |
| Review priority updates | Monthly / 每月 |
| Backup data file | Weekly / 每周 |

### Backup Process / 备份流程

```bash
# Create backup / 创建备份
cp js/standards-data.js js/standards-data-backup-$(date +%Y%m%d).js

# On Windows PowerShell
# 复制 js/standards-data.js js/standards-data-backup-$(Get-Date -Format 'yyyyMMdd').js
```

---

## 📞 Support / 支持

For questions or issues:
- Contact: Regulatory Affairs Department / 法规注册部
- Repository: `/Volumes/森迈医疗科技/05法规注册部/01内部公开/01 法律法规/`
- Generated: 2025-12-24

如有疑问或问题:
- 联系: 法规注册部
- 存储位置: `/Volumes/森迈医疗科技/05法规注册部/01内部公开/01 法律法规/`
- 生成日期: 2025-12-24

---

## 📝 Changelog / 更新日志

### Version 2.0.0 (2025-12-24)
- ✅ Separated CSS, JS, and data files
- ✅ Data-driven approach for easy maintenance
- ✅ Added comprehensive documentation
- ✅ Mobile-responsive design
- ✅ Bilingual support (EN/CN)
- ✅ Search and filter functionality

### Version 1.0.0 (2025-12-24)
- ✅ Initial single-file release

---

**END OF README**
