import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block the scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col items-center justify-between px-6 py-8">
        {/* Top nav */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-black flex items-center justify-center text-cyan-300 font-bold">K</div>
            </div>
            <span className="text-lg font-semibold tracking-tight">KIPIAI.ID</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#metrics" className="hover:text-white">Metrics</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#cta" className="rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20">Get Started</a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mx-auto max-w-3xl pb-20 pt-24 text-center md:pt-32">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            All‑in‑One Performance Monitoring for HR & People Managers
          </div>
          <h1 className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            See performance clearly. Act with confidence.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            KIPIAI.ID brings engagement, productivity, and growth signals into one live, iridescent dashboard—so you can coach faster, recognize earlier, and scale a high‑performing culture.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#cta" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500">
              Start Free Trial
            </a>
            <a href="#features" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
