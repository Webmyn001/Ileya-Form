import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiChevronRight, FiUsers, FiCalendar, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4 } }),
};

function Admin({ FormData, loading }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const filteredData = FormData.filter(item =>
    item.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.PhoneNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') direction = 'descending';
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-56 h-56 bg-[#c9a84c]/5 rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#c9a84c]/[0.03] rounded-full -ml-16 -mb-16" />
        <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-[#c9a84c]/70 text-sm mt-1">Manage Ileya contribution registrations</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
            <FiCalendar className="text-[#c9a84c] text-sm" />
            <span className="text-white/80 text-xs font-medium">1448AH</span>
          </div>
        </div>
      </motion.div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          { label: 'Total Registrations', value: FormData.length, icon: <FiUsers className="text-xl" />, color: 'from-[#1a2744] to-[#0f1a2e]', accent: 'bg-[#c9a84c]' },
          { label: 'Active Members', value: FormData.length, icon: <FiTrendingUp className="text-xl" />, color: 'from-emerald-600 to-emerald-800', accent: 'bg-emerald-400' },
          { label: 'This Session', value: '1448AH', icon: <FiCalendar className="text-xl" />, color: 'from-[#c9a84c] to-[#a8882e]', accent: 'bg-[#1a2744]' },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            custom={i}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="bg-white rounded-xl shadow-sm border border-[#1a2744]/5 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#6b7280] text-sm font-medium">{card.label}</p>
                <p className="text-3xl font-bold text-[#1a2744] mt-1">{card.value}</p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <span className="text-white">{card.icon}</span>
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-100 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (FormData.length / 50) * 100)}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={`h-1.5 rounded-full ${card.accent}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* TABLE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-[#1a2744]/5 overflow-hidden"
      >
        <div className="p-5 border-b border-[#1a2744]/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#faf6f0] rounded-lg flex items-center justify-center">
                <FiUsers className="text-[#1a2744] text-sm" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#1a2744]">Registration List</h2>
                <p className="text-xs text-[#6b7280]">{sortedData.length} entries found</p>
              </div>
            </div>
            <div className="relative w-full md:w-72">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b7280]" />
              <input
                type="text"
                placeholder="Search by name or phone..."
                className="w-full pl-10 pr-4 py-2 bg-[#faf6f0] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {!loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-2 border-[#c9a84c] border-t-transparent" />
              <p className="mt-4 text-[#6b7280] text-sm">Loading registration data...</p>
            </div>
          </div>
        )}

        {loading && FormData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="w-16 h-16 bg-[#faf6f0] rounded-full flex items-center justify-center mb-4">
              <FiUser className="text-2xl text-[#6b7280]" />
            </div>
            <h3 className="text-lg font-medium text-[#1a2744] mb-1">No Registrations Yet</h3>
            <p className="text-[#6b7280] text-sm max-w-sm">New registrations will appear here once submitted.</p>
          </div>
        )}

        {loading && FormData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1a2744]/5">
                  {['ID', 'Name', 'Phone', 'Bank', 'Status', ''].map((h) => (
                    <th key={h} className="py-4 px-4 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                      {h === 'Name' ? (
                        <button className="flex items-center gap-1 hover:text-[#1a2744] transition-colors" onClick={() => requestSort('Name')}>
                          Name {getSortIndicator('Name')}
                        </button>
                      ) : h === 'Phone' ? (
                        <button className="flex items-center gap-1 hover:text-[#1a2744] transition-colors" onClick={() => requestSort('PhoneNo')}>
                          Phone {getSortIndicator('PhoneNo')}
                        </button>
                      ) : h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {sortedData.map((info, i) => (
                  <motion.tr
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    className="hover:bg-[#faf6f0] transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-[#6b7280] font-mono">#{i + 1}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-lg flex items-center justify-center shadow-sm">
                          <FiUser className="text-[#c9a84c] text-xs" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1a2744]">{info.Name}</p>
                          <p className="text-xs text-[#6b7280]">{info.Address?.substring(0, 30)}{info.Address?.length > 30 ? '...' : ''}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#6b7280]">{info.PhoneNo}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex px-3 py-1 bg-[#1a2744]/5 text-[#1a2744] text-xs font-medium rounded-full">
                        {info.BankName}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        Verified
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to={{ pathname: `/ileya/admin/details/${info.Name}` }}
                        state={info}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#c9a84c] hover:text-[#b8962e] transition-colors"
                      >
                        View <FiChevronRight />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {loading && FormData.length > 0 && (
          <div className="border-t border-[#1a2744]/5 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-[#6b7280]">
              Showing 1 to {Math.min(10, FormData.length)} of {FormData.length} entries
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-gray-200 text-sm text-[#6b7280] rounded-lg hover:bg-[#faf6f0] transition-colors">Previous</button>
              <button className="px-3 py-1.5 bg-[#1a2744] text-white text-sm rounded-lg">1</button>
              <button className="px-3 py-1.5 border border-gray-200 text-sm text-[#6b7280] rounded-lg hover:bg-[#faf6f0] transition-colors">Next</button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Admin;
