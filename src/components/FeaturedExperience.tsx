import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FeaturedExperience() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          {/* Main Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative aspect-[4/5] w-full"
          >
            <div className="absolute inset-0 bg-brand-blue/10 rounded-2xl transform rotate-3 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Destination Wedding" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Vision Quote Box */}
            <div className="absolute bottom-[-20px] left-0 right-0 mx-auto md:absolute md:-bottom-12 md:-right-8 md:left-auto md:mx-0 bg-white p-6 md:p-14 text-charcoal max-w-[90%] md:max-w-sm rounded-xl shadow-editorial border-editorial transform translate-y-4 md:translate-y-0">
              <span className="text-brand-blue/20 text-6xl font-serif absolute top-6 left-8">"</span>
              <p className="text-xl font-serif italic leading-relaxed text-charcoal mb-6 relative z-10">
                Our vision is to turn transient moments into permanent emotional landmarks that define your legacy.
              </p>
              <div className="w-12 h-px bg-brand-blue/30" />
            </div>
          </motion.div>

          {/* Editorial Content */}
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif mb-8 text-charcoal leading-[1.05] tracking-[-1px]">
                Crafting <br /> <span className="text-slate-blue italic">Emotional</span> Landmarks
              </h2>
              <p className="text-lg text-charcoal/70 font-sans font-light max-w-xl leading-relaxed mb-8">
                Pinakin Event & Entertainment in Dwarka, New Delhi is one of the most trusted Event Management Company. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of New Delhi. Over the course of its journey, this business has established a firm foothold in it’s industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 border-t border-brand-blue/10 pt-10">
              <div>
                <h4 className="text-brand-blue font-serif text-2xl mb-2 italic">Aesthetic Precision</h4>
                <p className="text-sm text-charcoal/60 font-light">Every fabric, every light, and every floral arrangement is chosen with an editorial eye.</p>
              </div>
              <div>
                <h4 className="text-brand-blue font-serif text-2xl mb-2 italic">Seamless Luxury</h4>
                <p className="text-sm text-charcoal/60 font-light">From first meeting to the final fireworks, our execution is quiet and perfect.</p>
              </div>
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="inline-block"
            >
              <a href="#" className="btn-editorial !px-10 !py-5 flex items-center gap-4">
                The Experience Portfolio <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
