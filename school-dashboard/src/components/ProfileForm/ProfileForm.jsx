import React, { useState } from "react";

export default function ProfileForm({ onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert("Please fill in all fields");
      return;
    }

    onSave(formData);
    // Reset the form
    setFormData({ name: '', email: '', role: '' });
  };

  return (
    <div className="p-4 rounded-xl shadow" style={{ backgroundColor: '#F9F9F9F9' }}>
      <h2 className="text-xl font-semibold mb-4">Add User</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-1 w-full rounded"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-1 w-full rounded"
            type="email"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Role</label>
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-1 w-full rounded"
            type="text"
          />
        </div>
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded mt-2 cursor-pointer" >Save Changes</button>
      </div>
    </div>
  );
}
