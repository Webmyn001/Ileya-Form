import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { API } from './api';

import Home from './Ileya/Client/Home';
import Header from './Ileya/Client/Header';
import Form from './Ileya/Client/Form';

import AdminLogin from './pages/AdminLogin';
import AdminNavbar from './Ileya/Admin/header/Navbar';
import AdminDashboard from './Ileya/Admin/Admin';
import AdminDetails from './Ileya/Admin/Details';

function ProtectedRoute({ children }) {
  const authed = sessionStorage.getItem('ileya_admin') === 'true';
  if (!authed) return <Navigate to="/ileya" replace />;
  return children;
}

function AppContent() {
  const [adminLoading, setAdminLoading] = useState(false);
  const [FormData, setFormData] = useState([]);
  const [clientLoading, setClientLoading] = useState(true);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/ileya');

  useEffect(() => {
    axios.get(API.forms)
      .then(res => { setFormData(res.data); setAdminLoading(true); })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setClientLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/ileya" element={<AdminLogin />} />
        <Route path="/ileya/admin" element={
          <ProtectedRoute>
            <div className="min-h-screen bg-[#faf6f0]">
              <AdminNavbar />
              <AdminDashboard FormData={FormData} loading={adminLoading} />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/ileya/admin/details/:id" element={
          <ProtectedRoute>
            <div className="min-h-screen bg-[#faf6f0]">
              <AdminNavbar />
              <AdminDetails />
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    );
  }

  if (clientLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#faf6f0]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#1a2744] border-t-[#c9a84c] rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[#c9a84c] rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf6f0] font-sans pt-16">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/form" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Form />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
