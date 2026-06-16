import React, { useState } from 'react';
import Form from './Form';
import { CiMail } from 'react-icons/ci';
import { BsFillTelephoneInboundFill, BsArrowRight } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#faf6f0]">
      {/* HERO */}
      <section className="relative min-h-[460px] sm:min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv82MNwN6FuHvarsvJ9r5PVG90RzBtfENmXA&s')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/80 via-[#1a2744]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6f0] via-[#faf6f0]/10 to-transparent" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 w-full px-5 sm:px-8 pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Savings Program 1448AH</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                <span className="bg-gradient-to-r from-[#c9a84c] to-[#f0d78c] bg-clip-text text-transparent">ILEYA</span>
                <br />
                <span className="text-white/95">Contribution Savings</span>
              </h1>
              <p className="mt-4 text-white/70 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed">
                Join our community savings program and secure your festive season with disciplined weekly contributions.
              </p>
              <div className="flex flex-wrap gap-4 mt-7">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#c9a84c] to-[#b8962e] text-[#1a2744] font-semibold rounded-xl shadow-xl shadow-[#c9a84c]/25 hover:shadow-2xl hover:shadow-[#c9a84c]/40 transition-all duration-300 text-sm sm:text-base"
                >
                  Register Now <BsArrowRight className="text-lg" />
                </motion.button>
                <a
                  href="#contact"
                  className="inline-flex items-center px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="relative z-20 -mt-8 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[#1a2744]/5 overflow-hidden"
          >
            <div className="relative bg-gradient-to-r from-[#1a2744] to-[#0f1a2e] py-5 px-6 sm:px-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a84c]/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-[#c9a84c]/5 rounded-full -mb-10" />
              <h2 className="relative text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent rounded-full" />
                RULES &amp; REGULATIONS
              </h2>
            </div>
            <div className="p-6 sm:p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <RuleItem number="1" text="Everyone is expected to pay into his/her wallet the minimum of ₦500 per week" />
                <RuleItem number="4" text="A token of ₦50 is expected to be added every time a transfer is made into your wallet" />
                <RuleItem number="2" text="You are to collect the money only when the festival is around the corner unless there is tangible reason" />
                <RuleItem number="5" text="Evidence of payment should be sent privately to the admin for confirmation" />
                <RuleItem number="3" text="Your money will be returned after 3-months of non-payment and you will be removed from the platform" />
                <RuleItem number="6" text="You are required to fill the form for proper documentation and future reference" />
              </div>
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#1a2744]/5 text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a2744] hover:bg-[#0f1a2e] text-white font-medium rounded-xl transition-colors shadow-lg shadow-[#1a2744]/10 text-sm sm:text-base"
                >
                  Fill Registration Form <BsArrowRight className="text-lg" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2744]">Why Join ILEYA Savings?</h2>
          <p className="text-[#6b7280] text-sm sm:text-base mt-2 max-w-lg mx-auto">
            A simple and disciplined way to save for the festive season
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Disciplined Savings', desc: 'Build a consistent savings habit with weekly contributions of ₦500 minimum.' },
            { title: 'Community Based', desc: 'Save together with a community that shares the same goals and values.' },
            { title: 'Festive Ready', desc: 'Have your funds ready when the festival approaches — no last-minute stress.' },
            { title: 'Secure Platform', desc: 'Your contributions and data are securely managed and tracked.' },
            { title: 'Easy Tracking', desc: 'Monitor your savings progress and stay motivated throughout the year.' },
            { title: 'Dedicated Support', desc: 'Our team is available to assist you Monday through Saturday.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="bg-white rounded-xl border border-[#1a2744]/5 p-5 sm:p-6 hover:shadow-lg hover:border-[#c9a84c]/20 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-lg flex items-center justify-center mb-3 shadow-md">
                <span className="text-[#c9a84c] text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-bold text-[#1a2744] text-sm sm:text-base">{item.title}</h3>
              <p className="text-[#6b7280] text-xs sm:text-sm mt-1.5 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-[#1a2744]/5 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-xl mb-4 shadow-lg">
                <BsFillTelephoneInboundFill className="text-[#c9a84c] text-lg" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a2744]">For More Inquiries</h2>
              <p className="text-[#6b7280] text-sm mt-1">Reach out via any of the channels below</p>
              <div className="mt-6 space-y-3">
                <a href="https://wa.me/2347064989803?text=Hello%20I%20want%20to%20make%20enquiry%20about%20the%20platform" target="_blank" rel="noopener noreferrer">
                  <ContactItem icon={<FaWhatsapp />} text="Chat with us on WhatsApp" />
                </a>
                <ContactItem icon={<BsFillTelephoneInboundFill />} text="07064989893" />
                <ContactItem icon={<BsFillTelephoneInboundFill />} text="09122251064" />
                <ContactItem icon={<BsFillTelephoneInboundFill />} text="07055291690" />
                <ContactItem icon={<CiMail />} text="nasirudeenidris@gmail.com" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] p-8 sm:p-10 flex flex-col justify-center">
              <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center mb-4 border border-[#c9a84c]/20">
                <svg className="w-6 h-6 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg">Support Hours</h3>
              <p className="text-[#c9a84c]/80 text-sm mt-2 leading-relaxed">
                Our customer support team is available to assist you.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white font-medium text-sm">Monday – Saturday</p>
                <p className="text-[#c9a84c] text-sm">9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FORM MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
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

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/2347064989803?text=Hello%20I%20want%20to%20make%20enquiry%20about%20the%20platform"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-green-500/30 shadow-green-500/20 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
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
      <p className="text-[#374151] leading-relaxed pt-1 text-sm sm:text-base">{text}</p>
    </motion.div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 bg-[#faf6f0] rounded-xl p-4 border border-[#1a2744]/5 hover:border-[#c9a84c]/30 hover:shadow-md transition-all duration-300 group">
      <div className="w-11 h-11 bg-gradient-to-br from-[#1a2744] to-[#0f1a2e] rounded-xl flex items-center justify-center text-[#c9a84c] group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
        {icon}
      </div>
      <p className="text-[#1a2744] font-medium text-sm">{text}</p>
    </div>
  );
}

export default Home;
