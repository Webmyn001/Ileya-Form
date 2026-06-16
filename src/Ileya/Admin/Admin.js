import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiChevronRight, FiUsers } from 'react-icons/fi';

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a2744]">Dashboard</h1>
          <p className="text-[#6b7280] text-sm mt-1">Manage registration data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-[#1a2744]/5 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6b7280] text-sm font-medium">Total Registrations</p>
              <p className="text-3xl font-bold text-[#1a2744] mt-1">{FormData.length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-xl flex items-center justify-center shadow-lg">
              <FiUsers className="text-[#c9a84c] text-xl" />
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-[#c9a84c] to-[#b8962e] h-1.5 rounded-full" style={{ width: `${Math.min(100, (FormData.length / 50) * 100)}%` }} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[#1a2744]/5 overflow-hidden">
        <div className="p-5 border-b border-[#1a2744]/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-semibold text-[#1a2744]">Registration List</h2>
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
                  <tr key={i} className="hover:bg-[#faf6f0] transition-colors">
                    <td className="py-4 px-4 text-sm text-[#6b7280] font-mono">#{i + 1}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-lg flex items-center justify-center shadow-sm">
                          <FiUser className="text-[#c9a84c] text-xs" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1a2744]">{info.Name}</p>
                          <p className="text-xs text-[#6b7280]">{info.Address?.substring(0, 25)}...</p>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {loading && FormData.length > 0 && (
          <div className="border-t border-[#1a2744]/5 px-5 py-4 flex items-center justify-between">
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
      </div>
    </div>
  );
}

export default Admin;
