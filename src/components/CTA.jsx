import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[conic-gradient(at_20%_10%,#0891b2_0deg,#1e40af_120deg,#0ea5e9_240deg,#0891b2_360deg)] py-20">
      {/* animated beams */}
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <motion.div
          className="absolute -left-32 top-0 h-[140%] w-32 rotate-12 bg-gradient-to-b from-white/40 to-transparent blur-2xl"
          animate={{ x: ['0%', '130%', '0%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/10 p-8 backdrop-blur shadow-xl ring-1 ring-white/20"
        >
          <div className="mx-auto max-w-3xl text-center text-white">
            <h3 className="text-3xl font-bold">Bring clarity to performance</h3>
            <p className="mt-2 text-white/90">Start your 14‑day trial. Full features. No credit card.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-white/90">Create Free Account</a>
              <a href="#" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">Book a Demo</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-left text-white/90">
              {['Unlimited dashboards', 'SSO & Role‑based access', 'HRIS integrations'].map((item) => (
                <motion.div key={item} className="flex items-center gap-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* shimmer dots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute bottom-8 left-10 h-2 w-2 animate-ping rounded-full bg-cyan-300/60" />
        <div className="absolute right-16 top-12 h-2 w-2 animate-ping rounded-full bg-blue-200/60" />
      </div>
    </section>
  );
}

export default CTA;
