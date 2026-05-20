import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const isDark = theme === 'dark'

  return (
    <main className={`team-section ${theme}`}>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        {isDark ? 'Mode clair' : 'Mode sombre'}
      </button>

      <section className="team-content" aria-labelledby="team-title">
        <div className="team-icon" aria-hidden="true">
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

        <div className="team-tags" aria-label="Valeurs de l'equipe">
          <span className="tag blue">Créativité</span>
          <span className="tag violet">Innovation</span>
          <span className="tag green">Excellence</span>
        </div>
      </section>
    </main>
  )
}

export default App
