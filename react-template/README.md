# Watercolor UI - React Template

A comprehensive React template showcasing the [Watercolor UI](https://github.com/zeturn/watercolor) component library with multiple real-world scenarios.

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
- ✅ Table - Data display
- ✅ Pagination - Page navigation
- ✅ Progress - Progress bars
- ✅ Tabs - Tab navigation
- ✅ Checkbox - Form controls
- ✅ Select - Dropdown menus
- ✅ Breadcrumb - Navigation trail
- ✅ Chip - Tags
- ✅ Divider - Visual separation
- ✅ Feature - Feature highlights
- ✅ Container - Layout wrapper

### Design Patterns
- Responsive layouts
- Form validation
- CRUD operations
- Data filtering and search
- Pagination
- Modal dialogs
- Alert notifications
- Tab navigation

## 📦 Installation

**Note**: This template uses a locally built version of watercolor-ui. To use the published npm package instead:

1. Update `package.json` to use the published version:
   ```json
   "watercolor-ui": "^1.1.16"
   ```

2. Update the CSS import in `src/App.jsx`:
   ```javascript
   import 'watercolor-ui/dist/watercolor-react.css'
   ```

Or continue using the local version:

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

- **React 19** - UI framework
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Watercolor UI** - Component library

## 📁 Project Structure

```
react-template/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx      # Homepage with features
│   │   ├── LoginPage.jsx        # Authentication
│   │   ├── DashboardPage.jsx    # Admin dashboard
│   │   ├── ArticlePage.jsx      # Blog/article view
│   │   └── ManagementPage.jsx   # User management CRUD
│   ├── App.jsx                   # Main app with routing
│   ├── App.css                   # Global styles
│   └── main.jsx                  # Entry point
├── package.json
└── README.md
```

## 🎯 Usage

### Navigation

The app uses React Router for navigation. Each page demonstrates different aspects of Watercolor UI:

1. **Landing Page** - Start here to see the hero section and feature showcase
2. **Login Page** - Example authentication form with validation
3. **Dashboard** - See data visualization and admin panel layouts
4. **Article Page** - Rich content layout with typography
5. **Management Panel** - Full CRUD example with all interactions

### Customization

The template uses Watercolor UI's default theme. To customize:

1. Import the CSS: `import 'watercolor-ui/style.css'`
2. Use CSS variables for theming
3. Create a `theme.config.json` for advanced theming

## 📚 Learn More

- [Watercolor UI Documentation](https://zeturn.github.io/watercolor/docs/)
- [Watercolor UI React Storybook](https://zeturn.github.io/watercolor/react/)
- [Watercolor UI GitHub](https://github.com/zeturn/watercolor)

## 🤝 Contributing

Feel free to use this template as a starting point for your projects. Modify and extend it to fit your needs.

## 📄 License

This template is provided as-is for demonstration purposes. Watercolor UI is MIT licensed.

