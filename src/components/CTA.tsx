import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-[#050508]">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7c6cf0]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#22d3ee]/07 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Headline + supporting text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
              Ready to Stop Losing Leads{" "}
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #9d8fff 0%, #22d3ee 50%, #34d399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                and Start Closing Them?
              </span>
            </h2>

            <p className="text-lg text-[#9191a8] leading-relaxed mb-8 max-w-md">
              Book a free strategy session today. We'll audit your current setup, show you exactly where you're losing leads, and map out a custom automation plan — at no cost.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "No commitment required",
                "Free 30-min strategy call",
                "Results guaranteed or we keep working — for free",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#34d399]/15 border border-[#34d399]/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#9191a8]">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-[#5a5a72]">
              or email us at{" "}
              <a href="mailto:hello@zyfexlab.com" className="text-[#9d8fff] hover:text-white transition-colors font-medium">
                hello@zyfexlab.com
              </a>
            </p>
          </motion.div>

          {/* Right: Lead capture form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="relative rounded-2xl p-[1px]"
              style={{
                background: "linear-gradient(135deg, rgba(124,108,240,0.35) 0%, rgba(34,211,238,0.15) 50%, rgba(124,108,240,0.1) 100%)",
                boxShadow: "0 0 60px rgba(124,108,240,0.12), 0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              <div className="rounded-2xl bg-[#0e0e16]/95 backdrop-blur-xl p-6 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#34d399]/15 border border-[#34d399]/30 flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 14l5.5 5.5L22 9" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
                    <p className="text-[#9191a8] leading-relaxed">We'll reach out within 24 hours to schedule your free strategy session.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-1">Get Your Free Mockup</h3>
                      <p className="text-sm text-[#5a5a72]">Fill in the form and we'll get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-medium text-[#9191a8] mb-1.5 tracking-wide uppercase">
                          Full Name <span className="text-[#7c6cf0]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Jane Smith"
                          className="w-full bg-[#111119] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-[#3a3a52] outline-none transition-all duration-200 focus:border-[#7c6cf0]/50 focus:shadow-[0_0_0_3px_rgba(124,108,240,0.12)] hover:border-white/[0.11]"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-medium text-[#9191a8] mb-1.5 tracking-wide uppercase">
                          Email Address <span className="text-[#7c6cf0]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@yourbusiness.com"
                          className="w-full bg-[#111119] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-[#3a3a52] outline-none transition-all duration-200 focus:border-[#7c6cf0]/50 focus:shadow-[0_0_0_3px_rgba(124,108,240,0.12)] hover:border-white/[0.11]"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-medium text-[#9191a8] mb-1.5 tracking-wide uppercase">
                          Phone Number <span className="text-[#7c6cf0]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#111119] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-[#3a3a52] outline-none transition-all duration-200 focus:border-[#7c6cf0]/50 focus:shadow-[0_0_0_3px_rgba(124,108,240,0.12)] hover:border-white/[0.11]"
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-medium text-[#9191a8] mb-1.5 tracking-wide uppercase">
                          Business Name <span className="text-[#3a3a52]">(optional)</span>
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Your Business LLC"
                          className="w-full bg-[#111119] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-[#3a3a52] outline-none transition-all duration-200 focus:border-[#7c6cf0]/50 focus:shadow-[0_0_0_3px_rgba(124,108,240,0.12)] hover:border-white/[0.11]"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-medium text-[#9191a8] mb-1.5 tracking-wide uppercase">
                          Message <span className="text-[#3a3a52]">(optional)</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us about your business goals..."
                          className="w-full bg-[#111119] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-white placeholder-[#3a3a52] outline-none transition-all duration-200 focus:border-[#7c6cf0]/50 focus:shadow-[0_0_0_3px_rgba(124,108,240,0.12)] hover:border-white/[0.11] resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative overflow-hidden rounded-xl py-4 px-6 font-semibold text-white text-sm tracking-wide transition-all duration-300 mt-2"
                        style={{
                          background: "linear-gradient(135deg, #7c6cf0, #9d8fff)",
                          boxShadow: "0 0 28px rgba(124,108,240,0.35), 0 4px 16px rgba(0,0,0,0.3)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(124,108,240,0.55), 0 8px 24px rgba(0,0,0,0.35)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 28px rgba(124,108,240,0.35), 0 4px 16px rgba(0,0,0,0.3)";
                        }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Get My Free Mockup
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </motion.button>

                      <p className="text-center text-xs text-[#3a3a52] mt-3">
                        No spam, ever. We respect your privacy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
