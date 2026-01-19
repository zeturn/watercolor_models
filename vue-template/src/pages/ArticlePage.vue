<template>
  <div style="min-height: 100vh; background-color: #f5f5f5">
    <!-- Navigation -->
    <AppBar>
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 2rem">
        <Typography variant="h6" style="font-weight: 600">Watercolor UI Blog</Typography>
        <div style="display: flex; gap: 1rem">
          <Button variant="secondary" size="sm" @click="router.push('/')">Home</Button>
          <Button variant="secondary" size="sm" @click="router.push('/dashboard')">Dashboard</Button>
        </div>
      </div>
    </AppBar>

    <Container style="padding-top: 6rem; padding-bottom: 3rem; max-width: 900px">
      <!-- Breadcrumb -->
      <div style="margin-bottom: 2rem">
        <Breadcrumb
          :items="[
            { label: 'Home', onClick: () => router.push('/') },
            { label: 'Blog', onClick: () => {} },
            { label: 'Article', onClick: () => {} }
          ]"
        />
      </div>

      <!-- Article Header -->
      <Card style="padding: 3rem; margin-bottom: 2rem">
        <div style="margin-bottom: 1.5rem">
          <Badge variant="primary" style="margin-right: 0.5rem">Design</Badge>
          <Badge variant="secondary">UI/UX</Badge>
        </div>

        <Typography variant="h2" style="margin-bottom: 1rem; font-weight: 700">
          The Philosophy Behind Watercolor UI Design
        </Typography>

        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem">
          <Avatar name="Sarah Designer" size="md" />
          <div>
            <Typography variant="body2" style="font-weight: 500">Sarah Designer</Typography>
            <Typography variant="caption" style="color: #666">Published on January 15, 2024 • 5 min read</Typography>
          </div>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=400&fit=crop" 
          alt="Article header" 
          style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 2rem"
        />

        <div style="line-height: 1.8; color: #333">
          <Typography variant="body1" style="margin-bottom: 1.5rem">
            Watercolor painting has always been about fluidity, transparency, and the gentle blending of colors. 
            These same principles inspire our design philosophy for Watercolor UI - creating interfaces that feel 
            natural, elegant, and effortlessly beautiful.
          </Typography>

          <Typography variant="h4" style="margin-top: 2rem; margin-bottom: 1rem; font-weight: 600">
            The Core Principles
          </Typography>

          <Typography variant="body1" style="margin-bottom: 1.5rem">
            Our design system is built on three fundamental principles that guide every decision we make:
          </Typography>

          <Typography variant="h5" style="margin-top: 1.5rem; margin-bottom: 0.75rem; font-weight: 600">
            1. Simplicity and Clarity
          </Typography>
          <Typography variant="body1" style="margin-bottom: 1.5rem">
            Just as watercolor paintings use minimal strokes to convey maximum meaning, our components are designed 
            to be simple yet powerful. Every element serves a purpose, and nothing is added without careful consideration.
          </Typography>

          <Typography variant="h5" style="margin-top: 1.5rem; margin-bottom: 0.75rem; font-weight: 600">
            2. Fluid Interactions
          </Typography>
          <Typography variant="body1" style="margin-bottom: 1.5rem">
            The way watercolors blend seamlessly into each other inspires our interaction design. Transitions are smooth, 
            states change naturally, and the user experience flows effortlessly from one action to the next.
          </Typography>

          <div style="border-top: 1px solid #e0e0e0; margin: 2rem 0" />

          <Typography variant="h4" style="margin-bottom: 1rem; font-weight: 600">
            Looking Forward
          </Typography>

          <Typography variant="body1" style="margin-bottom: 1.5rem">
            As we continue to develop Watercolor UI, we remain committed to these core principles. Every new 
            component, every update, every feature is evaluated against this philosophy to ensure we're creating 
            something truly special for developers and end-users alike.
          </Typography>
        </div>

        <div style="border-top: 1px solid #e0e0e0; margin: 2rem 0" />

        <!-- Tags -->
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
          <Chip label="Design System" />
          <Chip label="UI Components" />
          <Chip label="React" />
          <Chip label="Vue" />
          <Chip label="TypeScript" />
        </div>
      </Card>

      <!-- Related Articles -->
      <Card style="padding: 2rem">
        <Typography variant="h5" style="margin-bottom: 1.5rem; font-weight: 600">
          Related Articles
        </Typography>
        <div style="display: flex; flex-direction: column; gap: 1.5rem">
          <div v-for="(article, index) in relatedArticles" :key="index">
            <div style="display: flex; justify-content: space-between; align-items: start">
              <div style="flex: 1">
                <Badge variant="secondary" style="margin-bottom: 0.5rem">
                  {{ article.category }}
                </Badge>
                <Typography 
                  variant="body1" 
                  style="font-weight: 500; margin-bottom: 0.25rem; cursor: pointer"
                >
                  {{ article.title }}
                </Typography>
                <Typography variant="caption" style="color: #666">
                  {{ article.date }}
                </Typography>
              </div>
              <Button variant="secondary" size="sm">Read</Button>
            </div>
            <div v-if="index < relatedArticles.length - 1" style="border-top: 1px solid #e0e0e0; margin: 1rem 0" />
          </div>
        </div>
      </Card>
    </Container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { 
  AppBar,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Chip,
  Container,
  Typography,
} from '@zeturn/watercolor-vue'

const router = useRouter()

const relatedArticles = [
  { title: 'Getting Started with Watercolor UI', date: '2024-01-10', category: 'Tutorial' },
  { title: 'Building Responsive Layouts', date: '2024-01-08', category: 'Guide' },
  { title: 'Advanced Component Patterns', date: '2024-01-05', category: 'Advanced' },
]
</script>
