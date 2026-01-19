import { useNavigate } from 'react-router-dom'
import { AppBar, Avatar, Badge, Button, Card, Container, Feature, Typography } from '@zeturn/watercolor-react'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation */}
      <AppBar>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem' }}>
          <Typography variant="h6" style={{ fontWeight: 600 }}>Watercolor UI</Typography>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="secondary" size="sm" onClick={() => navigate('/login')}>Login</Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/dashboard')}>Dashboard</Button>
          </div>
        </div>
      </AppBar>

      {/* Hero Section */}
      <Container style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Badge variant="primary" style={{ marginBottom: '1rem' }}>New Release v1.0</Badge>
          <Typography variant="h1" style={{ marginBottom: '1.5rem', fontSize: '3.5rem', fontWeight: 700 }}>
            Beautiful Components for Modern Web
          </Typography>
          <Typography variant="body1" style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
            Build stunning user interfaces with Watercolor UI - a minimalist component library for React and Vue
          </Typography>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button variant="primary" size="lg" onClick={() => navigate('/dashboard')}>Get Started</Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/article')}>Learn More</Button>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Typography variant="h2" style={{ marginBottom: '1rem' }}>Key Features</Typography>
          <Typography variant="body1" style={{ color: '#666' }}>
            Everything you need to build modern web applications
          </Typography>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <Feature
            icon={<span role="img" aria-label="Design">🎨</span>}
            title="Beautiful Design"
            description="Watercolor-inspired aesthetics with attention to detail"
          />
          <Feature
            icon={<span role="img" aria-label="Performance">⚡</span>}
            title="Lightning Fast"
            description="Optimized performance with tree-shaking support"
          />
          <Feature
            icon={<span role="img" aria-label="Tools">🔧</span>}
            title="Easy to Use"
            description="Simple APIs with TypeScript support out of the box"
          />
          <Feature
            icon={<span role="img" aria-label="Dark mode">🌙</span>}
            title="Dark Mode"
            description="Built-in dark mode support with CSS variables"
          />
          <Feature
            icon={<span role="img" aria-label="Responsive">📱</span>}
            title="Responsive"
            description="Mobile-first design that works on all devices"
          />
          <Feature
            icon={<span role="img" aria-label="Customization">🎯</span>}
            title="Customizable"
            description="Easy theming with CSS variables and config files"
          />
        </div>
      </Container>

      {/* Testimonials */}
      <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Typography variant="h2" style={{ marginBottom: '1rem' }}>What Developers Say</Typography>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          <Card style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Avatar name="Sarah Chen" size="md" style={{ marginRight: '1rem' }} />
              <div>
                <Typography variant="h6">Sarah Chen</Typography>
                <Typography variant="caption" style={{ color: '#666' }}>Frontend Developer</Typography>
              </div>
            </div>
            <Typography variant="body2" style={{ color: '#666' }}>
              "Watercolor UI has transformed how we build interfaces. The components are beautiful and easy to customize."
            </Typography>
          </Card>

          <Card style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Avatar name="Alex Johnson" size="md" style={{ marginRight: '1rem' }} />
              <div>
                <Typography variant="h6">Alex Johnson</Typography>
                <Typography variant="caption" style={{ color: '#666' }}>Tech Lead</Typography>
              </div>
            </div>
            <Typography variant="body2" style={{ color: '#666' }}>
              "The best component library I've used. Works seamlessly with both React and Vue."
            </Typography>
          </Card>

          <Card style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Avatar name="Maria Garcia" size="md" style={{ marginRight: '1rem' }} />
              <div>
                <Typography variant="h6">Maria Garcia</Typography>
                <Typography variant="caption" style={{ color: '#666' }}>UI Designer</Typography>
              </div>
            </div>
            <Typography variant="body2" style={{ color: '#666' }}>
              "Love the watercolor-inspired design philosophy. It's unique and refreshing."
            </Typography>
          </Card>
        </div>
      </Container>

      {/* Footer */}
      <div style={{ backgroundColor: '#fff', borderTop: '1px solid #e0e0e0', padding: '2rem 0' }}>
        <Container>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="body2" style={{ color: '#666' }}>
              © 2024 Watercolor UI. Built with ❤️ by the Watercolor team.
            </Typography>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default LandingPage
