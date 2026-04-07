import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "WEB DESIGN", "LEAD CAPTURE", "AI AUTOMATION", "CHATBOTS", 
    "FOLLOW-UP SEQUENCES", "APPOINTMENT BOOKING", "CRM SETUP", "LOCAL SEO"
  ];

  return (
    <div className="w-full bg-[#0a0a10] border-y border-white/5 py-4 overflow-hidden flex relative">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {items.map((item) => (
              <span key={item} className="font-mono text-xs tracking-[0.2em] text-[#5a5a72] font-semibold uppercase flex items-center gap-12">
                {item}
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7c6cf0] to-[#22d3ee]"></span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}