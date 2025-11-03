import { motion } from 'framer-motion';

function Stat({ value, label, i, theme }) {
  const isDark = theme === 'dark';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={isDark ? 'rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/90 backdrop-blur' : 'rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-900'}
    >
      <div className={isDark ? 'bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-4xl font-extrabold text-transparent' : 'text-4xl font-extrabold text-slate-900'}>
        {value}
      </div>
      <div className={isDark ? 'mt-1 text-sm text-white/70' : 'mt-1 text-sm text-slate-600'}>{label}</div>
    </motion.div>
  );
}

function Metrics({ t, theme }) {
  const isDark = theme === 'dark';
  return (
    <section id="metrics" className={isDark ? 'relative overflow-hidden bg-slate-950 py-20' : 'relative overflow-hidden bg-slate-50 py-20'}>
      {/* orbiting rings */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className={isDark ? 'absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-cyan-400/20' : 'absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-cyan-700/10'}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className={isDark ? 'absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full border border-indigo-400/10' : 'absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full border border-indigo-700/10'}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className={isDark ? 'text-2xl font-bold text-white sm:text-3xl' : 'text-2xl font-bold text-slate-900 sm:text-3xl'}>{t.metrics.title}</h2>
          <p className={isDark ? 'mt-2 text-white/70' : 'mt-2 text-slate-600'}>{t.metrics.desc}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.metrics.stats.map((s, idx) => (
            <Stat key={s.label} i={idx} value={s.value} label={s.label} theme={theme} />
          ))}
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        aria-hidden
        className={isDark ? 'pointer-events-none absolute right-12 top-16 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur' : 'pointer-events-none absolute right-12 top-16 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600'}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {t.metrics.chips.live}
      </motion.div>
      <motion.div
        aria-hidden
        className={isDark ? 'pointer-events-none absolute left-10 bottom-14 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur' : 'pointer-events-none absolute left-10 bottom-14 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600'}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {t.metrics.chips.predictive}
      </motion.div>
    </section>
  );
}

export default Metrics;
