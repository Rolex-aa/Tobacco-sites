import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, Legend 
} from 'recharts';
import { 
  BarChart3, Box, PlusCircle, Trash2, LogOut, Package, 
  IndianRupee, TrendingUp, Settings, Edit
} from 'lucide-react';

const API_BASE = 'http://localhost:5001/api';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('stats');
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: '', description: '', price: '', category: 'machine', 
    isFeatured: false, specifications: [{ label: '', value: '' }]
  });
  const [imageFile, setImageFile] = useState(null);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) navigate('/admin/login');
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const pRes = await axios.get(`${API_BASE}/products`);
      const sRes = await axios.get(`${API_BASE}/sales/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(pRes.data.data);
      setSalesData(sRes.data.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const addSpecField = () => {
    setFormData({ ...formData, specifications: [...formData.specifications, { label: '', value: '' }] });
  };

  const updateSpec = (index, field, value) => {
    const newSpecs = [...formData.specifications];
    newSpecs[index][field] = value;
    setFormData({ ...formData, specifications: newSpecs });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('isFeatured', formData.isFeatured);
    data.append('specifications', JSON.stringify(formData.specifications));
    if (imageFile) data.append('image', imageFile);

    try {
      await axios.post(`${API_BASE}/products`, data, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}` 
        }
      });
      setShowForm(false);
      fetchData();
      setFormData({ name: '', description: '', price: '', category: 'machine', isFeatured: false, specifications: [{ label: '', value: '' }] });
      setImageFile(null);
    } catch (err) {
      alert('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await axios.delete(`${API_BASE}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#1e293b] border-r border-white/5 flex flex-col p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-nk-gold rounded-xl flex items-center justify-center text-[#0f172a] font-black italic">NK</div>
          <span className="text-xl font-black tracking-tight">Admin<span className="text-nk-gold">Panel</span></span>
        </div>

        <nav className="space-y-2 flex-grow">
          <button 
            onClick={() => setActiveTab('stats')}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'stats' ? 'bg-nk-gold text-[#0f172a] font-bold shadow-lg shadow-nk-gold/20' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <BarChart3 size={20} /> Sales Stats
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === 'products' ? 'bg-nk-gold text-[#0f172a] font-bold shadow-lg shadow-nk-gold/20' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <Box size={20} /> Products
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-4 px-6 py-4 rounded-2xl text-red-400 hover:bg-red-400/10 transition-all font-bold"
        >
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2">{activeTab === 'stats' ? 'Sales Overview' : 'Product Inventory'}</h1>
            <p className="text-gray-400">Welcome back, NK Engineering Admin.</p>
          </div>
          {activeTab === 'products' && (
            <button 
              onClick={() => setShowForm(true)}
              className="bg-nk-gold text-[#0f172a] font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-yellow-400 transition-all shadow-xl shadow-nk-gold/10"
            >
              <PlusCircle size={20} /> Add New Item
            </button>
          )}
        </header>

        {activeTab === 'stats' ? (
          <div className="space-y-10">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1e293b] p-8 rounded-[2rem] border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-nk-gold/10 rounded-2xl text-nk-gold"><IndianRupee size={24} /></div>
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Total Revenue</span>
                </div>
                <div className="text-4xl font-black">₹{salesData.reduce((acc, s) => acc + s.amount, 0).toLocaleString('en-IN')}</div>
              </div>
              <div className="bg-[#1e293b] p-8 rounded-[2rem] border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-green-400/10 rounded-2xl text-green-400"><TrendingUp size={24} /></div>
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Total Orders</span>
                </div>
                <div className="text-4xl font-black">{salesData.length}</div>
              </div>
              <div className="bg-[#1e293b] p-8 rounded-[2rem] border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-blue-400/10 rounded-2xl text-blue-400"><Package size={24} /></div>
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Active Products</span>
                </div>
                <div className="text-4xl font-black">{products.length}</div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-[#1e293b] p-10 rounded-[2.5rem] border border-white/5 h-[500px]">
              <h3 className="text-xl font-bold mb-8">Sales Performance</h3>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #ffffff10', borderRadius: '16px' }}
                    itemStyle={{ color: '#f59e0b' }}
                  />
                  <Line type="monotone" dataKey="amount" stroke="#f59e0b" strokeWidth={4} dot={{ r: 6, fill: '#f59e0b' }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(p => (
              <div key={p._id} className="bg-[#1e293b] rounded-[2rem] overflow-hidden border border-white/5 group relative">
                <div className="h-48 bg-white p-6 flex items-center justify-center relative">
                  <img src={`http://localhost:5001${p.image}`} alt={p.name} className="max-w-full max-h-full object-contain" />
                  <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <button className="p-2 bg-blue-500 rounded-lg text-white"><Edit size={16} /></button>
                    <button onClick={() => deleteProduct(p._id)} className="p-2 bg-red-500 rounded-lg text-white"><Trash2 size={16} /></button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded bg-nk-gold/10 text-nk-gold`}>{p.category}</span>
                    <span className="text-xl font-black text-white">₹{p.price.toLocaleString('en-IN')}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{p.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    {p.specifications.slice(0, 3).map((s, i) => (
                      <span key={i} className="text-[11px] bg-white/5 text-gray-400 px-3 py-1 rounded-full">{s.label}: {s.value}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add Product Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[999] bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-[#1e293b] w-full max-w-2xl rounded-[3rem] p-12 shadow-2xl border border-white/5 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black">Add New Product</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-white text-2xl">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Product Name</label>
                  <input 
                    className="w-full bg-[#0f172a] border-2 border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-nk-gold transition-all"
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Price (₹)</label>
                  <input 
                    type="number" className="w-full bg-[#0f172a] border-2 border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-nk-gold transition-all"
                    value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Category</label>
                <div className="flex gap-4">
                  {['machine', 'parts'].map(c => (
                    <button 
                      key={c} type="button"
                      onClick={() => setFormData({...formData, category: c})}
                      className={`flex-1 py-4 rounded-2xl font-bold capitalize transition-all border-2 ${formData.category === c ? 'bg-nk-gold text-[#0f172a] border-nk-gold' : 'border-white/5 text-gray-400'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Image Upload</label>
                <input 
                  type="file" onChange={e => setImageFile(e.target.files[0])}
                  className="w-full bg-[#0f172a] border-2 border-dashed border-white/10 rounded-2xl px-6 py-4 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Description</label>
                <textarea 
                  rows="3" className="w-full bg-[#0f172a] border-2 border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-nk-gold transition-all"
                  value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Specifications</label>
                  <button type="button" onClick={addSpecField} className="text-nk-gold font-bold text-xs uppercase tracking-widest">+ Add Row</button>
                </div>
                <div className="space-y-4">
                  {formData.specifications.map((spec, i) => (
                    <div key={i} className="flex gap-4">
                      <input 
                        placeholder="Label" value={spec.label} onChange={e => updateSpec(i, 'label', e.target.value)}
                        className="flex-1 bg-[#0f172a] border-2 border-white/5 rounded-xl px-4 py-3 outline-none focus:border-nk-gold transition-all"
                      />
                      <input 
                        placeholder="Value" value={spec.value} onChange={e => updateSpec(i, 'value', e.target.value)}
                        className="flex-1 bg-[#0f172a] border-2 border-white/5 rounded-xl px-4 py-3 outline-none focus:border-nk-gold transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" id="isFeatured" checked={formData.isFeatured} 
                  onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
                />
                <label htmlFor="isFeatured" className="text-sm font-bold text-gray-300">Show in Homepage Gallery</label>
              </div>

              <button 
                type="submit" disabled={loading}
                className="w-full bg-nk-gold text-[#0f172a] font-black py-5 rounded-2xl text-xl hover:bg-yellow-400 active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? 'Adding Product...' : 'Create Listing'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
