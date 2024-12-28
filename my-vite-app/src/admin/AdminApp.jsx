import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/AdminLayout';
import Users from './pages/Users';
import AdminLayout from './components/AdminLayout';

function AdminApp() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminApp;
