import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  FiUser, FiHome, FiPhone, FiCreditCard,
  FiUserPlus, FiHeart, FiTrash2, FiArrowLeft, FiShield
} from 'react-icons/fi';
import { API } from '../../api';
import { motion } from 'framer-motion';

function Details() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteUser = async (id) => {
    setIsDeleting(true);
    try {
      await axios.delete(API.formById(id));
      navigate("/ileya/admin");
    } catch (err) {
      console.log(err);
      alert("Unable to delete. Please check your internet connection.");
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  const Section = ({ title, icon, children }) => (
    <div className="bg-white rounded-xl border border-[#1a2744]/5 p-6">
      <h3 className="text-sm font-bold text-[#1a2744] uppercase tracking-wider mb-5 flex items-center gap-3">
        <span className="text-[#c9a84c]">{icon}</span>
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const Field = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 bg-[#faf6f0] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-[#6b7280]">{icon}</span>
      </div>
      <div>
        <p className="text-xs text-[#6b7280] font-medium">{label}</p>
        <p className="text-sm font-medium text-[#1a2744] mt-0.5">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-medium text-[#6b7280] hover:text-[#1a2744] transition-colors mb-6"
      >
        <FiArrowLeft /> Back to list
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a84c]/5 rounded-full -mr-16 -mt-16" />
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-20 h-20 bg-[#faf6f0]/10 backdrop-blur-sm rounded-2xl border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
            <FiUser className="text-3xl text-[#c9a84c]" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-white">{data.Name}</h1>
            <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Verified Member
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Personal Information" icon={<FiUser />}>
          <Field icon={<FiHome />} label="Home Address" value={data.Address} />
          <Field icon={<FiPhone />} label="Phone Number" value={data.PhoneNo} />
          <Field icon={<FiHeart />} label="Marital Status" value={data.Marital} />
        </Section>

        <Section title="Banking Information" icon={<FiCreditCard />}>
          <Field icon={<FiCreditCard />} label="Bank Name" value={data.BankName} />
          <Field icon={<FiUser />} label="Account Name" value={data.AcctName} />
          <Field icon={<FiCreditCard />} label="Account Number" value={data.AcctNo} />
        </Section>
      </div>

      <div className="mt-6">
        <Section title="Next of Kin" icon={<FiUserPlus />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field icon={<FiUser />} label="Full Name" value={data.NOKName} />
            <Field icon={<FiPhone />} label="Phone Number" value={data.NOK} />
          </div>
        </Section>
      </div>

      <div className="mt-6 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowDeleteModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-red-600/20"
        >
          <FiTrash2 /> Delete Profile
        </motion.button>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiShield className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a2744]">Confirm Deletion</h3>
                <p className="text-sm text-[#6b7280] mt-1">
                  Are you sure you want to delete <span className="font-semibold text-[#1a2744]">{data.Name}'s</span> profile? This cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-200 text-sm font-medium text-[#6b7280] rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteUser(data._id)}
                disabled={isDeleting}
                className={`px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 transition-colors flex items-center gap-2 ${isDeleting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isDeleting ? (
                  <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Deleting...</>
                ) : (
                  <><FiTrash2 /> Delete</>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Details;
