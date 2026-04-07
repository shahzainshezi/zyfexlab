import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-dot-pattern opacity-30 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7c6cf0]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#22d3ee]/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="text-[#22d3ee] font-mono text-xs font-medium tracking-wider">● AI-POWERED AUTOMATION AGENCY</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
              We Build Systems <br />
              <span className="text-gradient">That Sell For You</span>
            </h1>

            <p className="text-lg md:text-xl text-[#9191a8] max-w-xl leading-relaxed">
              We design high-converting websites and plug in AI automation that captures leads, follows up automatically, and books more clients — so you can focus on what you do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#7c6cf0] hover:bg-[#9d8fff] text-white font-medium rounded-full px-8 py-6 text-lg transition-all duration-300 shadow-[0_0_20px_rgba(124,108,240,0.3)] hover:shadow-[0_0_30px_rgba(124,108,240,0.5)]"
              >
                Book Your Free Audit →
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white font-medium rounded-full px-8 py-6 text-lg backdrop-blur-sm">
                ▶ See How It Works
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-8 mt-4 border-t border-white/5 text-sm font-medium text-[#9191a8]">
              <div className="flex items-center gap-2">
                <span className="text-white">50+</span> local businesses
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-white">4.9/5</span> avg. rating
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-2">
                clients saved <span className="text-[#34d399]">20+ hrs/wk</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            <div className="relative rounded-2xl bg-[#111119] border border-white/10 shadow-2xl overflow-hidden p-6 font-mono text-sm leading-relaxed">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#f87171]"></div>
                <div className="w-3 h-3 rounded-full bg-[#fbbf24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#34d399]"></div>
                <div className="ml-4 text-[#5a5a72] text-xs">zyfex-terminal ~ bash</div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-2">
                <div className="text-[#9191a8]">
                  <span className="text-[#7c6cf0]">{'>'}</span> zyfex.init()
                </div>
                <div className="pl-4 space-y-1">
                  <div><span className="text-[#5a5a72]">status:</span> <span className="text-[#34d399]">"active"</span></div>
                  <div><span className="text-[#5a5a72]">leads_today:</span> <span className="text-[#22d3ee]">24</span></div>
                  <div><span className="text-[#5a5a72]">emails_sent:</span> <span className="text-[#9d8fff]">156</span></div>
                  <div><span className="text-[#5a5a72]">appointments:</span> <span className="text-[#fbbf24]">8</span></div>
                  <div><span className="text-[#5a5a72]">revenue_delta:</span> <span className="text-[#34d399]">"+$4,200"</span></div>
                  <div><span className="text-[#5a5a72]">uptime:</span> <span className="text-[#eeeef2]">"99.9%"</span></div>
                </div>
                <div className="animate-pulse text-[#7c6cf0] pt-2">_</div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-2 md:-right-6 bg-[#0a0a10] border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-xl flex items-center gap-2 z-20"
            >
              <span className="text-[#34d399] text-xs font-bold tracking-wider">✓ 3 New Leads</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-4 md:-left-12 bg-[#0a0a10] border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-xl flex items-center gap-2 z-20 hidden sm:flex"
            >
              <span className="text-[#7c6cf0] text-xs font-bold tracking-wider">⚡ AI Reply Sent</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-6 right-4 md:right-12 bg-[#0a0a10] border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-xl flex items-center gap-2 z-20"
            >
              <span className="text-[#22d3ee] text-xs font-bold tracking-wider">📅 Appt Booked</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}