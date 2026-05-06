import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#events" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 flex items-center justify-between px-6 md:px-15 transition-all duration-300">
      <div className="absolute inset-0 bg-warm-white/95 backdrop-blur-md border-b border-brand-blue/10 -z-10" />
      
      <a href="/" className="logo text-brand-blue font-serif text-2xl font-bold tracking-[2px]">
        PINAKIN
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[11px] uppercase tracking-[2px] font-semibold text-charcoal/80 hover:text-brand-blue transition-colors relative group"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="btn-editorial">
          Book Consultation
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-charcoal p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal z-[100] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <a href="/" className="logo text-brand-blue font-serif text-4xl font-bold tracking-[4px] mb-12">
              PINAKIN
            </a>

            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                href={link.href}
                className="text-2xl uppercase tracking-[0.2em] font-serif text-white hover:text-brand-blue transition-colors italic"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-8 px-12 py-5 bg-brand-blue text-white text-xs uppercase tracking-[0.3em] font-bold rounded-full"
            >
              Consult Now
            </motion.button>

            {/* Backdrop visual elements */}
            <div className="absolute bottom-10 left-0 w-full text-center px-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Luxury Event Excellence</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
