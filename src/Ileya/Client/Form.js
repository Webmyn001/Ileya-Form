import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../../api'
import Button from './Button'
import { Oval } from 'react-loader-spinner'
import { motion } from 'framer-motion'

function Form() {
  const [loading, setLoading] = useState(false)
 const [formData, setFormData] = useState({
  Name: "",
  Address: "",
  PhoneNo: "",
  BankName: "",
  AcctName: "",
  AcctNo: "",
  NOK: "",
  NOKName: "",
  Marital: ""
})

const navigate = useNavigate()

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const saveForm = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    await axios.post(API.formAdd, formData)
    alert("Thank you! Response received. We'll contact you via WhatsApp soon.")

    setFormData({
      Name: "",
      Address: "",
      PhoneNo: "",
      BankName: "",
      AcctName: "",
      AcctNo: "",
      NOK: "",
      NOKName: "",
      Marital: ""
    })

    navigate("/")
  } catch (err) {
    console.error("Submission error:", err)
    alert("Unable to submit form. Please check your connection and try again.")
  } finally {
    setLoading(false)
  }
}

  const sections = [
    { title: 'Personal Information', fields: ['Name', 'Address', 'PhoneNo', 'Marital'] },
    { title: 'Banking Details', fields: ['BankName', 'AcctName', 'AcctNo'] },
    { title: 'Next of Kin', fields: ['NOKName', 'NOK'] },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-2xl mb-4 shadow-lg">
            <svg className="w-6 h-6 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#1a2744]">Registration Form</h2>
          <p className="text-[#6b7280] text-sm mt-1">Fill the form below for proper documentation</p>
        </div>

        <form onSubmit={saveForm} className="space-y-6">
          {sections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-[#1a2744]/5 p-6 sm:p-8"
            >
              <h3 className="text-sm font-bold text-[#1a2744] uppercase tracking-wider mb-6 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent rounded-full" />
                {section.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {section.fields.map((field) => (
                  <div key={field} className={field === 'Address' || field === 'NOKName' ? 'sm:col-span-2' : ''}>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">
                      {field === 'Name' ? 'Full Name' :
                       field === 'Address' ? 'Home Address' :
                       field === 'PhoneNo' ? 'Phone Number' :
                       field === 'Marital' ? 'Marital Status' :
                       field === 'BankName' ? 'Bank Name' :
                       field === 'AcctName' ? 'Account Name' :
                       field === 'AcctNo' ? 'Account Number' :
                       field === 'NOKName' ? 'Next of Kin Name' :
                       field === 'NOK' ? 'Next of Kin Phone' : field}
                    </label>
                    {field === 'Marital' ? (
                      <select
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-[#faf6f0] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-all text-[#1a2744]"
                      >
                        <option value="">Select Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <input
                        name={field}
                        type={field === 'PhoneNo' || field === 'NOK' ? 'tel' : field === 'AcctNo' ? 'number' : 'text'}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        placeholder={
                          field === 'Name' ? 'John Doe' :
                          field === 'Address' ? '123 Main Street' :
                          field === 'PhoneNo' ? '08012345678' :
                          field === 'BankName' ? 'Access Bank' :
                          field === 'AcctName' ? 'John Doe' :
                          field === 'AcctNo' ? '0123456789' :
                          field === 'NOKName' ? 'Jane Smith' :
                          field === 'NOK' ? '08087654321' : ''
                        }
                        className="w-full px-4 py-2.5 bg-[#faf6f0] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-all text-[#1a2744] placeholder-gray-400"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center pt-2 pb-6">
            {loading ? (
              <div className="py-2">
                <Oval height={36} width={36} color="#1a2744" secondaryColor="#c9a84c" ariaLabel="loading" />
              </div>
            ) : (
              <Button className="w-full max-w-sm py-3 text-base tracking-wide">
                Submit Registration
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
