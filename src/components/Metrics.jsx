function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/90 backdrop-blur">
      <div className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-4xl font-extrabold text-transparent">
        {value}
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}

function Metrics() {
  return (
    <section id="metrics" className="relative bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Outcomes you can measure</h2>
          <p className="mt-2 text-white/70">Teams using KIPIAI.ID see meaningful improvements within the first quarter.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat value="-32%" label="Time to Review" />
          <Stat value="+21%" label="Goal Completion" />
          <Stat value="-18%" label="Attrition Risk" />
          <Stat value="+27%" label="Manager NPS" />
        </div>
      </div>
    </section>
  );
}

export default Metrics;
