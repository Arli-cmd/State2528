import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Shield, Globe, Crown, MessageSquare, 
  Users, Swords, ChevronDown, Check,
  Target, Zap, Calendar, MapPin
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { Lang } from './types';
import { COPY } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>(Lang.ENG);
  const t = COPY[lang];
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const saved = localStorage.getItem('state2528_lang') as Lang;
    if (saved && Object.values(Lang).includes(saved)) {
      setLang(saved);
    }
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('state2528_lang', l);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'nap', label: t.nav.nap },
    { id: 'reasons', label: t.nav.reasons },
    { id: 'alliances', label: t.nav.alliances },
    { id: 'apply', label: t.nav.apply },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-gold-500/30 selection:text-gold-100">
      <ParticleBackground />

      {/* --- Sticky Header --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gold-500/10 bg-void/90 backdrop-blur-xl supports-[backdrop-filter]:bg-void/70"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-black border border-gold-500/30 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_25px_2px_rgba(251,191,36,0.5)] transition-shadow duration-300">
              <span className="text-gold-400 text-lg">♛</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gold-100 font-serif font-bold tracking-[0.2em] leading-none">2528</span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase mt-0.5 group-hover:text-gold-300 transition-colors">Golden Empire</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-bold text-slate-400 hover:text-gold-300 transition-colors relative group py-2 tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-300 to-gold-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gold-500/20 bg-slate-900/50 hover:bg-gold-500/10 transition-colors text-xs font-bold tracking-wider text-gold-100"
            >
              <span>{lang}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 py-1 rounded-xl bg-slate-900 border border-gold-500/30 shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl z-50"
                >
                  {Object.values(Lang).map((l) => (
                    <button
                      key={l}
                      onClick={() => changeLang(l)}
                      className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-gold-500/20 transition-colors ${lang === l ? 'text-gold-400' : 'text-slate-400'}`}
                    >
                      {l}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10 pt-20">
        
        {/* --- Hero Section --- */}
        <section id="about" className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 overflow-hidden">
          <motion.div style={{ y: heroY, opacity: opacityHero }} className="text-center max-w-5xl mx-auto z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full border border-gold-500/40 bg-black/40 backdrop-blur-md mb-8 shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]"
            >
              <span className="text-gold-300 text-xs font-bold tracking-[0.3em] uppercase">{t.hero.subtitle}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gold-200 to-gold-600 drop-shadow-[0_0_35px_rgba(251,191,36,0.4)] mb-8 tracking-tight leading-none"
            >
              STATE 2528
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl text-gold-100/80 tracking-[0.4em] uppercase font-light mb-16"
            >
              {t.hero.slogan}
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full max-w-5xl mx-auto"
          >
            <Card className="!bg-black/50 backdrop-blur-2xl !border-gold-500/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <span className="text-gold-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-gold-500"></span>
                    {t.about.kicker}
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-white">{t.about.title}</h2>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{t.about.shortIntro}</p>
                </div>
                <div className="flex flex-wrap gap-3 md:max-w-xs justify-center">
                  {[t.about.status.active, t.about.status.nap, t.about.status.coord].map((status, i) => (
                    <span key={i} className="px-3 py-1.5 rounded border border-gold-500/30 bg-gold-900/10 text-[10px] font-bold tracking-wider text-gold-300 uppercase shadow-[0_0_10px_-2px_rgba(251,191,36,0.2)]">
                      {status}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* --- NAP Section --- */}
        <section id="nap" className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-500 text-xs font-bold tracking-[0.25em] uppercase block mb-3">{t.nap.kicker}</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">{t.nap.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t.nap.desc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card delay={0.2} className="h-full">
                  <h3 className="text-2xl font-bold text-gold-100 mb-8 flex items-center gap-3">
                    <Shield className="text-gold-400" size={24} /> {t.nap.rulesTitle}
                  </h3>
                  <ul className="grid gap-4">
                    {t.nap.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/30 hover:bg-gold-500/5 transition-colors group">
                        <div className="mt-0.5 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 border border-gold-500/30 group-hover:border-gold-400">
                          <Check size={14} className="text-gold-400" />
                        </div>
                        <span className="text-slate-200 text-sm md:text-base font-medium">{rule}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{t.nap.napAlliancesTitle}</h4>
                    <div className="flex flex-wrap gap-2">
                      {['KOR', 'ONE', 'AFK', 'GOD', 'GPR', 'PPP'].map(tag => (
                        <span key={tag} className="px-5 py-2 rounded border border-slate-700 bg-slate-900/50 text-slate-300 text-xs font-bold tracking-widest hover:border-gold-500/50 hover:text-gold-300 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="md:col-span-1 space-y-6">
                <Card delay={0.4} className="h-full flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-transparent border border-gold-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)]">
                    <Crown size={28} className="text-gold-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{t.nap.rotationTitle}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.nap.rotationDesc}</p>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-6" />
                  <p className="text-sm text-slate-400 leading-relaxed">{t.nap.fortsDesc}</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* --- Why Us Section --- */}
        <section id="reasons" className="py-32 px-4 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6">
              <div>
                 <span className="text-gold-500 text-xs font-bold tracking-[0.25em] uppercase block mb-3">{t.reasons.kicker}</span>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">{t.reasons.title}</h2>
              </div>
              <div className="w-full md:w-auto h-[1px] flex-1 bg-gradient-to-r from-gold-500/30 to-transparent md:mx-8 mb-4" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.reasons.items.map((item, idx) => {
                const icons = [Globe, Crown, MessageSquare, Target, Swords, Users];
                const Icon = icons[idx] || Target;
                return (
                  <Card key={idx} delay={idx * 0.1} className="group hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-black border border-slate-700 flex items-center justify-center mb-6 group-hover:border-gold-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] transition-all">
                      <Icon className="text-slate-400 group-hover:text-gold-300 transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-gold-200 transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Alliances Section (Grid View) --- */}
        <section id="alliances" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-gold-500 text-xs font-bold tracking-[0.25em] uppercase block mb-3">{t.alliances.kicker}</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">{t.alliances.title}</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-lg">{t.alliances.subtitle}</p>
            </div>

            {/* Grid for Alliances: KOR, ONE, AFK, GOD */}
            <div className="grid md:grid-cols-2 gap-8">
              {t.alliances.cards.map((alliance, idx) => (
                <Card key={alliance.tag} delay={idx * 0.1} className="flex flex-col h-full !p-0">
                  {/* Header Content */}
                  <div className="p-8 pb-4 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                        [{alliance.tag}]
                      </h3>
                      {/* Decorative corner icon */}
                      <Crown size={24} className="text-gold-500/20" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-white mb-2">{alliance.motto}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{alliance.desc}</p>
                  </div>

                  {/* Spacer to push content down */}
                  <div className="flex-1" />

                  {/* Data Content */}
                  <div className="bg-black/20 p-8 pt-4 border-t border-white/5 relative z-10">
                    
                    <div className="grid grid-cols-2 gap-8 mb-6">
                      {/* Requirements */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-gold-400">
                          <Zap size={14} />
                          <span className="text-[10px] font-bold tracking-widest uppercase">{t.alliances.reqTitle}</span>
                        </div>
                        <ul className="space-y-2">
                          {alliance.reqs.map((r, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                              <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Coordinates */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-gold-400">
                           <MapPin size={14} />
                           <span className="text-[10px] font-bold tracking-widest uppercase">{t.alliances.coordsTitle}</span>
                        </div>
                        <div className="px-3 py-2 rounded bg-gold-900/10 border border-gold-500/20 text-center">
                          <span className="text-xs font-mono font-bold text-gold-300">{alliance.coords}</span>
                        </div>
                      </div>
                    </div>

                    {/* Schedule (Compact) */}
                    <div className="pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 mb-3 text-gold-400">
                          <Calendar size={14} />
                          <span className="text-[10px] font-bold tracking-widest uppercase">{t.alliances.scheduleTitle}</span>
                        </div>
                        <div className="space-y-2">
                          {alliance.schedule.map((ev, i) => (
                            <div key={i} className="flex justify-between items-center text-xs">
                              <span className="text-slate-400">{ev.label}</span>
                              <span className="text-gold-100 font-mono opacity-80">{ev.time}</span>
                            </div>
                          ))}
                        </div>
                    </div>

                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- Apply Section --- */}
        <section id="apply" className="py-32 px-4 relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
             <Card className="!bg-gradient-to-b !from-slate-900 !to-black border-gold-500/30 !shadow-[0_0_50px_-10px_rgba(251,191,36,0.15)]">
               <div className="py-16 px-6">
                 <span className="text-gold-500 text-xs font-bold tracking-[0.25em] uppercase block mb-6">{t.apply.kicker}</span>
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">{t.apply.title}</h2>
                 <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">{t.apply.desc}</p>
                 
                 <Button className="w-full md:w-auto min-w-[240px] text-base py-4 shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)]">
                   {t.apply.button}
                 </Button>

                 <p className="mt-10 text-xs text-slate-500 uppercase tracking-widest font-bold opacity-60">{t.apply.note}</p>
               </div>
             </Card>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="py-16 border-t border-gold-500/10 bg-black/80 backdrop-blur-md text-center">
           <div className="flex items-center justify-center gap-3 mb-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <span className="text-gold-500 text-2xl">♛</span>
              <span className="text-lg font-bold tracking-[0.2em] text-slate-300">2528</span>
           </div>
           <p className="text-gold-200/60 text-xs font-bold tracking-[0.2em] uppercase mb-3">{t.footer.line}</p>
           <p className="text-slate-600 text-[10px] tracking-wide">{t.footer.small}</p>
        </footer>

      </main>
    </div>
  );
};

export default App;