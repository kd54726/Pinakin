import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Cinematic Visual with Low Opacity Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Event Atmosphere"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-editorial-tag mb-6 block">
            Luxury Event Production
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl text-white font-serif mb-8 leading-[1.05] tracking-[-1px]">
            Celebrations Designed <br className="hidden md:block" />
            <span className="italic text-slate-blue">Larger Than Life.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
            Luxury weddings, destination events, and unforgettable guest experiences crafted with cinematic precision and effortless hospitality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-editorial !px-12 !py-4 shadow-xl">
              Book Consultation
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white text-[11px] uppercase tracking-[2px] font-semibold border border-white/20 hover:bg-white/20 transition-all rounded-full flex items-center justify-center whitespace-nowrap shadow-lg">
              Our Process
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-32 right-[-20px] bg-brand-blue text-white px-5 py-2.5 text-[10px] uppercase tracking-[2px] font-bold rotate-90 origin-top-right z-20">
        Now Booking 2026
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white to-white/0 animate-bounce" />
      </div>
    </section>
  );
}
