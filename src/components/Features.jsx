import { Rocket, Shield, Users, BarChart3, Zap, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

function Features({ t, theme }) {
  const isDark = theme === 'dark';
  const items = t.features.items;
  const icons = [Rocket, Users, BarChart3, Shield, Zap, LineChart];

  return (
    <section id="features" className={isDark ? 'relative overflow-hidden bg-gradient-to-b from-black to-slate-950 py-24 text-white' : 'relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 text-slate-900'}>
      {/* Animated wireframe grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -inset-[200%] bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] animate-[gridmove_24s_linear_infinite]" />
      </div>

      <style>{`@keyframes gridmove { from { transform: translateY(0); } to { transform: translateY(-36px); } }`}</style>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className={isDark ? 'text-3xl font-bold sm:text-4xl text-white' : 'text-3xl font-bold sm:text-4xl text-slate-900'}>{t.features.title}</h2>
          <p className={isDark ? 'mt-3 text-white/70' : 'mt-3 text-slate-600'}>{t.features.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={isDark ? 'group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]' : 'group relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50'}
              >
                <div className={isDark ? 'mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 ring-1 ring-inset ring-white/10' : 'mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 text-cyan-700 ring-1 ring-inset ring-slate-200'}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={isDark ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'}>{f.title}</h3>
                <p className={isDark ? 'mt-2 text-sm text-white/70' : 'mt-2 text-sm text-slate-600'}>{f.desc}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-cyan-400/30 transition group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-x-0 -top-px h-20 translate-y-[-60%] bg-gradient-to-b from-white/40 to-transparent opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating cyber orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}

export default Features;
