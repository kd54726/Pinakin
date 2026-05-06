import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Luxury Weddings",
    desc: "Bespoke celebrations designed with cinematic flair and emotional resonance.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    color: "bg-mist-blue"
  },
  {
    title: "Corporate Events",
    desc: "High-level brand experiences that combine professionalism with prestige.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop",
    color: "bg-ivory"
  },
  {
    title: "Artist Management",
    desc: "Exclusive access to global superstars and world-class entertainers.",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1170&auto=format&fit=crop",
    color: "bg-warm-white"
  },
  {
    title: "Live Music & Dj",
    desc: "Being one of the distinguished enterprises, we are immersed in offering highly reliable Live Music & Dj Services to meet the detailed demands of our customers.",
    img: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop",
    color: "bg-warm-white"
  },
  {
    title: "Birthday Party",
    desc: "Our firm has made unbelievable breakthrough in the providing Birthday Party Services. Attributed for its flexibility and reliability, these services are broadly demanded. ",
    img: "https://images.unsplash.com/photo-1482731910308-31e96e5d1d28?q=80&w=1170&auto=format&fit=crop",
    color: "bg-mist-blue"
  },
  {
    title: "Kitty Party",
    desc: "Leveraging on our huge industry understanding and knowledge, we are providing Kitty Party Services that is broadly used for several sectors. ",
    img: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?q=80&w=1170&auto=format&fit=crop",
    color: "bg-ivory"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-editorial-tag mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal leading-[1.05] tracking-[-1px]">
              Bespoke <span className="italic text-slate-blue">Service</span> <br /> Architectures
            </h2>
          </div>
          <p className="text-charcoal/60 font-light max-w-sm mb-2">
            Every celebration is a unique narrative. We provide the structural and creative foundation to bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group h-full"
            >
              {/* Image Container with rounded segments */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-8 shadow-2xl">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Area */}
              <div className="space-y-4 px-2">
                <h3 className="text-3xl font-serif text-charcoal tracking-wide flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="text-brand-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" size={24} />
                </h3>
                <div className="w-12 h-px bg-brand-blue/30" />
                <p className="text-base text-charcoal/60 font-sans font-light leading-relaxed max-w-sm">
                  {service.desc}
                </p>
                <div className="pt-4">
                  <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold opacity-70 group-hover:opacity-100 transition-all duration-500">
                    Detailed Inquiry →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
