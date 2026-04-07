import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Cpu, Zap, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-[#7c6cf0]/30 selection:text-white font-sans overflow-x-hidden">
      <Nav />

      <main className="pt-32">
        {/* About Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c6cf0]/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="text-[#22d3ee] font-mono text-xs font-medium tracking-wider uppercase">● THE NEURAL CORE OF GROWTH</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8">
                Building the <span className="text-gradient">Future</span> of <br />
                Local Commerce.
              </h1>
              <p className="text-xl md:text-2xl text-[#9191a8] leading-relaxed max-w-2xl">
                We didn't just build an agency. We built a system. Zyfex Lab exists to bridge the gap between local craftsmanship and modern AI intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 border-y border-white/5 bg-[#0a0a10]/50 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Our Mission</h2>
                <div className="space-y-6 text-[#9191a8] text-lg leading-relaxed">
                  <p>
                    For decades, local businesses have been the backbone of our communities. But in the age of AI, many are being left behind by complex tech stacks and manual processes that drain time and revenue.
                  </p>
                  <p>
                    Zyfex Lab was founded to fix this. We've spent thousands of hours engineering the <span className="text-white font-semibold">Neural Core</span> — a seamless integration of high-performing web design and intelligent automation that works 24/7.
                  </p>
                  <p>
                    Our mission is simple: To empower 1,000 local businesses with systems that sell, follow up, and book clients automatically, so they can focus on their craft.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#111119] to-[#050508] border border-white/10 p-1 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#7c6cf0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center p-12 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-[#7c6cf0]/10 flex items-center justify-center mx-auto mb-8 border border-[#7c6cf0]/20">
                      <Cpu className="text-[#7c6cf0]" size={40} />
                    </div>
                    <div className="text-5xl font-extrabold mb-2">50+</div>
                    <div className="text-[#5a5a72] font-mono tracking-widest uppercase text-sm">Businesses Automated</div>
                  </div>
                  
                  {/* Decorative lines */}
                  <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Zyfex Way */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Zyfex Principles</h2>
              <p className="text-[#9191a8] max-w-2xl mx-auto">Our work is guided by three core pillars that ensure every system we build is a conversion powerhouse.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap size={28} />,
                  title: "Instant Response",
                  desc: "In modern sales, speed is everything. We build systems that respond in seconds, not hours.",
                  color: "text-[#22d3ee] bg-[#22d3ee]/10"
                },
                {
                  icon: <Target size={28} />,
                  title: "Precision Targeting",
                  desc: "We don't spray and pray. Every automation is calibrated to capture high-intent leads.",
                  color: "text-[#7c6cf0] bg-[#7c6cf0]/10"
                },
                {
                  icon: <Rocket size={28} />,
                  title: "Scale Without Friction",
                  desc: "Scaling should feel effortless. Our systems grow with you, handling 10 leads or 1000 seamlessly.",
                  color: "text-[#34d399] bg-[#34d399]/10"
                }
              ].map((pill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-8 rounded-3xl bg-[#111119] border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5 ${pill.color}`}>
                    {pill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{pill.title}</h3>
                  <p className="text-[#9191a8] leading-relaxed">{pill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <div className="p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-[#7c6cf0]/20 to-[#22d3ee]/10 border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c6cf0]/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Automate Your Success?</h2>
              <p className="text-[#eeeef2]/80 text-lg mb-10 max-w-xl mx-auto">
                Join the 50+ local businesses that have stopped working for their systems and started letting their systems work for them.
              </p>
              
              <button 
                onClick={() => window.location.href = '/#cta'}
                className="bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Get Your Free Audit →
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
