import { CheckCircle2 } from 'lucide-react';

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-700 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 30%, #a5f3fc 0, transparent 35%), radial-gradient(circle at 50% 80%, #93c5fd 0, transparent 35%)' }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-white/10 p-8 backdrop-blur shadow-xl ring-1 ring-white/20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h3 className="text-3xl font-bold">Bring clarity to performance</h3>
            <p className="mt-2 text-white/90">Start your 14‑day trial. Full features. No credit card.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-white/90">Create Free Account</a>
              <a href="#" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20">Book a Demo</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-left text-white/90">
              {['Unlimited dashboards', 'SSO & Role‑based access', 'HRIS integrations'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
