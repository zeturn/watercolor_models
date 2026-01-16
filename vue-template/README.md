# Watercolor UI - Vue Template

A comprehensive Vue 3 template showcasing the [Watercolor UI](https://github.com/zeturn/watercolor) component library with multiple real-world scenarios.

## 🎨 Overview

This template demonstrates the design philosophy and capabilities of Watercolor UI through fully-functional example pages including:

- **Landing Page** (`/`) - Marketing homepage with hero section, features, and testimonials
- **Login Page** (`/login`) - Authentication form with validation
- **Dashboard** (`/dashboard`) - Admin panel with stats, charts, and activity feed
- **Article Page** (`/article`) - Blog/content page with rich typography
- **Management Panel** (`/management`) - Full CRUD interface with table, modal, pagination, and search

## 🚀 Features Demonstrated

### Components Used
- ✅ AppBar - Navigation header
- ✅ Button - Multiple variants and sizes
- ✅ Card - Content containers
- ✅ Input - Form fields
- ✅ Typography - Text styling
- ✅ Badge - Status indicators
- ✅ Avatar - User images
- ✅ Alert - Notifications
- ✅ Modal - Dialogs
- ✅ Progress - Progress bars
- ✅ Tabs - Tab navigation
- ✅ Checkbox - Form controls
- ✅ Select - Dropdown menus
- ✅ Breadcrumb - Navigation trail
- ✅ Chip - Tags
- ✅ Feature - Feature highlights
- ✅ Container - Layout wrapper
- ✅ Pagination - Page navigation

### Design Patterns
- Responsive layouts
- Form validation with Vue reactivity
- CRUD operations
- Data filtering and search
- Pagination
- Modal dialogs
- Alert notifications
- Tab navigation

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technology Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vite** - Next generation build tool
- **Vue Router** - Official router for Vue.js
- **Watercolor UI** - Component library

## 📁 Project Structure

```
vue-template/
├── src/
│   ├── pages/
│   │   ├── LandingPage.vue      # Homepage with features
│   │   ├── LoginPage.vue        # Authentication
│   │   ├── DashboardPage.vue    # Admin dashboard
│   │   ├── ArticlePage.vue      # Blog/article view
│   │   └── ManagementPage.vue   # User management CRUD
│   ├── App.vue                   # Main app component
│   ├── router.js                 # Vue Router configuration
│   ├── main.js                   # Entry point
│   └── style.css                 # Global styles
├── package.json
└── README.md
```

## 🎯 Usage

### Navigation

The app uses Vue Router for navigation. Each page demonstrates different aspects of Watercolor UI:

1. **Landing Page** - Start here to see the hero section and feature showcase
2. **Login Page** - Example authentication form with validation
3. **Dashboard** - See data visualization and admin panel layouts
4. **Article Page** - Rich content layout with typography
5. **Management Panel** - Full CRUD example with all interactions

### Customization

The template uses Watercolor UI's default theme. To customize:

1. Import the CSS: `import 'watercolor-ui/dist/watercolor-vue.css'`
2. Use CSS variables for theming
3. Create a `theme.config.json` for advanced theming

## 📚 Learn More

- [Watercolor UI Documentation](https://zeturn.github.io/watercolor/docs/)
- [Watercolor UI Vue Storybook](https://zeturn.github.io/watercolor/vue/)
- [Watercolor UI GitHub](https://github.com/zeturn/watercolor)
- [Vue 3 Documentation](https://vuejs.org/)

## 🤝 Contributing

Feel free to use this template as a starting point for your projects. Modify and extend it to fit your needs.

## 📄 License

This template is provided as-is for demonstration purposes. Watercolor UI is MIT licensed.
