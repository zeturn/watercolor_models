<template>
  <div style="min-height: 100vh; background-color: #f5f5f5">
    <!-- Navigation -->
    <AppBar>
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 2rem">
        <Typography variant="h6" style="font-weight: 600">Watercolor UI</Typography>
        <div style="display: flex; gap: 1rem">
          <Button variant="secondary" size="sm" @click="router.push('/login')">Login</Button>
          <Button variant="primary" size="sm" @click="router.push('/dashboard')">Dashboard</Button>
        </div>
      </div>
    </AppBar>

    <!-- Hero Section -->
    <Container style="padding-top: 6rem; padding-bottom: 4rem">
      <div style="text-align: center; max-width: 800px; margin: 0 auto">
        <Badge variant="primary" style="margin-bottom: 1rem">New Release v1.0</Badge>
        <Typography variant="h1" style="margin-bottom: 1.5rem; font-size: 3.5rem; font-weight: 700">
          Beautiful Components for Modern Web
        </Typography>
        <Typography variant="body1" style="font-size: 1.25rem; color: #666; margin-bottom: 2rem">
          Build stunning user interfaces with Watercolor UI - a minimalist component library for React and Vue
        </Typography>
        <div style="display: flex; gap: 1rem; justify-content: center">
          <Button variant="primary" size="lg" @click="router.push('/dashboard')">Get Started</Button>
          <Button variant="secondary" size="lg" @click="router.push('/article')">Learn More</Button>
        </div>
      </div>
    </Container>

    <!-- Features Section -->
    <Container style="padding-top: 3rem; padding-bottom: 3rem">
      <div style="text-align: center; margin-bottom: 3rem">
        <Typography variant="h2" style="margin-bottom: 1rem">Key Features</Typography>
        <Typography variant="body1" style="color: #666">
          Everything you need to build modern web applications
        </Typography>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem">
        <Feature
          icon="🎨"
          title="Beautiful Design"
          description="Watercolor-inspired aesthetics with attention to detail"
        />
        <Feature
          icon="⚡"
          title="Lightning Fast"
          description="Optimized performance with tree-shaking support"
        />
        <Feature
          icon="🔧"
          title="Easy to Use"
          description="Simple APIs with TypeScript support out of the box"
        />
        <Feature
          icon="🌙"
          title="Dark Mode"
          description="Built-in dark mode support with CSS variables"
        />
        <Feature
          icon="📱"
          title="Responsive"
          description="Mobile-first design that works on all devices"
        />
        <Feature
          icon="🎯"
          title="Customizable"
          description="Easy theming with CSS variables and config files"
        />
      </div>
    </Container>

    <!-- Testimonials -->
    <Container style="padding-top: 3rem; padding-bottom: 3rem">
      <div style="text-align: center; margin-bottom: 3rem">
        <Typography variant="h2" style="margin-bottom: 1rem">What Developers Say</Typography>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem">
        <Card style="padding: 2rem">
          <div style="display: flex; align-items: center; margin-bottom: 1rem">
            <Avatar name="Sarah Chen" size="md" style="margin-right: 1rem" />
            <div>
              <Typography variant="h6">Sarah Chen</Typography>
              <Typography variant="caption" style="color: #666">Frontend Developer</Typography>
            </div>
          </div>
          <Typography variant="body2" style="color: #666">
            "Watercolor UI has transformed how we build interfaces. The components are beautiful and easy to customize."
          </Typography>
        </Card>

        <Card style="padding: 2rem">
          <div style="display: flex; align-items: center; margin-bottom: 1rem">
            <Avatar name="Alex Johnson" size="md" style="margin-right: 1rem" />
            <div>
              <Typography variant="h6">Alex Johnson</Typography>
              <Typography variant="caption" style="color: #666">Tech Lead</Typography>
            </div>
          </div>
          <Typography variant="body2" style="color: #666">
            "The best component library I've used. Works seamlessly with both React and Vue."
          </Typography>
        </Card>

        <Card style="padding: 2rem">
          <div style="display: flex; align-items: center; margin-bottom: 1rem">
            <Avatar name="Maria Garcia" size="md" style="margin-right: 1rem" />
            <div>
              <Typography variant="h6">Maria Garcia</Typography>
              <Typography variant="caption" style="color: #666">UI Designer</Typography>
            </div>
          </div>
          <Typography variant="body2" style="color: #666">
            "Love the watercolor-inspired design philosophy. It's unique and refreshing."
          </Typography>
        </Card>
      </div>
    </Container>

    <!-- Footer -->
    <div style="background-color: #fff; border-top: 1px solid #e0e0e0; padding: 2rem 0">
      <Container>
        <div style="text-align: center">
          <Typography variant="body2" style="color: #666">
            © 2024 Watercolor UI. Built with ❤️ by the Watercolor team.
          </Typography>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { AppBar, Avatar, Badge, Button, Card, Container, Feature, Typography } from '@zeturn/watercolor-vue'

const router = useRouter()
</script>
