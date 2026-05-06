import { motion } from "motion/react";
import { CheckCircle2, Heart, Zap, Sparkles, ShieldCheck, GlassWater } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Cinematic Decor Storytelling",
    desc: "We don't just decorate; we build environments that tell your story through light, texture, and space."
  },
  {
    icon: ShieldCheck,
    title: "Seamless Vendor Management",
    desc: "A singular point of contact for a 100-vendor machinery. You enjoy, we orchestrate the complexity."
  },
  {
    icon: Heart,
    title: "Stress-Free Coordination",
    desc: "Emotional wellbeing of our clients is our top KPI. Our process ensures you are always at ease."
  },
  {
    icon: GlassWater,
    title: "Premium Hospitality",
    desc: "Treated like royalty, your guests will experience a level of care that sets a new standard for luxury."
  },
  {
    icon: Zap,
    title: "Seamless Execution",
    desc: "Precision timing and backstage mastery that makes the impossible feel effortless to your audience."
  },
  {
    icon: CheckCircle2,
    title: "Luxury Guest Experience",
    desc: "Every touchpoint, from invitation to departure, is infused with personalized luxury and warmth."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <span className="text-editorial-tag mb-6 block mx-auto">The Pinakin Distinction</span>
        <h2 className="text-5xl md:text-7xl font-serif leading-tight">
          Where <span className="italic text-brand-blue">Elegance</span> Meets Precision
        </h2>
        <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto mt-8">
          Beyond planning, we offer a sanctuary of creative vision and logistical mastery, ensuring your most important moments are preserved in absolute perfection.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group scale-100 hover:scale-105"
            >
              <div className="mb-6 text-brand-blue group-hover:text-white transition-colors">
                <reason.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-3 tracking-wide">{reason.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
