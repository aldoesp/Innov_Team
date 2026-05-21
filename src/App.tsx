
{/*function App() {

  return (
      <section className="bg-white border-b border-slate-100 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] tracking-tight mb-4">
            Équipe Innovation Pro
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Nous sommes une équipe passionnée de quatre professionnels dédiés à la création de solutions 
            digitales innovantes. Notre force réside dans notre complémentarité et notre engagement commun 
            envers l'excellence. Ensemble, nous transformons les défis en opportunités et les idées en réalité.
          </p>
          
          {/*{/* Les 3 Badges de valeurs (Créativité, Innovation, Excellence) 
          <div className="flex flex-wrap justify-center gap-3">
            {["Créativité", "Innovation", "Excellence"].map((valeur) => (
              <button
                key={valeur}
                onClick={() => setActiveBadge(activeBadge === valeur ? null : valeur)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeBadge === valeur
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {valeur}
              </button>
            ))}
          </div>
          
          {activeBadge && (
            <div className="mt-4 text-xs font-semibold text-blue-600 animate-pulse">
              Focus sur notre valeur : {activeBadge} 🚀
            </div>
          )}
        </div>
      </section>
  )
}

export default App*/}


import React, { useState } from 'react';

// Structure des données pour TypeScript
interface Member {
  id: string;
  name: string;
  role: string;
  desc: string;
  email: string;
  linkedin: string;
  avatarUrl: string; // Lien de l'image (avec fallback si vide)
  avatarInitials: string; // Initiales si l'image ne charge pas
  colorTheme: string; // Couleur personnalisée de la bordure d'avatar
}

export default function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // ÉDITEZ CE TABLEAU POUR METTRE VOS PROPRES INFOS ET PHOTOS !
  const members: Member[] = [
    {
      id: "member-1",
      name: "Sophie Martin", // Remplace par ton prénom ou celui de ton ami(e)
      role: "Cheffe de Projet",
      desc: "Passionnée par la gestion de projets innovants, Sophie coordonne l'équipe avec brio et veille au respect des délais et de la qualité. Elle possède 8 ans d'expérience dans le secteur.",
      email: "sophie.martin@exemple.fr",
      linkedin: "https://linkedin.com",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
      avatarInitials: "SM",
      colorTheme: "border-sky-500 ring-sky-500/30"
    },
    {
      id: "member-2",
      name: "Thomas Dubois",
      role: "Développeur Full-Stack",
      desc: "Expert en développement web et mobile, Thomas transforme les idées en applications fonctionnelles. Il maîtrise React, Node.js et les technologies cloud.",
      email: "thomas.dubois@exemple.fr",
      linkedin: "https://linkedin.com",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      avatarInitials: "TD",
      colorTheme: "border-blue-600 ring-blue-600/30"
    },
    {
      id: "member-3",
      name: "Emma Rousseau",
      role: "Designer UI/UX",
      desc: "Créative et attentive aux détails, Emma conçoit des interfaces intuitives et élégantes. Elle place l'utilisateur au cœur de chaque décision de design.",
      email: "emma.rousseau@exemple.fr",
      linkedin: "https://linkedin.com",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80",
      avatarInitials: "ER",
      colorTheme: "border-cyan-500 ring-cyan-500/30"
    },
    {
      id: "member-4",
      name: "Lucas Bernard",
      role: "Spécialiste Marketing Digital",
      desc: "Stratège créatif, Lucas développe des campagnes percutantes qui captent l'attention. Il excelle dans l'analyse de données et l'optimisation des performances.",
      email: "lucas.bernard@exemple.fr",
      linkedin: "https://linkedin.com",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
      avatarInitials: "LB",
      colorTheme: "border-indigo-500 ring-indigo-500/30"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setShowContactModal(false);
    }, 3000);
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen flex flex-col font-sans">
      
      {/* 1. EN-TÊTE / HERO SECTION */}
      <section className="bg-white border-b border-slate-100 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] tracking-tight mb-4">
            Équipe Innovation Pro
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Nous sommes une équipe passionnée de quatre professionnels dédiés à la création de solutions 
            digitales innovantes. Notre force réside dans notre complémentarité et notre engagement commun 
            envers l'excellence. Ensemble, nous transformons les défis en opportunités et les idées en réalité.
          </p>
          
          {/* Les 3 Badges de valeurs (Créativité, Innovation, Excellence) */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Créativité", "Innovation", "Excellence"].map((valeur) => (
              <button
                key={valeur}
                onClick={() => setActiveBadge(activeBadge === valeur ? null : valeur)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeBadge === valeur
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {valeur}
              </button>
            ))}
          </div>
          
          {activeBadge && (
            <div className="mt-4 text-xs font-semibold text-blue-600 animate-pulse">
              Focus sur notre valeur : {activeBadge} 🚀
            </div>
          )}
        </div>
      </section>

      {/* 2. SECTION NOTRE ÉQUIPE */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full flex-grow">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e293b]">Notre Équipe</h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            Découvrez les talents qui composent notre groupe
          </p>
        </div>

        {/* Grille des 4 profils */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-slate-200/80"
            >
              {/* Image Profil circulaire avec effet double anneau (comme la maquette Figma) */}
              <div className="relative mb-6">
                <div className={`w-28 h-28 rounded-full border-4 ${member.colorTheme.split(' ')[0]} p-1 shadow-inner`}>
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name}
                    onError={(e) => {
                      // Fallback si l'image ne charge pas
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0D8ABC&color=fff&size=128`;
                    }}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Infos textuelles */}
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-blue-500 mt-1 mb-4">
                {member.role}
              </p>
              
              {/* Séparateur discret */}
              <div className="w-12 h-[2px] bg-slate-100 mb-4"></div>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {member.desc}
              </p>

              {/* Infos de contact et lien social */}
              <div className="w-full pt-4 border-t border-slate-50/80 space-y-3">
                {/* Email */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${member.email}`} className="hover:text-blue-500 transition-colors truncate max-w-[180px]">
                    {member.email}
                  </a>
                </div>

                {/* Profil LinkedIn */}
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Profil LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION TRAVAILLONS ENSEMBLE */}
      <section className="bg-white border-t border-slate-100 py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Travaillons Ensemble
          </h2>
          <p className="text-slate-500 mb-6 text-sm md:text-base">
            Vous avez un projet ? Notre équipe est prête à vous accompagner.
          </p>
          <button 
            onClick={() => setShowContactModal(true)}
            className="px-8 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/20 transition-all duration-150"
          >
            Nous Contacter
          </button>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="py-6 border-t border-slate-100 text-center bg-white text-xs text-slate-400">
        <p>© 2026 Équipe Innovation Pro - Tous droits réservés.</p>
      </footer>

      {/* MODAL DE CONTACT INTERACTIF */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-100 p-6 relative">
            
            {/* Bouton Fermer */}
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-slate-800 mb-1">Nous contacter</h3>
            <p className="text-xs text-slate-400 mb-5">
              Envoyez-nous un message et un membre de l'équipe vous répondra sous 24h.
            </p>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-800">Message envoyé !</h4>
                <p className="text-xs text-slate-500">Merci de votre intérêt pour notre équipe.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Votre Nom</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all" 
                    placeholder="Ex: Clara Martin" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Adresse Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all" 
                    placeholder="nom@exemple.com" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Votre Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all resize-none" 
                    placeholder="Dites-nous en plus sur votre projet..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors text-sm"
                >
                  Envoyer
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
