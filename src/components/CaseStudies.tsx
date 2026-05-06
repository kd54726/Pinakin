import { motion } from "motion/react";

const events = [
  {
    title: "Celestial Sands",
    venue: "Amanbagh, Rajasthan",
    guestCount: "250 Guests",
    theme: "Moonlight Heritage",
    description: "An ethereal destination wedding that utilized the natural beauty of the Aravalli hills, enhanced by mirror-work decor and 10,000 floating candles.",
    img: "https://images.unsplash.com/photo-1541250848049-b4f71413cc30?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Avant-Garde Gala",
    venue: "The St. Regis, Mumbai",
    guestCount: "800 Guests",
    theme: "Crystal Futurism",
    description: "A celebrity-filled corporate gala featuring immersive 3D projection mapping and a bespoke stage design inspired by architectural flow.",
    img: "https://images.unsplash.com/photo-1472653372322-699d61f1e64e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <section id="events" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-brand-blue uppercase tracking-[0.4em] text-xs font-bold mb-6 block underline decoration-brand-blue/30 underline-offset-8">Case Studies</span>
          <h2 className="text-6xl md:text-8xl font-serif text-charcoal">The Archive of <br /> <span className="italic">Excellence</span></h2>
        </div>

        <div className="space-y-32">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Event Image */}
              <div className="flex-1 w-full relative">
                <div className="overflow-hidden rounded-2xl aspect-[3/2] shadow-2xl">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-110"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-brand-blue -z-10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-brand-blue -z-10" />
              </div>

              {/* Event Content */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-brand-blue font-bold">
                  <span>{event.venue}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/30" />
                  <span>{event.guestCount}</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-serif text-charcoal mb-4 italic leading-tight">{event.title}</h3>
                <div className="w-24 h-px bg-brand-blue/30 mb-8" />
                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-bold">Theme: {event.theme}</p>
                  <p className="text-xl text-charcoal/70 font-light leading-relaxed italic">
                    {event.description}
                  </p>
                </div>
                <button className="pt-6 text-sm uppercase tracking-widest font-bold text-charcoal border-b border-charcoal/20 pb-2 hover:text-brand-blue hover:border-brand-blue transition-all">
                  Read Full Editorial
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <button className="px-12 py-5 border border-charcoal/10 rounded-full text-charcoal text-sm uppercase tracking-widest font-bold hover:bg-charcoal hover:text-white transition-all shadow-xl">
             Explore All Stories
           </button>
        </div>
      </div>
    </section>
  );
}
