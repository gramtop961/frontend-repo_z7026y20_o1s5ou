import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

function CTA({ t, theme }) {
  const isDark = theme === 'dark';
  return (
    <section id="cta" className={isDark ? 'relative overflow-hidden bg-[conic-gradient(at_20%_10%,#0891b2_0deg,#1e40af_120deg,#0ea5e9_240deg,#0891b2_360deg)] py-20' : 'relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-20'}>
      {/* animated beams */}
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <motion.div
          className={isDark ? 'absolute -left-32 top-0 h-[140%] w-32 rotate-12 bg-gradient-to-b from-white/40 to-transparent blur-2xl' : 'absolute -left-32 top-0 h-[140%] w-32 rotate-12 bg-gradient-to-b from-cyan-200/40 to-transparent blur-2xl'}
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
          className={isDark ? 'rounded-3xl bg-white/10 p-8 backdrop-blur shadow-xl ring-1 ring-white/20' : 'rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200'}
        >
          <div className={isDark ? 'mx-auto max-w-3xl text-center text-white' : 'mx-auto max-w-3xl text-center text-slate-900'}>
            <h3 className={isDark ? 'text-3xl font-bold' : 'text-3xl font-bold'}>{t.cta.title}</h3>
            <p className={isDark ? 'mt-2 text-white/90' : 'mt-2 text-slate-700'}>{t.cta.desc}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#" className={isDark ? 'rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-white/90' : 'rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500'}>{t.cta.primary}</a>
              <a href="#" className={isDark ? 'rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20' : 'rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50'}>{t.cta.secondary}</a>
            </div>
            <div className={isDark ? 'mt-6 flex flex-wrap items-center justify-center gap-4 text-left text-white/90' : 'mt-6 flex flex-wrap items-center justify-center gap-4 text-left text-slate-700'}>
              {t.cta.benefits.map((item) => (
                <motion.div key={item} className="flex items-center gap-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                  <CheckCircle2 className={isDark ? 'h-4 w-4 text-cyan-200' : 'h-4 w-4 text-cyan-600'} />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* shimmer dots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className={isDark ? 'absolute bottom-8 left-10 h-2 w-2 animate-ping rounded-full bg-cyan-300/60' : 'absolute bottom-8 left-10 h-2 w-2 animate-ping rounded-full bg-cyan-500/60'} />
        <div className={isDark ? 'absolute right-16 top-12 h-2 w-2 animate-ping rounded-full bg-blue-200/60' : 'absolute right-16 top-12 h-2 w-2 animate-ping rounded-full bg-blue-400/60'} />
      </div>
    </section>
  );
}

export default CTA;
