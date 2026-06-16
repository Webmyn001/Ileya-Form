import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';

function Toast({ show, type = 'success', message, onClose, duration = 6000 }) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-md"
        >
          <div className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border ${
            type === 'success'
              ? 'bg-white border-green-200 shadow-green-500/10'
              : 'bg-white border-red-200 shadow-red-500/10'
          }`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
              type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {type === 'success' ? <FiCheckCircle className="text-lg" /> : <FiAlertCircle className="text-lg" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                {message}
              </p>
              <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: duration / 1000, ease: 'linear' }}
                  className={`h-full rounded-full ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                />
              </div>
            </div>
            <button onClick={onClose} className={`flex-shrink-0 p-1 rounded-lg hover:bg-gray-100 transition-colors ${
              type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              <FiX className="text-lg" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
