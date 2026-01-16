<template>
  <div style="min-height: 100vh; background-color: #f5f5f5">
    <!-- Navigation -->
    <AppBar>
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 2rem">
        <Typography variant="h6" style="font-weight: 600">User Management</Typography>
        <div style="display: flex; gap: 1rem">
          <Button variant="secondary" size="sm" @click="router.push('/')">Home</Button>
          <Button variant="secondary" size="sm" @click="router.push('/dashboard')">Dashboard</Button>
        </div>
      </div>
    </AppBar>

    <Container style="padding-top: 6rem; padding-bottom: 3rem">
      <!-- Alert -->
      <Alert v-if="showAlert" variant="success" style="margin-bottom: 2rem">
        {{ alertMessage }}
      </Alert>

      <!-- Management Card -->
      <Card style="padding: 2rem">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem">
          <Typography variant="h4" style="font-weight: 600">
            Users Directory
          </Typography>
          <Button variant="primary" @click="handleAdd">
            + Add User
          </Button>
        </div>

        <!-- Search -->
        <div style="margin-bottom: 1.5rem">
          <Input
            type="text"
            placeholder="Search by name or email..."
            v-model="searchQuery"
            style="width: 100%; max-width: 400px"
          />
        </div>

        <!-- Tabs -->
        <Tabs
          :activeTab="activeTab"
          @change="activeTab = $event"
          :tabs="[
            { id: 'all', label: `All (${users.length})` },
            { id: 'active', label: `Active (${users.filter(u => u.status === 'Active').length})` },
            { id: 'inactive', label: `Inactive (${users.filter(u => u.status === 'Inactive').length})` }
          ]"
          style="margin-bottom: 2rem"
        />

        <!-- Users Table -->
        <div style="overflow-x: auto; margin-bottom: 2rem">
          <table style="width: 100%; border-collapse: collapse">
            <thead>
              <tr style="border-bottom: 2px solid #e0e0e0">
                <th style="padding: 1rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">User</Typography>
                </th>
                <th style="padding: 1rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">Email</Typography>
                </th>
                <th style="padding: 1rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">Role</Typography>
                </th>
                <th style="padding: 1rem; text-align: left">
                  <Typography variant="caption" style="font-weight: 600">Status</Typography>
                </th>
                <th style="padding: 1rem; text-align: right">
                  <Typography variant="caption" style="font-weight: 600">Actions</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in filteredUsers" :key="user.id" style="border-bottom: 1px solid #e0e0e0">
                <td style="padding: 1rem">
                  <div style="display: flex; align-items: center; gap: 0.75rem">
                    <Avatar :name="user.name" size="sm" />
                    <Typography variant="body2" style="font-weight: 500">
                      {{ user.name }}
                    </Typography>
                  </div>
                </td>
                <td style="padding: 1rem">
                  <Typography variant="body2" style="color: #666">
                    {{ user.email }}
                  </Typography>
                </td>
                <td style="padding: 1rem">
                  <Badge :variant="getRoleBadge(user.role)">
                    {{ user.role }}
                  </Badge>
                </td>
                <td style="padding: 1rem">
                  <Badge :variant="getStatusBadge(user.status)">
                    {{ user.status }}
                  </Badge>
                </td>
                <td style="padding: 1rem; text-align: right">
                  <div style="display: flex; gap: 0.5rem; justify-content: flex-end">
                    <Button variant="secondary" size="sm" @click="handleEdit(user)">
                      Edit
                    </Button>
                    <Button variant="error" size="sm" @click="handleDelete(user.id)">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" style="display: flex; justify-content: center">
          <Pagination
            :currentPage="currentPage"
            :totalPages="totalPages"
            @pageChange="currentPage = $event"
          />
        </div>
      </Card>
    </Container>

    <!-- Add/Edit Modal -->
    <Modal
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      @close="isModalOpen = false"
      :title="editingItem ? 'Edit User' : 'Add New User'"
    >
      <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem">
        <div>
          <Typography variant="caption" style="display: block; margin-bottom: 0.5rem; font-weight: 500">
            Name
          </Typography>
          <Input
            type="text"
            placeholder="Enter name"
            v-model="formData.name"
            style="width: 100%"
          />
        </div>

        <div>
          <Typography variant="caption" style="display: block; margin-bottom: 0.5rem; font-weight: 500">
            Email
          </Typography>
          <Input
            type="email"
            placeholder="Enter email"
            v-model="formData.email"
            style="width: 100%"
          />
        </div>

        <div>
          <Typography variant="caption" style="display: block; margin-bottom: 0.5rem; font-weight: 500">
            Department
          </Typography>
          <Input
            type="text"
            placeholder="Enter department"
            v-model="formData.department"
            style="width: 100%"
          />
        </div>

        <div>
          <Typography variant="caption" style="display: block; margin-bottom: 0.5rem; font-weight: 500">
            Role
          </Typography>
          <Select v-model="formData.role" style="width: 100%">
            <option value="User">User</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </Select>
        </div>

        <div>
          <Typography variant="caption" style="display: block; margin-bottom: 0.5rem; font-weight: 500">
            Status
          </Typography>
          <Select v-model="formData.status" style="width: 100%">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Select>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem">
          <Button variant="secondary" @click="isModalOpen = false">
            Cancel
          </Button>
          <Button variant="primary" @click="handleSave">
            {{ editingItem ? 'Update' : 'Add' }}
          </Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  AppBar, Button, Typography, Card, Container, 
  Input, Select, Modal, Badge, Avatar, Pagination,
  Alert, Tabs
} from 'watercolor-ui/vue'

const router = useRouter()
const isModalOpen = ref(false)
const editingItem = ref(null)
const showAlert = ref(false)
const alertMessage = ref('')
const currentPage = ref(1)
const activeTab = ref('all')
const searchQuery = ref('')

const users = ref([
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', department: 'Engineering' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active', department: 'Marketing' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'User', status: 'Inactive', department: 'Sales' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Manager', status: 'Active', department: 'Engineering' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'User', status: 'Active', department: 'Design' },
])

const formData = ref({
  name: '',
  email: '',
  role: 'User',
  status: 'Active',
  department: ''
})

const handleAdd = () => {
  editingItem.value = null
  formData.value = { name: '', email: '', role: 'User', status: 'Active', department: '' }
  isModalOpen.value = true
}

const handleEdit = (user) => {
  editingItem.value = user
  formData.value = { ...user }
  isModalOpen.value = true
}

const handleDelete = (id) => {
  if (confirm('Are you sure you want to delete this user?')) {
    users.value = users.value.filter(u => u.id !== id)
    alertMessage.value = 'User deleted successfully'
    showAlert.value = true
    setTimeout(() => showAlert.value = false, 3000)
  }
}

const handleSave = () => {
  if (editingItem.value) {
    const index = users.value.findIndex(u => u.id === editingItem.value.id)
    users.value[index] = { ...formData.value, id: editingItem.value.id }
    alertMessage.value = 'User updated successfully'
  } else {
    users.value.push({ ...formData.value, id: users.value.length + 1 })
    alertMessage.value = 'User added successfully'
  }
  showAlert.value = true
  setTimeout(() => showAlert.value = false, 3000)
  isModalOpen.value = false
}

const getStatusBadge = (status) => {
  return status === 'Active' ? 'success' : 'secondary'
}

const getRoleBadge = (role) => {
  const variants = {
    'Admin': 'error',
    'Manager': 'warning',
    'User': 'primary'
  }
  return variants[role] || 'secondary'
}

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesTab = activeTab.value === 'all' || user.status.toLowerCase() === activeTab.value
    return matchesSearch && matchesTab
  })
})

const itemsPerPage = 3
const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage))
</script>
