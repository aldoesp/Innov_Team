import { useState } from 'react';
import Info from './components/info/info';
import EquipeInnovation from './components/equipe-innovation/EquipeInnovation';
import './App.css';

function App() {
  // Le theme est place ici pour que EquipeInnovation et Info changent ensemble.
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  return (
    <div className={`app-container ${theme}`}>
      <EquipeInnovation theme={theme} setTheme={setTheme} />
      <Info />
    </div>
  )
}

export default App
