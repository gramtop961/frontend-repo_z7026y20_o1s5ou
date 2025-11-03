import Spline from '@splinetool/react-spline';

function Hero({ t, theme }) {
  const isDark = theme === 'dark';
  return (
    <section className={isDark ? 'relative min-h-[92vh] w-full overflow-hidden bg-black text-white' : 'relative min-h-[92vh] w-full overflow-hidden bg-white text-slate-900'}>
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block the scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className={isDark ? 'pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90' : 'pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90'} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col items-center justify-between px-6 py-8">
        {/* Top nav */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px]">
              <div className={isDark ? 'flex h-full w-full items-center justify-center rounded-[10px] bg-black text-cyan-300 font-bold' : 'flex h-full w-full items-center justify-center rounded-[10px] bg-white text-cyan-700 font-bold'}>
                K
              </div>
            </div>
            <span className={isDark ? 'text-lg font-semibold tracking-tight text-white' : 'text-lg font-semibold tracking-tight text-slate-900'}>KIPIAI.ID</span>
          </div>
          <div className={isDark ? 'hidden md:flex items-center gap-6 text-sm text-white/80' : 'hidden md:flex items-center gap-6 text-sm text-slate-700'}>
            <a href="#features" className="hover:opacity-80">{t.nav.features}</a>
            <a href="#metrics" className="hover:opacity-80">{t.nav.metrics}</a>
            <a href="#pricing" className="hover:opacity-80">{t.nav.pricing}</a>
            <a href="#cta" className={isDark ? 'rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20' : 'rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-900 hover:bg-slate-50'}>
              {t.nav.cta}
            </a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mx-auto max-w-3xl pb-20 pt-24 text-center md:pt-32">
          <div className={isDark ? 'mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur' : 'mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/60 px-3 py-1 text-xs text-slate-700 backdrop-blur'}>
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            {t.hero.badge}
          </div>
          <h1 className={isDark ? 'bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl' : 'text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl'}>
            {t.hero.title}
          </h1>
          <p className={isDark ? 'mt-4 text-base leading-relaxed text-white/80 sm:text-lg' : 'mt-4 text-base leading-relaxed text-slate-700 sm:text-lg'}>
            {t.hero.desc}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500">
              {t.hero.primary}
            </a>
            <a href="#features" className={isDark ? 'rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10' : 'rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50'}>
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
