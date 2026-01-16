import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Card, Typography, Checkbox, Alert } from 'watercolor-ui/react'

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 1500)
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '2rem'
    }}>
      <Card style={{ width: '100%', maxWidth: '450px', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h3" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" style={{ color: '#666' }}>
            Sign in to your account to continue
          </Typography>
        </div>

        {showSuccess && (
          <Alert variant="success" style={{ marginBottom: '1.5rem' }}>
            Login successful! Redirecting to dashboard...
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="caption" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Email Address
            </Typography>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <Typography variant="caption" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Password
            </Typography>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ marginRight: '0.5rem' }}
              />
              <Typography variant="body2">Remember me</Typography>
            </label>
            <Typography 
              variant="body2" 
              style={{ color: '#4f46e5', cursor: 'pointer' }}
              onClick={() => alert('Password reset not implemented in demo')}
            >
              Forgot password?
            </Typography>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            style={{ width: '100%', marginBottom: '1rem' }}
          >
            Sign In
          </Button>

          <div style={{ borderTop: '1px solid #e0e0e0', margin: '1.5rem 0' }} />

          <div style={{ textAlign: 'center' }}>
            <Typography variant="body2" style={{ color: '#666' }}>
              Don't have an account?{' '}
              <span style={{ color: '#4f46e5', cursor: 'pointer', fontWeight: 500 }}>
                Sign up
              </span>
            </Typography>
          </div>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage
