import { motion } from "motion/react";
import { Heart, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya & Rohan",
    event: "Destination Wedding",
    quote: "Pinakin didn't just plan a wedding; they created a world where we felt like the lead characters in a masterpiece. Every detail was beyond our wildest dreams.",
    img: "https://images.unsplash.com/photo-1621607512022-6aeccec13663?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Aditya Mehta",
    event: "Silver Jubilee Celebration",
    quote: "The level of hospitality and the sheer scale of the production was something our guests are still talking about. Absolutely flawless execution.",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop"
  },
  {
    name: "Sanjana Kapoor",
    event: "Pre-Wedding Gala",
    quote: "Meticulous planning and artistic vision. They transformed an empty lawn into a surreal dreamscape that left every guest speechless.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Vikram Malhotra",
    event: "International Corporate Summit",
    quote: "Professionalism at its peak. Managing a global summit with precision and standard-setting hospitality. Pinakin is truly elite.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-mist-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Header Column */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-charcoal leading-[1.1]">
                Whispers of <br />
                <span className="italic text-brand-blue">Love</span>
              </h2>
              <div className="w-16 h-1 bg-brand-blue mt-6 mb-8" />
              <p className="text-charcoal/60 font-sans font-light leading-relaxed mb-8 text-sm">
                What our clients say about their experience with Pinakin Events.
              </p>
              
              <div className="flex gap-1.5 text-brand-blue">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Testimonials Grid Column */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-10 bg-white border border-brand-blue/5 rounded-xl shadow-editorial group hover:border-brand-blue/20 transition-all overflow-hidden"
                >
                  <Heart 
                    className="absolute -top-10 -right-10 text-brand-blue/5 group-hover:text-brand-blue/10 transition-colors" 
                    size={160} 
                    strokeWidth={0.5} 
                  />
                  
                  <div className="relative z-10">
                    <p className="text-base md:text-lg font-serif italic text-charcoal/70 leading-relaxed mb-8">
                      "{t.quote}"
                    </p>
                    
                    <div className="pt-6 border-t border-brand-blue/10">
                      <h4 className="text-xl font-serif text-brand-blue">{t.name}</h4>
                      <p className="text-[10px] uppercase tracking-[3px] text-charcoal/40 font-bold mt-2">
                        {t.event}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
