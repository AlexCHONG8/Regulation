# 21st Magic MCP Plugin Guide
# 21st Magic MCP 插件指南

## 🎯 What is 21st Magic MCP?

**21st Magic MCP** is a Model Context Protocol (MCP) server that generates **modern UI components** from 21st.dev's library of React components.

### Capabilities / 能力
- ✅ Generate React/Next.js UI components
- ✅ Modern design system integration
- ✅ Responsive, accessible components
- ✅ Pre-built components: buttons, forms, tables, modals, cards, etc.
- ✅ Works directly within Claude Code

---

## 🚀 How to Use 21st Magic MCP

### Method 1: Automatic Activation / 自动激活

When you request UI components, Claude Code **automatically** activates the 21st Magic MCP:

```
User: "Create a login form with email and password fields"
Claude: [Automatically uses 21st Magic MCP to generate React component]
```

### Method 2: Using /ui Command / 使用 /ui 命令

Type `/ui` followed by your component description:

```
/ui A data table with sortable columns for regulatory standards
/ui A responsive navigation bar with logo and menu items
/ui A modal dialog for confirming critical actions
/ui A card component displaying key metrics
```

### Method 3: Direct Component Requests / 直接组件请求

Simply describe what UI component you need:

```
"Create a button with hover effects"
"Build a form with validation"
"Design a table with filtering"
```

---

## 📦 Available Components / 可用组件

The 21st Magic MCP can generate:

| Component Type | Examples / 示例 |
|---------------|---------------|
| **Buttons** | Primary, secondary, icon buttons, button groups |
| **Forms** | Login, registration, search forms, validation |
| **Tables** | Data tables, sortable, filterable, responsive |
| **Modals/Dialogs** | Confirmation dialogs, forms in modals |
| **Cards** | Info cards, metrics cards, image cards |
| **Navigation** | Navbar, sidebar, tabs, breadcrumbs |
| **Inputs** | Text, select, checkbox, radio, date picker |
| **Displays** | Badges, tags, alerts, progress bars |
| **Layouts** | Grid, flexbox, containers, sections |

---

## 💡 Examples / 示例

### Example 1: Generate a Table
```
/ui A responsive table for regulatory standards with columns for code, title, version, and status
```

**Output**: React component with:
- Sortable columns
- Row hover effects
- Mobile-responsive design
- Status badges

### Example 2: Generate a Form
```
/ui A login form with email, password fields, and "Remember me" checkbox
```

**Output**: React component with:
- Form validation
- Error messages
- Submit button with loading state
- Responsive layout

### Example 3: Generate a Navigation Bar
```
/ui A navigation bar with Summed Medtech logo, menu links, and language toggle
```

**Output**: React component with:
- Logo placement
- Dropdown menu
- Mobile hamburger menu
- Language switcher

---

## 🛠️ Integration with Your Regulatory Tracker

### How It Can Help / 如何提供帮助

1. **Add New UI Components**
   - Add data visualization dashboards
   - Create comparison tables
   - Build settings/configuration panels

2. **Enhance Existing Pages**
   - Add filtering to tables
   - Implement modal dialogs
   - Create responsive layouts

3. **Generate Micro-Interactions**
   - Loading states
   - Hover animations
   - Toast notifications

---

## 📝 Best Practices / 最佳实践

### When to Use 21st Magic MCP

✅ **Use it for:**
- Rapid UI prototyping
- Standard component patterns
- Responsive design requirements
- Accessibility-compliant components
- Modern React/Next.js applications

❌ **Don't use it for:**
- Highly custom/specialized designs
- Complex business logic (use code instead)
- Backend functionality (it's UI-only)
- Data processing (it's presentation layer)

### Tips for Best Results / 获得最佳效果的技巧

1. **Be Specific** - Describe the component clearly
   ```
   Good: "A data table with 5 columns, sortable headers, and pagination"
   Bad: "A table"
   ```

2. **Specify Context** - Mention the framework and purpose
   ```
   "Create a React table component for displaying medical device standards"
   ```

3. **Include Requirements** - List specific features needed
   ```
   "A form with validation, error messages, and submit button with loading state"
   ```

4. **Mention Accessibility** - If needed for compliance
   ```
   "An accessible modal with ARIA labels and keyboard navigation"
   ```

---

## 🔧 How It Works / 工作原理

### Architecture / 架构

```
Your Request → Claude Code → 21st Magic MCP → 21st.dev API → React Component Code
```

### Process Flow / 流程

1. **Request**: You describe the UI component you need
2. **Analysis**: Claude Code analyzes your requirements
3. **Generation**: 21st Magic MCP queries 21st.dev's component library
4. **Delivery**: Returns React/Next.js component code
5. **Integration**: You integrate the code into your project

---

## 🎨 Customization Options / 自定义选项

After generation, you can customize:

- **Styling**: Adjust colors, spacing, sizes
- **Behavior**: Add event handlers, state management
- **Content**: Replace placeholder text with actual data
- **Accessibility**: Add ARIA labels, keyboard navigation

---

## 📚 Related Tools / 相关工具

The 21st Magic MCP works great with:

- **Context7 MCP**: Official documentation lookup
- **Sequential MCP**: Complex problem solving
- **Serena MCP**: Project memory and symbol operations
- **Morphllm MCP**: Pattern-based code edits

---

## 🚫 Limitations / 限制

- **Framework**: Primarily for React/Next.js
- **Styling**: Uses Tailwind CSS (may need adjustment for your project)
- **Customization**: May require refinement for specialized needs
- **Backend**: UI components only, no backend logic

---

## 💼 Example for Summed Medtech

### Scenario: Add a Filter Component

**Request:**
```
/ui A filter panel for regulatory standards with dropdowns for category, status, and year, with a "Apply Filters" button
```

**Use Case:**
- Add to the regulatory tracker
- Filter standards by type, status, or version
- Improve user experience for finding specific standards

### Scenario: Create a Dashboard Widget

**Request:**
```
/ui A card widget displaying key compliance metrics with icons, labels, and trend indicators
```

**Use Case:**
- Show on the dashboard tab
- Display compliance status at a glance
- Visual progress tracking

---

## 🔗 Resources / 资源

- **21st.dev Website**: https://21st.dev/
- **Component Library**: https://21st.dev/components
- **Documentation**: Available in MCP server info

---

## ❓ FAQ / 常见问题

### Q: Do I need to install anything?
**A**: No! The 21st Magic MCP is already available in Claude Code. Just use the `/ui` command.

### Q: Can I use it for Vue or Angular?
**A**: Primarily designed for React/Next.js, but the patterns can be adapted.

### Q: Is it free?
**A**: Yes, the component generation is free through the MCP server.

### Q: Can I modify the generated code?
**A**: Absolutely! The code is yours to customize as needed.

---

**END OF GUIDE**

For Summed Medtech Regulatory Tracker
Generated: 2025-12-24
