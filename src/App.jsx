import Hero from './components/Hero';
import Features from './components/Features';
import Metrics from './components/Metrics';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Hero />
      <Features />
      <Metrics />
      <CTA />
      <footer className="bg-black py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3 text-white/80">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-black flex items-center justify-center text-cyan-300 text-sm font-bold">K</div>
              </div>
              <span>KIPIAI.ID • All‑in‑One Performance Monitoring</span>
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:text-white" href="#features">Features</a>
              <a className="hover:text-white" href="#metrics">Metrics</a>
              <a className="hover:text-white" href="#cta">Get Started</a>
            </div>
          </div>
          <p className="mt-6 text-white/50">© {new Date().getFullYear()} KIPIAI.ID. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
