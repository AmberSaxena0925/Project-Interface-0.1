import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Settings, BarChart3, FileText, Calendar, Bell } from 'lucide-react';

const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${backendURL}/api/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'User'}!</h1>
            <p className="text-gray-400">Here's what's happening with your account</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="text-blue-500" size={24} />
              <span className="text-2xl font-bold">12</span>
            </div>
            <p className="text-gray-400 text-sm">Active Projects</p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-green-500 transition">
            <div className="flex items-center justify-between mb-4">
              <FileText className="text-green-500" size={24} />
              <span className="text-2xl font-bold">48</span>
            </div>
            <p className="text-gray-400 text-sm">Documents</p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="text-purple-500" size={24} />
              <span className="text-2xl font-bold">5</span>
            </div>
            <p className="text-gray-400 text-sm">Upcoming Events</p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-yellow-500 transition">
            <div className="flex items-center justify-between mb-4">
              <Bell className="text-yellow-500" size={24} />
              <span className="text-2xl font-bold">3</span>
            </div>
            <p className="text-gray-400 text-sm">Notifications</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-[#111] border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: 'Project updated', time: '2 hours ago', type: 'success' },
                { action: 'New document uploaded', time: '5 hours ago', type: 'info' },
                { action: 'Meeting scheduled', time: '1 day ago', type: 'warning' },
                { action: 'Task completed', time: '2 days ago', type: 'success' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'success' ? 'bg-green-500' :
                      item.type === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <span>{item.action}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-[#0a0a0a] hover:bg-[#1a1a1a] rounded-lg transition text-left">
                <User size={18} className="text-blue-500" />
                <span>Edit Profile</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-[#0a0a0a] hover:bg-[#1a1a1a] rounded-lg transition text-left">
                <Settings size={18} className="text-gray-500" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-[#0a0a0a] hover:bg-[#1a1a1a] rounded-lg transition text-left">
                <FileText size={18} className="text-green-500" />
                <span>New Document</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-[#0a0a0a] hover:bg-[#1a1a1a] rounded-lg transition text-left">
                <Calendar size={18} className="text-purple-500" />
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="mt-6 bg-[#111] border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <p className="font-medium">{user?.email || 'user@example.com'}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Member Since</p>
              <p className="font-medium">January 2024</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Plan</p>
              <p className="font-medium text-blue-400">Pro Plan</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Status</p>
              <p className="font-medium text-green-400">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}