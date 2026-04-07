import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a10] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#7c6cf0] to-[#22d3ee] flex items-center justify-center text-white font-bold text-xl">
                Z
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Zyfex Lab</span>
            </div>
            <p className="text-[#9191a8] text-sm leading-relaxed mb-6">
              AI-Powered Growth for Local Businesses.
            </p>
            <p className="text-white font-medium text-sm">
              hello@zyfexlab.com
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {['Website Design', 'AI Automation', 'Lead Capture', 'Appointment Booking'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      if (window.location.pathname !== '/') {
                        window.location.href = '/#services';
                      } else {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-[#9191a8] hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-[#9191a8] hover:text-white transition-colors text-sm cursor-pointer">About Us</Link>
              </li>
              {['Process', 'Results', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      if (window.location.pathname !== '/') {
                        window.location.href = `/#${link.toLowerCase()}`;
                      } else {
                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-[#9191a8] hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@zyfexlab.com" className="text-[#9191a8] hover:text-white transition-colors text-sm">hello@zyfexlab.com</a>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#7c6cf0] font-medium hover:text-[#9d8fff] transition-colors text-sm"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5a5a72]">
          <div>© 2026 Zyfex Lab. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}