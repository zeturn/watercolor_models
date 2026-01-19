import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Alert,
  AppBar,
  Avatar,
  Badge,
  Button,
  Card,
  Container,
  Input,
  Modal,
  Pagination,
  Select,
  Tabs,
  Typography,
} from '@zeturn/watercolor-react'

function ManagementPage() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', department: 'Engineering' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active', department: 'Marketing' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'User', status: 'Inactive', department: 'Sales' },
    { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Manager', status: 'Active', department: 'Engineering' },
    { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'User', status: 'Active', department: 'Design' },
  ])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'Active',
    department: ''
  })

  const handleAdd = () => {
    setEditingItem(null)
    setFormData({ name: '', email: '', role: 'User', status: 'Active', department: '' })
    setIsModalOpen(true)
  }

  const handleEdit = (user) => {
    setEditingItem(user)
    setFormData(user)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id))
      setAlertMessage('User deleted successfully')
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
    }
  }

  const handleSave = () => {
    if (editingItem) {
      setUsers(users.map(u => u.id === editingItem.id ? { ...formData, id: u.id } : u))
      setAlertMessage('User updated successfully')
    } else {
      setUsers([...users, { ...formData, id: users.length + 1 }])
      setAlertMessage('User added successfully')
    }
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
    setIsModalOpen(false)
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

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'all' || user.status.toLowerCase() === activeTab
    return matchesSearch && matchesTab
  })

  const itemsPerPage = 3
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation */}
      <AppBar>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem' }}>
          <Typography variant="h6" style={{ fontWeight: 600 }}>User Management</Typography>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="secondary" size="sm" onClick={() => navigate('/')}>Home</Button>
            <Button variant="secondary" size="sm" onClick={() => navigate('/dashboard')}>Dashboard</Button>
          </div>
        </div>
      </AppBar>

      <Container style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        {/* Alert */}
        {showAlert && (
          <Alert variant="success" style={{ marginBottom: '2rem' }}>
            {alertMessage}
          </Alert>
        )}

        {/* Management Card */}
        <Card style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <Typography variant="h4" style={{ fontWeight: 600 }}>
              Users Directory
            </Typography>
            <Button variant="primary" onClick={handleAdd}>
              + Add User
            </Button>
          </div>

          {/* Search and Filters */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', maxWidth: '400px' }}
            />
          </div>

          {/* Tabs */}
          <Tabs
            activeTab={activeTab}
            onChange={setActiveTab}
            tabs={[
              { id: 'all', label: `All (${users.length})` },
              { id: 'active', label: `Active (${users.filter(u => u.status === 'Active').length})` },
              { id: 'inactive', label: `Inactive (${users.filter(u => u.status === 'Inactive').length})` }
            ]}
            style={{ marginBottom: '2rem' }}
          />

          {/* Users Table */}
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>
                    <Typography variant="caption" style={{ fontWeight: 600 }}>User</Typography>
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>
                    <Typography variant="caption" style={{ fontWeight: 600 }}>Email</Typography>
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>
                    <Typography variant="caption" style={{ fontWeight: 600 }}>Role</Typography>
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>
                    <Typography variant="caption" style={{ fontWeight: 600 }}>Department</Typography>
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>
                    <Typography variant="caption" style={{ fontWeight: 600 }}>Status</Typography>
                  </th>
                  <th style={{ padding: '1rem', textAlign: 'right' }}>
                    <Typography variant="caption" style={{ fontWeight: 600 }}>Actions</Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Avatar name={user.name} size="sm" />
                        <Typography variant="body2" style={{ fontWeight: 500 }}>
                          {user.name}
                        </Typography>
                      </div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <Typography variant="body2" style={{ color: '#666' }}>
                        {user.email}
                      </Typography>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <Badge variant={getRoleBadge(user.role)}>
                        {user.role}
                      </Badge>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <Typography variant="body2">{user.department}</Typography>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <Badge variant={getStatusBadge(user.status)}>
                        {user.status}
                      </Badge>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <Button variant="secondary" size="sm" onClick={() => handleEdit(user)}>
                          Edit
                        </Button>
                        <Button variant="error" size="sm" onClick={() => handleDelete(user.id)}>
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </Card>
      </Container>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingItem ? 'Edit User' : 'Add New User'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem' }}>
            <div>
              <Typography variant="caption" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Name
              </Typography>
              <Input
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <Typography variant="caption" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Email
              </Typography>
              <Input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <Typography variant="caption" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Department
              </Typography>
              <Input
                type="text"
                placeholder="Enter department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <Typography variant="caption" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Role
              </Typography>
              <Select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                style={{ width: '100%' }}
              >
                <option value="User">User</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
              </Select>
            </div>

            <div>
              <Typography variant="caption" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Status
              </Typography>
              <Select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                style={{ width: '100%' }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                {editingItem ? 'Update' : 'Add'}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default ManagementPage
