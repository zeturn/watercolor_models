<template>
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background-color: #f5f5f5; padding: 2rem">
    <Card style="width: 100%; max-width: 450px; padding: 3rem">
      <div style="text-align: center; margin-bottom: 2rem">
        <Typography variant="h3" style="margin-bottom: 0.5rem; font-weight: 600">
          Welcome Back
        </Typography>
        <Typography variant="body2" style="color: #666">
          Sign in to your account to continue
        </Typography>
      </div>

      <Alert v-if="showSuccess" variant="success" style="margin-bottom: 1.5rem">
        Login successful! Redirecting to dashboard...
      </Alert>

      <form @submit.prevent="handleLogin">
        <div style="margin-bottom: 1.5rem">
          <Typography variant="caption" style="display: block; margin-bottom: 0.5rem; font-weight: 500">
            Email Address
          </Typography>
          <Input
            type="email"
            placeholder="you@example.com"
            v-model="email"
            required
            style="width: 100%"
          />
        </div>

        <div style="margin-bottom: 1.5rem">
          <Typography variant="caption" style="display: block; margin-bottom: 0.5rem; font-weight: 500">
            Password
          </Typography>
          <Input
            type="password"
            placeholder="Enter your password"
            v-model="password"
            required
            style="width: 100%"
          />
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem">
          <label style="display: flex; align-items: center; cursor: pointer">
            <Checkbox v-model="rememberMe" style="margin-right: 0.5rem" />
            <Typography variant="body2">Remember me</Typography>
          </label>
          <Typography 
            variant="body2" 
            style="color: #4f46e5; cursor: pointer"
            @click="alert('Password reset not implemented in demo')"
          >
            Forgot password?
          </Typography>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          style="width: 100%; margin-bottom: 1rem"
        >
          Sign In
        </Button>

        <div style="border-top: 1px solid #e0e0e0; margin: 1.5rem 0" />

        <div style="text-align: center">
          <Typography variant="body2" style="color: #666">
            Don't have an account?
            <span style="color: #4f46e5; cursor: pointer; font-weight: 500">
              Sign up
            </span>
          </Typography>
        </div>
      </form>

      <div style="margin-top: 2rem; text-align: center">
        <Button 
          variant="secondary" 
          size="sm" 
          @click="router.push('/')"
        >
          ← Back to Home
        </Button>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Alert, Button, Card, Checkbox, Input, Typography } from '@zeturn/watercolor-vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showSuccess = ref(false)

const handleLogin = () => {
  showSuccess.value = true
  setTimeout(() => {
    router.push('/dashboard')
  }, 1500)
}
</script>
