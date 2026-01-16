import { useNavigate } from 'react-router-dom'
import { 
  AppBar, Button, Typography, Card, Container, 
  Breadcrumb, Badge, Avatar, Chip 
} from 'watercolor-ui/react'

function ArticlePage() {
  const navigate = useNavigate()

  const relatedArticles = [
    { title: 'Getting Started with Watercolor UI', date: '2024-01-10', category: 'Tutorial' },
    { title: 'Building Responsive Layouts', date: '2024-01-08', category: 'Guide' },
    { title: 'Advanced Component Patterns', date: '2024-01-05', category: 'Advanced' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation */}
      <AppBar>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem' }}>
          <Typography variant="h6" style={{ fontWeight: 600 }}>Watercolor UI Blog</Typography>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="secondary" size="sm" onClick={() => navigate('/')}>Home</Button>
            <Button variant="secondary" size="sm" onClick={() => navigate('/dashboard')}>Dashboard</Button>
          </div>
        </div>
      </AppBar>

      <Container style={{ paddingTop: '6rem', paddingBottom: '3rem', maxWidth: '900px' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '2rem' }}>
          <Breadcrumb
            items={[
              { label: 'Home', onClick: () => navigate('/') },
              { label: 'Blog', onClick: () => {} },
              { label: 'Article', onClick: () => {} }
            ]}
          />
        </div>

        {/* Article Header */}
        <Card style={{ padding: '3rem', marginBottom: '2rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Badge variant="primary" style={{ marginRight: '0.5rem' }}>Design</Badge>
            <Badge variant="secondary">UI/UX</Badge>
          </div>

          <Typography variant="h2" style={{ marginBottom: '1rem', fontWeight: 700 }}>
            The Philosophy Behind Watercolor UI Design
          </Typography>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Avatar name="Sarah Designer" size="md" />
            <div>
              <Typography variant="body2" style={{ fontWeight: 500 }}>Sarah Designer</Typography>
              <Typography variant="caption" style={{ color: '#666' }}>Published on January 15, 2024 • 5 min read</Typography>
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=400&fit=crop" 
            alt="Article header" 
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem' }}
          />

          <div style={{ lineHeight: '1.8', color: '#333' }}>
            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              Watercolor painting has always been about fluidity, transparency, and the gentle blending of colors. 
              These same principles inspire our design philosophy for Watercolor UI - creating interfaces that feel 
              natural, elegant, and effortlessly beautiful.
            </Typography>

            <Typography variant="h4" style={{ marginTop: '2rem', marginBottom: '1rem', fontWeight: 600 }}>
              The Core Principles
            </Typography>

            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              Our design system is built on three fundamental principles that guide every decision we make:
            </Typography>

            <Typography variant="h5" style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              1. Simplicity and Clarity
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              Just as watercolor paintings use minimal strokes to convey maximum meaning, our components are designed 
              to be simple yet powerful. Every element serves a purpose, and nothing is added without careful consideration.
            </Typography>

            <Typography variant="h5" style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              2. Fluid Interactions
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              The way watercolors blend seamlessly into each other inspires our interaction design. Transitions are smooth, 
              states change naturally, and the user experience flows effortlessly from one action to the next.
            </Typography>

            <Typography variant="h5" style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>
              3. Accessible Beauty
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              Beauty should never come at the cost of functionality. Our components are designed to be both visually 
              appealing and highly accessible, ensuring that everyone can enjoy a great user experience.
            </Typography>

            <div style={{ borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

            <Typography variant="h4" style={{ marginBottom: '1rem', fontWeight: 600 }}>
              Implementation Details
            </Typography>

            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              We've carefully crafted each component to embody these principles. From the subtle shadows that give 
              depth to our cards, to the gentle color transitions in our buttons, every detail is intentional.
            </Typography>

            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              The color palette draws inspiration from natural watercolor pigments - soft blues, gentle greens, 
              warm oranges, and delicate purples. Each color is chosen not just for its aesthetic appeal, but for 
              its ability to convey meaning and guide user attention.
            </Typography>

            <Typography variant="h4" style={{ marginTop: '2rem', marginBottom: '1rem', fontWeight: 600 }}>
              Looking Forward
            </Typography>

            <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
              As we continue to develop Watercolor UI, we remain committed to these core principles. Every new 
              component, every update, every feature is evaluated against this philosophy to ensure we're creating 
              something truly special for developers and end-users alike.
            </Typography>
          </div>

          <div style={{ borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Chip label="Design System" />
            <Chip label="UI Components" />
            <Chip label="React" />
            <Chip label="Vue" />
            <Chip label="TypeScript" />
          </div>
        </Card>

        {/* Related Articles */}
        <Card style={{ padding: '2rem' }}>
          <Typography variant="h5" style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
            Related Articles
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {relatedArticles.map((article, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div style={{ flex: 1 }}>
                    <Badge variant="secondary" style={{ marginBottom: '0.5rem' }}>
                      {article.category}
                    </Badge>
                    <Typography 
                      variant="body1" 
                      style={{ fontWeight: 500, marginBottom: '0.25rem', cursor: 'pointer' }}
                    >
                      {article.title}
                    </Typography>
                    <Typography variant="caption" style={{ color: '#666' }}>
                      {article.date}
                    </Typography>
                  </div>
                  <Button variant="secondary" size="sm">Read</Button>
                </div>
                {index < relatedArticles.length - 1 && <div style={{ borderTop: '1px solid #e0e0e0', margin: '1rem 0' }} />}
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default ArticlePage
