import { motion } from "framer-motion";
import { Zap, Mail, MessageSquare, Star, LayoutDashboard, PhoneCall } from "lucide-react";

export default function Automation() {
  const cards = [
    {
      icon: <Zap className="w-5 h-5 text-[#22d3ee]" />,
      title: "Instant Lead Response",
      desc: "Respond to every new lead in under 60 seconds — automatically.",
      stat: "⚡ Avg. Response: 42 seconds",
      color: "bg-[#22d3ee]/10 text-[#22d3ee]"
    },
    {
      icon: <Mail className="w-5 h-5 text-[#7c6cf0]" />,
      title: "Smart Email Sequences",
      desc: "Nurture leads with personalized email flows that feel human, not robotic.",
      stat: "📈 42% avg. open rate",
      color: "bg-[#7c6cf0]/10 text-[#7c6cf0]"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#34d399]" />,
      title: "SMS + Chat Follow-Up",
      desc: "Reach leads where they are — text and chat reminders that actually get read.",
      stat: "💬 98% SMS open rate",
      color: "bg-[#34d399]/10 text-[#34d399]"
    },
    {
      icon: <Star className="w-5 h-5 text-[#fbbf24]" />,
      title: "Review Generation",
      desc: "Automatically request and collect 5-star reviews on Google and Facebook.",
      stat: "⭐ 3.2x more reviews",
      color: "bg-[#fbbf24]/10 text-[#fbbf24]"
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-[#f87171]" />,
      title: "CRM & Pipeline",
      desc: "See every lead, deal, and conversation in one clean dashboard — no spreadsheets.",
      stat: "📊 Full visibility",
      color: "bg-[#f87171]/10 text-[#f87171]"
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-[#22d3ee]" />,
      title: "Missed Call Text-Back",
      desc: "Never lose a lead from a missed call. We auto-text them back in seconds.",
      stat: "📞 68% callback rate",
      color: "bg-[#22d3ee]/10 text-[#22d3ee]"
    }
  ];

  return (
    <section id="automation" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-sm text-[#7c6cf0] mb-4 tracking-wider">AUTOMATION SUITE</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">Your Business, Running 24/7</h2>
          <p className="text-[#9191a8] text-lg">A complete ecosystem of AI-powered tools that work together to capture, nurture, and close more leads.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-[#111119] rounded-xl p-6 border border-white/5 hover:bg-[#17171f] hover:border-white/10 transition-all duration-300 flex flex-col"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-[#9191a8] text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
              
              <div className="pt-4 border-t border-white/5 mt-auto text-sm font-mono font-medium text-white/80">
                {card.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}