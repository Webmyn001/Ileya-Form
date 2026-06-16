import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "./Images/img1.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#1a2744]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c] to-[#a8882e] rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#1a2744] rounded-xl w-11 h-11 flex items-center justify-center overflow-hidden shadow-lg border border-[#c9a84c]/20">
                  <img src={logo} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-[#1a2744] text-lg md:text-xl leading-tight">
                  1448AH ILEYA
                </h1>
                <p className="text-[#6b7280] text-xs font-light">Contribution Savings Program</p>
              </div>
            </Link>

            <nav className="hidden md:flex flex-1 items-center justify-center gap-3">
              <Link
                to="/"
                className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'text-[#1a2744] bg-[#1a2744]/5'
                    : 'text-[#6b7280] hover:text-[#1a2744] hover:bg-[#1a2744]/5'
                }`}
              >
                Home
                {location.pathname === '/' && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a8882e] rounded-full"
                  />
                )}
              </Link>
              <Link
                to="/form"
                className="px-5 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-[#1a2744] to-[#0f1a2e] text-white shadow-lg shadow-[#1a2744]/20 hover:shadow-xl hover:shadow-[#1a2744]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Join Now
              </Link>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#1a2744] hover:bg-[#1a2744]/5 transition-colors"
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#1a2744]/10 shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[#1a2744] hover:bg-[#1a2744]/5 transition-all"
              >
                Home
              </Link>
              <Link
                to="/form"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#1a2744] to-[#0f1a2e] text-white shadow-lg text-center transition-all"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
