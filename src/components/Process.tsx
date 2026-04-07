import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Strategy & Audit",
      desc: "We analyze your current setup, find gaps in your lead flow, and map out a custom growth plan — for free.",
      badge: "✓ FREE STRATEGY SESSION"
    },
    {
      num: "02",
      title: "Build & Integrate",
      desc: "We build your website and automation systems — all customized for your business. Typically done in 7-14 days.",
      badge: "✓ 7-14 DAY TURNAROUND"
    },
    {
      num: "03",
      title: "Launch & Scale",
      desc: "We launch, monitor, and continuously optimize your system. You get monthly reports and ongoing support.",
      badge: "✓ ONGOING OPTIMIZATION"
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0a0a10]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-sm text-[#7c6cf0] mb-4 tracking-wider">HOW IT WORKS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">From Audit to Automation in 3 Steps</h2>
          <p className="text-[#9191a8] text-lg">No long onboarding. No tech jargon. We handle everything so you can focus on running your business.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#111119] border border-white/10 flex items-center justify-center font-mono text-2xl text-white font-bold mb-8 group-hover:border-[#7c6cf0]/50 group-hover:text-[#7c6cf0] transition-colors relative">
                  {step.num}
                  <div className="absolute inset-0 rounded-full bg-[#7c6cf0]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[#9191a8] mb-6 leading-relaxed">{step.desc}</p>
                
                <div className="inline-flex text-[#34d399] font-mono text-xs font-bold tracking-wider px-4 py-2 bg-[#34d399]/10 rounded-full">
                  {step.badge}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}