import { motion } from "motion/react";
import { Globe, Users, Star, Trophy, MapPin } from "lucide-react";

const stats = [
  { icon: Globe, label: "500+", sub: "Events Completed" },
  { icon: MapPin, label: "Pan India", sub: "Service Reach" },
  { icon: Trophy, label: "Celebrity", sub: "Artist Management" },
  { icon: Star, label: "Luxury", sub: "Redefined Experiences" },
  { icon: Users, label: "Destination", sub: "Wedding Experts" },
];

export default function TrustStrip() {
  return (
    <section className="bg-charcoal py-10 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-between items-center gap-10 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-brand-blue transition-colors">
                <stat.icon className="text-white group-hover:text-white" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-serif text-white">{stat.label}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
