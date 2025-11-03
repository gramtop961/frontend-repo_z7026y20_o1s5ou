import { Rocket, Shield, Users, BarChart3, Zap, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Velocity Insights',
    desc: 'Track execution speed across teams with real‑time SLA drift and cycle time trends.'
  },
  {
    icon: Users,
    title: 'People Signals',
    desc: 'Engagement, recognition, and burnout risk in one place powered by smart analytics.'
  },
  {
    icon: BarChart3,
    title: 'Goal Alignment',
    desc: 'OKRs and KPIs tied to outcomes, with automatic progress rollups to org levels.'
  },
  {
    icon: Shield,
    title: 'Compliance & Privacy',
    desc: 'Enterprise‑grade security with granular roles and regional data residency.'
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Nudge reviews, schedule 1:1s, and trigger workflows from performance thresholds.'
  },
  {
    icon: LineChart,
    title: 'Predictive Models',
    desc: 'Forecast attrition and productivity shifts before they happen.'
  }
];

function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-b from-black to-slate-950 py-24 text-white">
      {/* Animated wireframe grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -inset-[200%] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] animate-[gridmove_24s_linear_infinite]" />
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
          <h2 className="text-3xl font-bold sm:text-4xl">Designed for modern HR & people leaders</h2>
          <p className="mt-3 text-white/70">Everything you need to monitor, coach, and scale performance—without the spreadsheet sprawl.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 ring-1 ring-inset ring-white/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-cyan-400/30 transition group-hover:opacity-100" />
              {/* Hover shine */}
              <span className="pointer-events-none absolute inset-x-0 -top-px h-20 translate-y-[-60%] bg-gradient-to-b from-white/40 to-transparent opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
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
