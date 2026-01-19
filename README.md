# Watercolor UI - Template Systems

This repository contains two comprehensive template/boilerplate systems demonstrating the [Watercolor UI](https://github.com/zeturn/watercolor) component library:

1. **React Template** - Full-featured React application with routing and multiple page scenarios
2. **Vue Template** - Full-featured Vue 3 application with routing and multiple page scenarios

Both templates showcase the design philosophy and capabilities of Watercolor UI through real-world application scenarios.

## 📁 Repository Structure

```
watercolor_models/
├── react-template/     # React + Vite template
│   ├── src/
│   │   ├── pages/     # 5 example pages
│   │   └── ...
│   └── README.md
├── vue-template/       # Vue 3 + Vite template
│   ├── src/
│   │   ├── pages/     # 5 example pages
│   │   └── ...
│   └── README.md
└── README.md          # This file
```

## 🎨 Demo Pages

Both templates include the same 5 comprehensive example pages:

### 1. Landing Page (`/`)
- Hero section with call-to-action
- Feature highlights grid
- Testimonials section
- Fully responsive design

### 2. Login Page (`/login`)
- Authentication form
- Input validation
- Remember me checkbox
- Password reset link
- Success notifications

### 3. Dashboard (`/dashboard`)
- Statistics cards
- Data tables with status badges
- Progress indicators
- Recent activity feed
- Quick action buttons

### 4. Article/Blog Page (`/article`)
- Rich typography
- Breadcrumb navigation
- Author information
- Content sections
- Related articles
- Tag chips

### 5. Management Panel (`/management`)
- Full CRUD operations
- Data table with sorting
- Search and filtering
- Pagination
- Modal dialogs for add/edit
- Tab navigation
- Status badges

## 🚀 Quick Start

Note: `npm run dev` / `npm run build` in each template will refresh Watercolor packages from npm (latest) on each run.

### React Template

```bash
cd react-template
npm install
npm run dev
```

Visit http://localhost:5173

### Vue Template

```bash
cd vue-template
npm install
npm run dev
```

Visit http://localhost:5173

## 🧩 Components Demonstrated

Both templates showcase the following Watercolor UI components:

- **Layout**: AppBar, Container
- **Navigation**: Button, Breadcrumb, Tabs
- **Data Display**: Card, Table, Badge, Avatar, Typography, Chip
- **Form Controls**: Input, Select, Checkbox, Radio
- **Feedback**: Alert, Modal, Progress, Pagination
- **Content**: Feature, Banner
- And many more!

## ⚙️ Setup Note

These templates are aligned with the split-package architecture:

- React: `@zeturn/watercolor-react` + `import '@zeturn/watercolor-react/style.css'`
- Vue: `@zeturn/watercolor-vue` + `import '@zeturn/watercolor-vue/style.css'`

Some Watercolor components dynamically import optional icon packs. For production builds (Vite/Rollup), you may need to install the icon packages referenced by the UI package.

## 🛠️ Technology Stack

### React Template
- React 18
- Vite 
- React Router
- @zeturn/watercolor-react

### Vue Template
- Vue 3 (Composition API)
- Vite
- Vue Router
- @zeturn/watercolor-vue

## 📚 Documentation

- [Watercolor UI Documentation](https://zeturn.github.io/watercolor/docs/)
- [React Storybook](https://zeturn.github.io/watercolor/react/)
- [Vue Storybook](https://zeturn.github.io/watercolor/vue/)
- [Watercolor UI GitHub](https://github.com/zeturn/watercolor)

## 🎯 Use Cases

These templates are perfect for:

- Learning Watercolor UI component library
- Starting new projects with a solid foundation
- Understanding design patterns and best practices
- Comparing React vs Vue implementations
- Building admin panels, dashboards, or content management systems

## 📦 Building for Production

### React Template
```bash
cd react-template
npm run build
```

### Vue Template
```bash
cd vue-template
npm run build
```

The build output will be in the `dist/` directory of each template.

## 🤝 Contributing

Feel free to use these templates as starting points for your own projects. Modify, extend, and adapt them to fit your specific needs.

## 📄 License

These templates are provided as-is for demonstration purposes. Watercolor UI is MIT licensed.

---

**Note**: Both templates fully demonstrate the watercolor-inspired design philosophy - minimalist aesthetics, smooth interactions, and accessible user experience.
