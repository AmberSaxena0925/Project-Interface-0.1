import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Users, BarChart3, Settings, Shield, 
  Activity, TrendingUp, AlertCircle, CheckCircle,
  Search, Filter, MoreVertical, Edit, Trash2
} from 'lucide-react';

const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function AdminPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Fetch admin data
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`${backendURL}/api/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          
          // Check if user is admin
          if (data.user.role !== 'admin') {
            navigate('/dashboard');
            return;
          }
        }
      } catch (error) {
        console.error('Error fetching admin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'blue', change: '+12%' },
    { label: 'Active Sessions', value: '89', icon: Activity, color: 'green', change: '+5%' },
    { label: 'Revenue', value: '$45.2K', icon: TrendingUp, color: 'purple', change: '+18%' },
    { label: 'Issues', value: '23', icon: AlertCircle, color: 'red', change: '-8%' },
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', joined: '2024-01-14' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', joined: '2024-01-13' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'active', joined: '2024-01-12' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'pending', joined: '2024-01-11' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      {/* Admin Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="text-blue-500" size={28} />
              <h1 className="text-3xl font-bold">Admin Panel</h1>
            </div>
            <p className="text-gray-400">Manage your platform</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800 pb-4">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#111] text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`text-${stat.color}-500`} size={24} />
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">System Activity</h2>
              <div className="space-y-4">
                {[
                  { action: 'New user registered', time: '5 minutes ago', status: 'success' },
                  { action: 'Payment received', time: '15 minutes ago', status: 'success' },
                  { action: 'Server backup completed', time: '1 hour ago', status: 'success' },
                  { action: 'Failed login attempt', time: '2 hours ago', status: 'error' },
                  { action: 'Database optimization', time: '3 hours ago', status: 'info' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                    <div className="flex items-center gap-3">
                      {item.status === 'success' && <CheckCircle className="text-green-500" size={18} />}
                      {item.status === 'error' && <AlertCircle className="text-red-500" size={18} />}
                      {item.status === 'info' && <Activity className="text-blue-500" size={18} />}
                      <span>{item.action}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">User Management</h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg hover:border-gray-600 transition">
                  <Filter size={18} />
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">User</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Email</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Joined</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-800 hover:bg-[#0a0a0a]">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                            {user.name.charAt(0)}
                          </div>
                          <span>{user.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-400">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          user.status === 'inactive' ? 'bg-gray-500/20 text-gray-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-400">{user.joined}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition">
                            <Edit size={16} className="text-blue-500" />
                          </button>
                          <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition">
                            <Trash2 size={16} className="text-red-500" />
                          </button>
                          <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition">
                            <MoreVertical size={16} className="text-gray-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
              <div className="h-64 flex items-center justify-center bg-[#0a0a0a] rounded-lg">
                <p className="text-gray-500">Chart placeholder</p>
              </div>
            </div>
            <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">User Growth</h2>
              <div className="h-64 flex items-center justify-center bg-[#0a0a0a] rounded-lg">
                <p className="text-gray-500">Chart placeholder</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Admin Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Site Name</label>
                <input
                  type="text"
                  defaultValue="Forge Surge"
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Support Email</label>
                <input
                  type="email"
                  defaultValue="support@forgesurge.com"
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                <div>
                  <p className="font-medium">Maintenance Mode</p>
                  <p className="text-sm text-gray-400">Temporarily disable the site</p>
                </div>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
                  Disable
                </button>
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}