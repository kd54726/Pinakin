import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

export default function LeadGenForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-mist-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform translate-x-20 hidden lg:block" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-editorial-tag mb-4 block text-center">Begin Your Journey</span>
          <h2 className="text-5xl md:text-7xl font-serif text-charcoal leading-[1.05] tracking-[-1px]">Request an <span className="italic text-slate-blue">Exclusive</span> Consult</h2>
        </div>

        <div className="bg-white rounded-[4px] shadow-editorial overflow-hidden border-editorial">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-12">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex-1 flex flex-col gap-2">
                    <div className={`h-1 transition-all duration-500 ${step >= s ? 'bg-brand-blue' : 'bg-charcoal/10'}`} />
                    <span className={`text-[10px] uppercase tracking-widest font-bold ${step >= s ? 'text-brand-blue' : 'text-charcoal/30'}`}>
                      Step 0{s}
                    </span>
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Your Name</label>
                        <input type="text" placeholder="Full Name" className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 text-xs outline-none focus:border-brand-blue transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Email Address</label>
                        <input type="email" placeholder="email@example.com" className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 text-xs outline-none focus:border-brand-blue transition-all" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Event Type</label>
                        <select className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 text-xs outline-none focus:border-brand-blue transition-all cursor-pointer">
                          <option>Luxury Wedding</option>
                          <option>Destination Wedding</option>
                          <option>Corporate Gala</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Guest Count</label>
                        <select className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 text-xs outline-none focus:border-brand-blue transition-all cursor-pointer">
                          <option>Less than 100</option>
                          <option>100 - 300</option>
                          <option>300+</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Budget Range</label>
                        <select className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 text-xs outline-none focus:border-brand-blue transition-all cursor-pointer">
                          <option>₹50L - ₹1Cr</option>
                          <option>₹1Cr+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Desired Date</label>
                        <input type="date" className="w-full bg-warm-white border border-charcoal/10 px-4 py-3 text-xs outline-none focus:border-brand-blue transition-all" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="w-full sm:w-auto px-8 py-3 border border-charcoal/10 text-charcoal font-bold uppercase tracking-widest text-[11px] hover:bg-ivory transition-all rounded-full flex items-center justify-center gap-2 whitespace-nowrap order-2 sm:order-1"
                  >
                    <ChevronLeft size={14} /> Back
                  </button>
                )}
                {step < 3 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="w-full sm:w-auto sm:ml-auto btn-editorial flex items-center justify-center gap-2 whitespace-nowrap order-1 sm:order-2"
                  >
                    Next Step <ChevronRight size={14} />
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="w-full sm:w-auto sm:ml-auto btn-editorial !bg-charcoal flex items-center justify-center gap-2 whitespace-nowrap order-1 sm:order-2"
                  >
                    Check Availability <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-16 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mx-auto">
                 <CheckCircle size={40} />
              </div>
              <h3 className="text-4xl font-serif">Inquiry Received</h3>
              <p className="text-charcoal/60 font-light max-w-sm mx-auto">
                Thank you for your interest in Pinakin Event & Entertainment. A senior experience designer will reach out to you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-xs font-bold uppercase tracking-widest text-brand-blue border-b border-brand-blue pb-1"
              >
                Submit another inquiry
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
