import { motion } from "motion/react";

const trustItems = [
  { label: "Destination", focus: "Weddings" },
  { label: "Celebrity", focus: "Management" },
  { label: "Luxury", focus: "Decor" },
  { label: "Elite", focus: "Hospitality" },
];

export default function TrustTicker() {
  return (
    <div className="bg-deep-charcoal border-b border-white/5 overflow-hidden py-5 relative">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 25, 
          ease: "linear" 
        }}
        className="flex items-center gap-12 md:gap-20 whitespace-nowrap min-w-max px-6 text-[10px] md:text-[11px] uppercase tracking-[2px] text-white/50"
      >
        {/* Double the sets for a perfect seamless loop */}
        {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12 md:gap-20">
            <div className="shrink-0">
              <strong className="text-white">{item.label}</strong> {item.focus}
            </div>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
