import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Ileya/Client/Home';
import Header from './Ileya/Client/Header';
import Form from './Ileya/Client/Form';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#e6d8ce] to-[#d4c5bb] font-sans">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-[#323232] border-t-[#0b46a1] rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#0b46a1] rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <motion.div
                      key="home"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Home />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/form" 
                  element={
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Form />
                    </motion.div>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;