<template>
  <div style="min-height: 100vh; background-color: #f5f5f5">
    <!-- Navigation -->
    <AppBar>
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 2rem">
        <Typography variant="h6" style="font-weight: 600">Dashboard</Typography>
        <div style="display: flex; gap: 1rem; align-items: center">
          <Button variant="secondary" size="sm" @click="router.push('/')">Home</Button>
          <Button variant="secondary" size="sm" @click="router.push('/management')">Management</Button>
          <Button variant="secondary" size="sm" @click="router.push('/article')">Articles</Button>
          <Avatar name="John Doe" size="sm" />
        </div>
      </div>
    </AppBar>

    <Container style="padding-top: 6rem; padding-bottom: 3rem">
      <!-- Welcome Alert -->
      <Alert 
        v-if="showAlert" 
        variant="info" 
        style="margin-bottom: 2rem"
      >
        Welcome back! You have 3 new notifications and 5 pending tasks.
      </Alert>

      <!-- Stats Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem">
        <Card v-for="(stat, index) in stats" :key="index" style="padding: 1.5rem">
          <Typography variant="caption" style="color: #666; display: block; margin-bottom: 0.5rem">
            {{ stat.title }}
          </Typography>
          <Typography variant="h4" style="margin-bottom: 0.5rem; font-weight: 600">
            {{ stat.value }}
          </Typography>
          <Typography 
            variant="body2" 
            :style="{ color: stat.trend === 'up' ? '#22c55e' : '#ef4444' }"
          >
            {{ stat.change }} from last month
          </Typography>
        </Card>
      </div>

      <!-- Projects Section -->
      <Card style="padding: 1.5rem; margin-bottom: 2rem">
        <Typography variant="h5" style="margin-bottom: 1.5rem; font-weight: 600">
          Active Projects
        </Typography>
        <div style="overflow-x: auto">
          <table style="width: 100%; border-collapse: collapse">
            <thead>
              <tr style="border-bottom: 2px solid #e0e0e0">
                <th style="padding: 0.75rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">Project</Typography>
                </th>
                <th style="padding: 0.75rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">Progress</Typography>
                </th>
                <th style="padding: 0.75rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">Status</Typography>
                </th>
                <th style="padding: 0.75rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">Deadline</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(project, index) in projects" :key="index" style="border-bottom: 1px solid #e0e0e0">
                <td style="padding: 1rem">
                  <Typography variant="body2">{{ project.name }}</Typography>
                </td>
                <td style="padding: 1rem">
                  <Progress :value="project.progress" :max="100" style="width: 100px" />
                </td>
                <td style="padding: 1rem">
                  <Badge :variant="getStatusBadge(project.status)">
                    {{ project.status }}
                  </Badge>
                </td>
                <td style="padding: 1rem">
                  <Typography variant="body2" style="color: #666">
                    {{ project.deadline }}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <!-- Quick Actions -->
      <Card style="padding: 1.5rem">
        <Typography variant="h5" style="margin-bottom: 1rem; font-weight: 600">
          Quick Actions
        </Typography>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap">
          <Button variant="primary">Create Project</Button>
          <Button variant="secondary">Add User</Button>
          <Button variant="secondary">Generate Report</Button>
          <Button variant="secondary" @click="router.push('/management')">
            Manage Data
          </Button>
        </div>
      </Card>
    </Container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  AppBar, Button, Typography, Card, Container, 
  Badge, Avatar, Progress, Alert
} from 'watercolor-ui/vue'

const router = useRouter()
const showAlert = ref(true)

const stats = [
  { title: 'Total Users', value: '12,482', change: '+12%', trend: 'up' },
  { title: 'Revenue', value: '$48,592', change: '+8%', trend: 'up' },
  { title: 'Active Projects', value: '24', change: '-3%', trend: 'down' },
  { title: 'Completion Rate', value: '87%', change: '+5%', trend: 'up' },
]

const projects = [
  { name: 'Website Redesign', progress: 75, status: 'active', deadline: '2024-02-15' },
  { name: 'Mobile App', progress: 45, status: 'active', deadline: '2024-03-01' },
  { name: 'API Integration', progress: 90, status: 'review', deadline: '2024-01-30' },
  { name: 'Marketing Campaign', progress: 30, status: 'active', deadline: '2024-02-28' },
]

const getStatusBadge = (status) => {
  const variants = {
    'active': 'primary',
    'review': 'warning'
  }
  return variants[status] || 'secondary'
}
</script>
