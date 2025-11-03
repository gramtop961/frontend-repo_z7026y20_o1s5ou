import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Metrics from './components/Metrics';
import CTA from './components/CTA';

function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'id'
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'

  // Apply theme to html element for Tailwind dark mode support
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const t = useMemo(() => {
    const en = {
      nav: { features: 'Features', metrics: 'Metrics', pricing: 'Pricing', cta: 'Get Started' },
      hero: {
        badge: 'All‑in‑One Performance Monitoring for HR & People Managers',
        title: 'See performance clearly. Act with confidence.',
        desc:
          'KIPIAI.ID unifies engagement, productivity, and growth signals into one live, iridescent hub—coach faster, recognize earlier, and scale a high‑performing culture.',
        primary: 'Start Free Trial',
        secondary: 'Explore Features',
      },
      features: {
        title: 'Designed for modern HR & people leaders',
        desc: 'Everything you need to monitor, coach, and scale performance—without the spreadsheet sprawl.',
        items: [
          { title: 'Velocity Insights', desc: 'Track execution speed across teams with real‑time SLA drift and cycle time trends.' },
          { title: 'People Signals', desc: 'Engagement, recognition, and burnout risk in one place powered by smart analytics.' },
          { title: 'Goal Alignment', desc: 'OKRs and KPIs tied to outcomes, with automatic progress rollups to org levels.' },
          { title: 'Compliance & Privacy', desc: 'Enterprise‑grade security with granular roles and regional data residency.' },
          { title: 'Automation', desc: 'Nudge reviews, schedule 1:1s, and trigger workflows from performance thresholds.' },
          { title: 'Predictive Models', desc: 'Forecast attrition and productivity shifts before they happen.' },
        ],
      },
      metrics: {
        title: 'Outcomes you can measure',
        desc: 'Teams using KIPIAI.ID see meaningful improvements within the first quarter.',
        stats: [
          { value: '-32%', label: 'Time to Review' },
          { value: '+21%', label: 'Goal Completion' },
          { value: '-18%', label: 'Attrition Risk' },
          { value: '+27%', label: 'Manager NPS' },
        ],
        chips: { live: 'live sync', predictive: 'predictive score' },
      },
      cta: {
        title: 'Bring clarity to performance',
        desc: 'Start your 14‑day trial. Full features. No credit card.',
        primary: 'Create Free Account',
        secondary: 'Book a Demo',
        benefits: ['Unlimited dashboards', 'SSO & Role‑based access', 'HRIS integrations'],
      },
      footer: {
        brand: 'KIPIAI.ID • All‑in‑One Performance Monitoring',
        links: { features: 'Features', metrics: 'Metrics', cta: 'Get Started' },
        rights: `© ${new Date().getFullYear()} KIPIAI.ID. All rights reserved.`,
      },
    };
    const id = {
      nav: { features: 'Fitur', metrics: 'Metrik', pricing: 'Harga', cta: 'Mulai' },
      hero: {
        badge: 'Platform pemantauan kinerja all‑in‑one untuk HR & manajer',
        title: 'Lihat kinerja dengan jelas. Bertindak dengan percaya diri.',
        desc:
          'KIPIAI.ID menyatukan sinyal keterlibatan, produktivitas, dan pertumbuhan dalam satu pusat langsung—membina lebih cepat, mengenali lebih awal, dan menskalakan budaya berkinerja tinggi.',
        primary: 'Mulai Uji Coba Gratis',
        secondary: 'Jelajahi Fitur',
      },
      features: {
        title: 'Dirancang untuk HR & pemimpin people modern',
        desc: 'Semua yang Anda butuhkan untuk memantau, membina, dan menskalakan kinerja—tanpa kekacauan spreadsheet.',
        items: [
          { title: 'Wawasan Kecepatan', desc: 'Lacak kecepatan eksekusi lintas tim dengan drift SLA real‑time dan tren waktu siklus.' },
          { title: 'Sinyal People', desc: 'Keterlibatan, pengakuan, dan risiko burnout di satu tempat dengan analitik cerdas.' },
          { title: 'Penyelarasan Tujuan', desc: 'OKR dan KPI terhubung ke hasil, dengan ringkasan progres otomatis ke tingkat organisasi.' },
          { title: 'Kepatuhan & Privasi', desc: 'Keamanan tingkat enterprise dengan peran granular dan residensi data regional.' },
          { title: 'Otomasi', desc: 'Dorong ulasan, jadwalkan 1:1, dan picu alur kerja dari ambang kinerja.' },
          { title: 'Model Prediktif', desc: 'Prediksi pergeseran attrition dan produktivitas sebelum terjadi.' },
        ],
      },
      metrics: {
        title: 'Hasil yang dapat Anda ukur',
        desc: 'Tim yang menggunakan KIPIAI.ID melihat peningkatan bermakna dalam kuartal pertama.',
        stats: [
          { value: '-32%', label: 'Waktu ke Review' },
          { value: '+21%', label: 'Penyelesaian Tujuan' },
          { value: '-18%', label: 'Risiko Attrition' },
          { value: '+27%', label: 'NPS Manajer' },
        ],
        chips: { live: 'sinkronisasi langsung', predictive: 'skor prediktif' },
      },
      cta: {
        title: 'Bawa kejelasan pada kinerja',
        desc: 'Mulai uji coba 14 hari. Fitur lengkap. Tanpa kartu kredit.',
        primary: 'Buat Akun Gratis',
        secondary: 'Jadwalkan Demo',
        benefits: ['Dasbor tanpa batas', 'SSO & akses berbasis peran', 'Integrasi HRIS'],
      },
      footer: {
        brand: 'KIPIAI.ID • Platform Pemantauan Kinerja All‑in‑One',
        links: { features: 'Fitur', metrics: 'Metrik', cta: 'Mulai' },
        rights: `© ${new Date().getFullYear()} KIPIAI.ID. Seluruh hak cipta dilindungi.`,
      },
    };
    return lang === 'en' ? en : id;
  }, [lang]);

  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'min-h-screen w-full bg-black font-inter text-white' : 'min-h-screen w-full bg-white font-inter text-slate-900'}>
      {/* Global Controls */}
      <div className="fixed right-4 top-4 z-[60] flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-2 py-1 backdrop-blur dark:border-white/20 dark:bg-black/60">
        <button
          onClick={() => setLang((l) => (l === 'en' ? 'id' : 'en'))}
          className="rounded-full px-3 py-1 text-xs font-medium text-slate-700 hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
        >
          {lang === 'en' ? 'EN' : 'ID'}
        </button>
        <span className="h-4 w-px bg-black/10 dark:bg-white/20" />
        <button
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          className="rounded-full px-3 py-1 text-xs font-medium text-slate-700 hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
        >
          {isDark ? 'Dark' : 'Light'}
        </button>
      </div>

      <Hero t={t} theme={theme} lang={lang} />
      <Features t={t} theme={theme} lang={lang} />
      <Metrics t={t} theme={theme} lang={lang} />
      <CTA t={t} theme={theme} lang={lang} />

      <footer className={isDark ? 'bg-black py-10 text-center text-sm text-white/60' : 'bg-white py-10 text-center text-sm text-slate-600'}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px]">
                <div className={isDark ? 'h-full w-full rounded-[10px] bg-black flex items-center justify-center text-cyan-300 text-sm font-bold' : 'h-full w-full rounded-[10px] bg-white flex items-center justify-center text-cyan-700 text-sm font-bold'}>
                  K
                </div>
              </div>
              <span className={isDark ? 'text-white/80' : 'text-slate-700'}>{t.footer.brand}</span>
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:opacity-80" href="#features">{t.footer.links.features}</a>
              <a className="hover:opacity-80" href="#metrics">{t.footer.links.metrics}</a>
              <a className="hover:opacity-80" href="#cta">{t.footer.links.cta}</a>
            </div>
          </div>
          <p className={isDark ? 'mt-6 text-white/50' : 'mt-6 text-slate-500'}>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
