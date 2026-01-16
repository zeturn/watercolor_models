import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/watercolor-ui/dist/watercolor-react.css'
import './App.css'

// Pages
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import ArticlePage from './pages/ArticlePage'
import ManagementPage from './pages/ManagementPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/management" element={<ManagementPage />} />
      </Routes>
    </Router>
  )
}

export default App
