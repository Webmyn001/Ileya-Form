import React, { useState } from 'react';
import Form from './Form';
import { IoHome } from 'react-icons/io5';
import { FaFileCirclePlus } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';
import { BsFillTelephoneInboundFill, BsArrowRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const patterns = [
  { size: 'w-48 h-48', top: '-top-20', left: '-left-20', delay: 0 },
  { size: 'w-32 h-32', bottom: '-bottom-10', right: '-right-10', delay: 0.2 },
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#faf6f0]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2744] via-[#1f3259] to-[#0f1a2e] min-h-[420px] sm:min-h-[480px] flex items-end">
        {patterns.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.size} ${p.top || ''} ${p.bottom || ''} ${p.left || ''} ${p.right || ''} rounded-full bg-[#c9a84c]/5 blur-3xl`}
          />
        ))}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6f0] via-[#faf6f0]/20 to-transparent" />
        <div className="relative z-10 w-full px-4 sm:px-6 pb-10 sm:pb-14">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
                <span className="text-white/70 text-xs font-medium tracking-wider uppercase">Savings Program 1448AH</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-[#c9a84c] to-[#f0d78c] bg-clip-text text-transparent">ILEYA</span>
                <br />
                <span className="text-white">Contribution Savings</span>
              </h1>
              <p className="mt-3 text-white/60 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                Join our community savings program and secure your festive season with disciplined weekly contributions.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpen(true)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c9a84c] to-[#b8962e] text-[#1a2744] font-semibold rounded-xl shadow-lg shadow-[#c9a84c]/20 hover:shadow-xl hover:shadow-[#c9a84c]/30 transition-all duration-300"
              >
                Register Now <BsArrowRight className="text-lg" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[#1a2744]/5 overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-[#1a2744] to-[#0f1a2e] py-5 px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-full -mr-10 -mt-10" />
            <h2 className="relative text-lg font-bold text-white tracking-wide flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent rounded-full" />
              RULES &amp; REGULATIONS
            </h2>
          </div>
          <div className="p-6 sm:p-8">
            <div className="grid gap-4">
              <RuleItem number="1" text="Everyone is expected to pay into his/her wallet the minimum of ₦500 per week" />
              <RuleItem number="2" text="You are to collect the money only when the festival is around the corner unless there is tangible reason" />
              <RuleItem number="3" text="Your money will be returned after 3-months of non-payment and you will be removed from the platform" />
              <RuleItem number="4" text="A token of ₦50 is expected to be added every time a transfer is made into your wallet" />
              <RuleItem number="5" text="Evidence of payment should be sent privately to the admin for confirmation" />
              <RuleItem number="6" text="You are required to fill the form for proper documentation and future reference" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[#1a2744]/5 p-8 sm:p-10"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-2xl mb-4 shadow-lg">
              <BsFillTelephoneInboundFill className="text-[#c9a84c] text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a2744]">For More Inquiries</h2>
            <p className="text-[#6b7280] text-sm mt-1">Reach out to us via any of the channels below</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <ContactItem icon={<BsFillTelephoneInboundFill />} text="07064989893" />
            <ContactItem icon={<BsFillTelephoneInboundFill />} text="09122251064" />
            <ContactItem icon={<BsFillTelephoneInboundFill />} text="07055291690" />
            <ContactItem icon={<CiMail />} text="nasirudeenidris@gmail.com" />
          </div>
          <div className="mt-8 bg-gradient-to-r from-[#1a2744] to-[#0f1a2e] rounded-xl p-5 text-center">
            <p className="text-[#c9a84c] text-sm font-medium tracking-wide">
              Customer support available Monday – Saturday, 9AM – 5PM
            </p>
          </div>
        </motion.div>
      </section>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
        <div className="flex justify-center">
          <div className="bg-white/90 backdrop-blur-xl border border-[#1a2744]/10 flex justify-between items-center rounded-full shadow-2xl shadow-black/10 px-5 py-2.5 w-full max-w-sm">
            <button
              className={`p-2.5 rounded-full transition-all duration-300 ${!open ? 'bg-[#1a2744] text-white shadow-lg shadow-[#1a2744]/20' : 'text-[#6b7280] hover:text-[#1a2744]'}`}
              onClick={() => setOpen(false)}
            >
              <IoHome className="text-xl" />
            </button>
            <span className="text-xs font-medium text-[#6b7280]">{open ? 'Close Form' : 'Open Form'}</span>
            <button
              className={`p-2.5 rounded-full transition-all duration-300 ${open ? 'bg-[#1a2744] text-white shadow-lg shadow-[#1a2744]/20' : 'text-[#6b7280] hover:text-[#1a2744]'}`}
              onClick={() => setOpen(!open)}
            >
              <FaFileCirclePlus className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* FORM MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <Form />
              <div className="p-4 bg-[#faf6f0] border-t border-[#1a2744]/5 flex justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="px-8 py-2.5 bg-[#1a2744] hover:bg-[#0f1a2e] text-white rounded-xl font-medium text-sm transition-colors shadow-lg shadow-[#1a2744]/10"
                >
                  Close Form
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RuleItem({ number, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-4 group"
    >
      <div className="relative flex-shrink-0 mt-0.5">
        <div className="w-8 h-8 bg-gradient-to-br from-[#c9a84c] to-[#b8962e] rounded-full flex items-center justify-center shadow-md shadow-[#c9a84c]/20 group-hover:shadow-lg group-hover:shadow-[#c9a84c]/30 transition-shadow">
          <span className="text-[#1a2744] font-bold text-sm">{number}</span>
        </div>
      </div>
      <p className="text-[#374151] leading-relaxed pt-1">{text}</p>
    </motion.div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 bg-[#faf6f0] rounded-xl p-4 border border-[#1a2744]/5 hover:border-[#c9a84c]/30 hover:shadow-md transition-all duration-300 group">
      <div className="w-11 h-11 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-xl flex items-center justify-center text-[#c9a84c] group-hover:scale-110 transition-transform duration-300 shadow-md">
        {icon}
      </div>
      <p className="text-[#1a2744] font-medium text-sm">{text}</p>
    </div>
  );
}

export default Home;
