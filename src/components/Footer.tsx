import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <a href="/" className="logo text-brand-blue font-serif text-3xl font-bold tracking-[2px]">
              PINAKIN
            </a>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Architecting luxury celebrations that redefine the boundaries of imagination and premium hospitality since 2010.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[3px] font-bold mb-10 text-white/40">Quick Links</h4>
            <ul className="space-y-4">
              {["Portfolio", "Services", "Experiences", "Our Legacy", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-brand-blue transition-colors font-light text-sm tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[3px] font-bold mb-10 text-white/40">Our Services</h4>
            <ul className="space-y-4">
              {["Event Management", "Wedding Planner", "Live Music & Dj", "Dinner & Drinks", "Birthday Party", "Kitty Party"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 hover:text-brand-blue transition-colors font-light text-sm tracking-wide">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-white/40">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-blue shrink-0" size={18} />
                <span className="text-white/70 text-sm font-light">405 Premiere House, Near Hyatt Regency, Ashram Road, Ahmedabad, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-brand-blue shrink-0" size={18} />
                <span className="text-white/70 text-sm font-light">+91 98250 12345</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-brand-blue shrink-0" size={18} />
                <span className="text-white/70 text-sm font-light">concierge@pinakin.events</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-medium">
            © 2026 Pinakin Event & Entertainment. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
