import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: "50+",
    num: 50,
    suffix: "+",
    label: "Local Businesses Helped",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: "20+",
    num: 20,
    suffix: "+",
    label: "Hours Saved Per Week (avg)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: "3×",
    num: 3,
    suffix: "×",
    label: "Average Lead Increase",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    value: "99.9%",
    num: 99.9,
    suffix: "%",
    label: "System Uptime",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    value: "48h",
    num: 48,
    suffix: "h",
    label: "Average Response To Setup",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    value: "4.9/5",
    num: 4.9,
    suffix: "/5",
    label: "Client Satisfaction Score",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  const display = target % 1 !== 0 ? count.toFixed(1) : count;

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="results" ref={sectionRef} className="py-28 relative overflow-hidden bg-[#050508]">
      {/* Background ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full bg-[#7c6cf0]/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-[#22d3ee]/[0.05] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-[3px] text-[#7c6cf0] mb-4 font-medium">By the numbers</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Results That Actually Move the Needle
          </h2>
          <p className="text-[#9191a8] text-base md:text-lg leading-relaxed">
            We measure success in revenue, not just rankings.
          </p>
        </motion.div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px max-w-xs mx-auto mb-14 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, #7c6cf0, #22d3ee, #7c6cf0, transparent)" }}
        />

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-[18px] p-[1px] cursor-default"
              style={{
                background: "linear-gradient(135deg, rgba(124,108,240,0.25) 0%, rgba(34,211,238,0.12) 50%, rgba(124,108,240,0.08) 100%)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: "0 0 40px rgba(124,108,240,0.18), 0 0 80px rgba(34,211,238,0.08)" }}
              />

              {/* Card inner */}
              <div className="relative rounded-[17px] bg-[#0e0e16]/90 backdrop-blur-sm px-7 py-8 flex flex-col items-center text-center gap-4 h-full">

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    background: "rgba(124,108,240,0.08)",
                    border: "1px solid rgba(124,108,240,0.2)",
                    color: "#9d8fff",
                  }}
                >
                  {m.icon}
                </div>

                {/* Number */}
                <div
                  className="text-5xl md:text-6xl font-black tracking-tight leading-none tabular-nums"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #c4bcff 60%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <CountUp target={m.num} suffix={m.suffix} />
                </div>

                {/* Label */}
                <p className="text-[13.5px] text-[#9191a8] font-medium leading-snug max-w-[160px]">
                  {m.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
