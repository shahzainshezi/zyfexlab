import { motion } from "framer-motion";
import { Monitor, Bot, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-6 h-6 text-[#7c6cf0]" />,
      title: "High-Converting Websites",
      description: "We don't just build websites — we engineer lead machines. Every element is designed to convert visitors into paying clients.",
      tag: "CONVERSION-FOCUSED",
      tagColor: "text-[#7c6cf0] border-[#7c6cf0]/20 bg-[#7c6cf0]/10",
      delay: 0.1
    },
    {
      icon: <Bot className="w-6 h-6 text-[#22d3ee]" />,
      title: "AI-Powered Follow-Up",
      description: "Never lose a lead again. Our AI follows up instantly via email, SMS, and chat — 24/7, no human needed.",
      tag: "FULLY AUTOMATED",
      tagColor: "text-[#22d3ee] border-[#22d3ee]/20 bg-[#22d3ee]/10",
      delay: 0.2
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#34d399]" />,
      title: "Appointment Automation",
      description: "Let clients book themselves. We connect your calendar, send reminders, and fill your schedule on autopilot.",
      tag: "ZERO FRICTION",
      tagColor: "text-[#34d399] border-[#34d399]/20 bg-[#34d399]/10",
      delay: 0.3
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-sm text-[#7c6cf0] mb-4 tracking-wider">WHAT WE BUILD</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">Everything You Need to Grow Faster</h2>
          <p className="text-[#9191a8] text-lg">We combine beautiful design with smart automation to create a business engine that works 24/7.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-[#111119] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[#9191a8] mb-8 leading-relaxed">{service.description}</p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono font-medium ${service.tagColor}`}>
                {service.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}