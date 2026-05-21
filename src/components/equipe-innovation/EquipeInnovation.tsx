import { useState } from 'react'

function EquipeInnovation() {
  // On garde le theme actuel dans un state React pour changer l'affichage sans recharger la page.
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  // Cette variable aide a savoir quel texte afficher dans le bouton.
  const isDark = theme === 'dark'

  return (
    // La classe "dark" ou "light" est ajoutee ici, puis le CSS change les couleurs selon le mode.
    <main className={`innovation-section ${theme}`}>
      <button
        className="innovation-theme-toggle"
        type="button"
        // Au clic, on passe du mode sombre au mode clair, ou l'inverse.
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        {isDark ? 'Mode clair' : 'Mode sombre'}
      </button>

      {/* Section principale qui presente l'equipe. */}
      <section className="innovation-content" aria-labelledby="team-title">
        {/* Les trois span servent a dessiner l'icone de groupe avec le CSS. */}
        <div className="innovation-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1 id="team-title">Équipe Innovation Pro</h1>

        <p>
          Nous sommes une équipe passionnée de quatre professionnels dédiés à la
          création de solutions digitales innovantes. Notre force réside dans
          notre complémentarité et notre engagement commun envers l'excellence.
          Ensemble, nous transformons les défis en opportunités et les idées en
          réalité.
        </p>

        {/* Badges qui affichent les valeurs principales de l'equipe. */}
        <div className="innovation-tags" aria-label="Valeurs de l'equipe">
          <span className="innovation-tag blue">Créativité</span>
          <span className="innovation-tag violet">Innovation</span>
          <span className="innovation-tag green">Excellence</span>
        </div>
      </section>
    </main>
  )
}

export default EquipeInnovation
