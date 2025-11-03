import { motion } from 'framer-motion';

function Stat({ value, label, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/90 backdrop-blur"
    >
      <div className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-4xl font-extrabold text-transparent">
        {value}
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </motion.div>
  );
}

function Metrics() {
  return (
    <section id="metrics" className="relative overflow-hidden bg-slate-950 py-20">
      {/* orbiting rings */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-cyan-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full border border-indigo-400/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Outcomes you can measure</h2>
          <p className="mt-2 text-white/70">Teams using KIPIAI.ID see meaningful improvements within the first quarter.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat i={0} value="-32%" label="Time to Review" />
          <Stat i={1} value="+21%" label="Goal Completion" />
          <Stat i={2} value="-18%" label="Attrition Risk" />
          <Stat i={3} value="+27%" label="Manager NPS" />
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-12 top-16 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        live sync
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-10 bottom-14 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        predictive score
      </motion.div>
    </section>
  );
}

export default Metrics;
