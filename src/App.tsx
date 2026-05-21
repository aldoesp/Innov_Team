import React, { useState } from 'react';

// Structure des données pour TypeScript


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // ÉDITEZ CE TABLEAU POUR METTRE VOS PROPRES INFOS ET PHOTOS !
  

 

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[#f8fafc] text-slate-800 dark:bg-[#0f172a] dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-300">
        
        {/* BARRE DE NAVIGATION SUPÉRIEURE (AVEC TOOGLE MODE SOMBRE) */}
        <header className="bg-white dark:bg-[#1e293b] border-b border-slate-100 dark:border-slate-800/80 sticky top-0 z-40 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-blue-600 dark:text-blue-400">
                INNOVATION<span className="text-slate-800 dark:text-slate-200">PRO</span>
              </span>
            </div>

            {/* Bouton de Mode Sombre (Soleil / Lune) */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300"
              title="Changer de mode"
            >
              {darkMode ? (
                // Icône Soleil
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Icône Lune
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* 1. EN-TÊTE / HERO SECTION */}
        <section className="bg-white dark:bg-[#1e293b] border-b border-slate-100 dark:border-slate-800/50 py-16 px-4 text-center transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] dark:text-white tracking-tight mb-4">
              Équipe Innovation Pro
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Nous sommes une équipe passionnée de quatre professionnels dédiés à la création de solutions 
              digitales innovantes. Notre force réside dans notre complémentarité et notre engagement commun 
              envers l'excellence. Ensemble, nous transformons les défis en opportunités et les idées en réalité.
            </p>
            
            {/* Les 3 Badges de valeurs avec des couleurs différentes et statiques */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Badge Créativité - Palette Violette/Indigo */}
              <span className="px-6 py-2 rounded-full text-sm font-semibold border bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/50 shadow-sm">
                Créativité
              </span>
              
              {/* Badge Innovation - Palette Bleue Ciel */}
              <span className="px-6 py-2 rounded-full text-sm font-semibold border bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-900/50 shadow-sm">
                Innovation
              </span>
              
              {/* Badge Excellence - Palette Émeraude */}
              <span className="px-6 py-2 rounded-full text-sm font-semibold border bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/50 shadow-sm">
                Excellence
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}