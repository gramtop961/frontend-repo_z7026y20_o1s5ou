import { Rocket, Shield, Users, BarChart3, Zap, LineChart } from 'lucide-react';

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
    <section id="features" className="relative bg-gradient-to-b from-black to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Designed for modern HR & people leaders</h2>
          <p className="mt-3 text-white/70">Everything you need to monitor, coach, and scale performance—without the spreadsheet sprawl.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 ring-1 ring-inset ring-white/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-cyan-400/30 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
