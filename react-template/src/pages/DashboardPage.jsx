import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, AppBar, Avatar, Badge, Button, Card, Container, Progress, Typography } from '@zeturn/watercolor-react'

function DashboardPage() {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(true)

  const stats = [
    { title: 'Total Users', value: '12,482', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$48,592', change: '+8%', trend: 'up' },
    { title: 'Active Projects', value: '24', change: '-3%', trend: 'down' },
    { title: 'Completion Rate', value: '87%', change: '+5%', trend: 'up' },
  ]

  const recentActivity = [
    { user: 'Alice Johnson', action: 'Created new project', time: '2 minutes ago', status: 'success' },
    { user: 'Bob Smith', action: 'Updated user profile', time: '15 minutes ago', status: 'info' },
    { user: 'Carol White', action: 'Deleted old files', time: '1 hour ago', status: 'warning' },
    { user: 'David Brown', action: 'Completed task #234', time: '2 hours ago', status: 'success' },
    { user: 'Eve Davis', action: 'Started new sprint', time: '3 hours ago', status: 'info' },
  ]

  const projects = [
    { name: 'Website Redesign', progress: 75, status: 'active', deadline: '2024-02-15' },
    { name: 'Mobile App', progress: 45, status: 'active', deadline: '2024-03-01' },
    { name: 'API Integration', progress: 90, status: 'review', deadline: '2024-01-30' },
    { name: 'Marketing Campaign', progress: 30, status: 'active', deadline: '2024-02-28' },
  ]

  const getStatusBadge = (status) => {
    const variants = {
      'success': 'success',
      'info': 'primary',
      'warning': 'warning',
      'active': 'primary',
      'review': 'warning'
    }
    return variants[status] || 'secondary'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation */}
      <AppBar>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem' }}>
          <Typography variant="h6" style={{ fontWeight: 600 }}>Dashboard</Typography>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button variant="secondary" size="sm" onClick={() => navigate('/')}>Home</Button>
            <Button variant="secondary" size="sm" onClick={() => navigate('/management')}>Management</Button>
            <Button variant="secondary" size="sm" onClick={() => navigate('/article')}>Articles</Button>
            <Avatar name="John Doe" size="sm" />
          </div>
        </div>
      </AppBar>

      <Container style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        {/* Welcome Alert */}
        {showAlert && (
          <Alert 
            variant="info" 
            style={{ marginBottom: '2rem' }}
            onClose={() => setShowAlert(false)}
          >
            Welcome back! You have 3 new notifications and 5 pending tasks.
          </Alert>
        )}

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {stats.map((stat, index) => (
            <Card key={index} style={{ padding: '1.5rem' }}>
              <Typography variant="caption" style={{ color: '#666', display: 'block', marginBottom: '0.5rem' }}>
                {stat.title}
              </Typography>
              <Typography variant="h4" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                {stat.value}
              </Typography>
              <Typography 
                variant="body2" 
                style={{ color: stat.trend === 'up' ? '#22c55e' : '#ef4444' }}
              >
                {stat.change} from last month
              </Typography>
            </Card>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Projects Table */}
          <Card style={{ padding: '1.5rem' }}>
            <Typography variant="h5" style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
              Active Projects
            </Typography>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                      <Typography variant="caption" style={{ fontWeight: 600 }}>Project</Typography>
                    </th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                      <Typography variant="caption" style={{ fontWeight: 600 }}>Progress</Typography>
                    </th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                      <Typography variant="caption" style={{ fontWeight: 600 }}>Status</Typography>
                    </th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                      <Typography variant="caption" style={{ fontWeight: 600 }}>Deadline</Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '1rem' }}>
                        <Typography variant="body2">{project.name}</Typography>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <Progress value={project.progress} max={100} style={{ width: '100px' }} />
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <Badge variant={getStatusBadge(project.status)}>
                          {project.status}
                        </Badge>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <Typography variant="body2" style={{ color: '#666' }}>
                          {project.deadline}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card style={{ padding: '1.5rem' }}>
            <Typography variant="h5" style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
              Recent Activity
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentActivity.map((activity, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                    <Avatar name={activity.user} size="sm" />
                    <div style={{ flex: 1 }}>
                      <Typography variant="body2" style={{ fontWeight: 500, marginBottom: '0.25rem' }}>
                        {activity.user}
                      </Typography>
                      <Typography variant="caption" style={{ color: '#666', display: 'block', marginBottom: '0.25rem' }}>
                        {activity.action}
                      </Typography>
                      <Typography variant="caption" style={{ color: '#999' }}>
                        {activity.time}
                      </Typography>
                    </div>
                  </div>
                  {index < recentActivity.length - 1 && <div style={{ borderTop: '1px solid #e0e0e0', margin: '0.75rem 0' }} />}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card style={{ padding: '1.5rem' }}>
          <Typography variant="h5" style={{ marginBottom: '1rem', fontWeight: 600 }}>
            Quick Actions
          </Typography>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Create Project</Button>
            <Button variant="secondary">Add User</Button>
            <Button variant="secondary">Generate Report</Button>
            <Button variant="secondary" onClick={() => navigate('/management')}>
              Manage Data
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default DashboardPage
