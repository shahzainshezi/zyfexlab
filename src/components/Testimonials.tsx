import { motion, useAnimation } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, Apex Marketing",
    review: "Zyfex Lab transformed our lead generation process from barely any leads to consistently getting 25+ per week. The AI follow-up system is a literal game changer for our sales team.",
    stats: "25+ leads/wk",
    avgRating: 5
  },
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Real Estate",
    review: "I no longer have to worry about missing client calls or leads from my website. The AI responds instantly and books appointments while I sleep. Their automation is worth every penny.",
    stats: "85% auto-booked",
    avgRating: 5
  },
  {
    name: "Michael Roberts",
    role: "Director, Peak Home Services",
    review: "The CRM setup alone saved my admin team over 15 hours of manual work every single week. Our team can now focus on high-ticket sales rather than data entry and tracking sheets.",
    stats: "15 hrs/wk saved",
    avgRating: 5
  }
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="results" className="py-24 bg-[#050508] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#7c6cf0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#22d3ee]/05 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-sm text-[#7c6cf0] mb-4 tracking-wider uppercase">CLIENT SUCCESS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">Social Proof from Businesses <br /> Like Yours</h2>
          <p className="text-[#9191a8] text-lg">Real results from local firms who automated their growth engine.</p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div 
        className="flex overflow-hidden relative py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          className="flex gap-8 whitespace-nowrap px-4"
          animate={{ x: isPaused ? undefined : [0, -1500] }}
          transition={{ 
            x: {
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }
          }}
        >
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111119] border border-white/5 rounded-3xl p-8 w-[400px] flex-shrink-0 relative group hover:border-[#7c6cf0]/30 transition-all duration-300 shadow-xl"
            >
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-[#7c6cf0]/20 transition-colors duration-300">
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.avgRating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 whitespace-normal italic">
                "{t.review}"
              </p>

              <div className="pt-6 border-t border-white/5 mt-auto">
                <div className="mb-4">
                  <h4 className="text-white font-bold text-base">{t.name}</h4>
                  <p className="text-[#5a5a72] text-xs font-medium">{t.role}</p>
                </div>
                
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#34d399]/10 border border-[#34d399]/20">
                  <span className="text-[#34d399] text-[10px] font-bold font-mono tracking-wider uppercase">
                    Result: {t.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Local Business Trust Indicator */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-white font-bold text-xl tracking-tighter uppercase">TRUSTED BY 50+ LOCAL FIRMS</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></div>
            <span className="text-sm font-medium text-white">4.9/5 Average Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
