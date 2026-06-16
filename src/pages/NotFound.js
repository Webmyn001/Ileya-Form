import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf6f0] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-2xl mb-6 shadow-xl">
          <FiAlertTriangle className="text-[#c9a84c] text-3xl" />
        </div>
        <h1 className="text-6xl font-bold text-[#1a2744] mb-2">404</h1>
        <p className="text-xl font-semibold text-[#1a2744] mb-2">Page Not Found</p>
        <p className="text-[#6b7280] text-sm mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-2.5 bg-gradient-to-r from-[#1a2744] to-[#0f1a2e] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            to="/form"
            className="px-6 py-2.5 border border-[#1a2744]/20 text-[#1a2744] font-medium rounded-xl hover:bg-white transition-all duration-300"
          >
            Join Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
