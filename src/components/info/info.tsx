
import './info.css';
import Contact from './Contact';

// Définition de l'interface pour un membre de l'équipe
interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  email: string;
  linkedin: string;
  imageUrl: string;
}

// Données extraites de l'image
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rivo Andriharisoa",
    role: "Développeur Full-Stack",
    description: "Passionné par la technologie, Rivo excelle dans le développement de solutions web robustes. Il maîtrise les frameworks modernes et est toujours à la recherche de nouvelles façons d'innover.",
    email: "rivo.andriharisoa@gmail.com",
    linkedin: "Andriharisoa Rivo",
    imageUrl: "../public/assets/rivo.jpeg" // Remplacer par le chemin de la vraie image
  },
  {
    id: 2,
    name: "RANDRIAMANALINA Haritsalama Aldo Espérant",
    role: "Administrateur Systèmes et Réseaux . Cybersécurité",
    description: "Expert en sécurité informatique, Aldo protège les infrastructures contre les menaces. Il a une solide expérience en administration systèmes et réseaux, avec une passion pour la cybersécurité.",
    email: "aldoesperant@gmail.com",
    linkedin: "linkedin.com/in/aldo-espérant-4609332b7",
    imageUrl: "../public/assets/image1.jpeg" 
  },
  {
    id: 3,
    name: "RAKOTOARISOA Tanjonirina Baptisto Brunel",
    role: "Designer UX/UI & Passionné de Sécurité Réseau",
    description: "Étudiant en Informatique et développeur passionné, spécialisé dans la création d'applications web et mobiles robustes (Next.js, Flutter, Prisma). J'ai un fort intérêt pour l'administration système, la sécurité réseau et le déploiement d'infrastructures fiables.",
    email: "baptistobrunel@gmail.com",
    linkedin: "Tanjonirina Brunel RAKOTOARISOA",
    imageUrl: "../public/assets/Tan.png"
},
  {
    id: 4,
    name: "ARSHAMIRAH Jess Houssen",
    role: "Administateur Système et Réseau",
    description: "Passionné par l'automatisation et l'architecture des infrastructures, je m'occupe de la mise en ligne de nos applications, de la sécurité des serveurs et de la gestion de notre réseau. Mon but est de garantir un environnement stable, rapide et disponible pour l'ensemble du collectif.",
    email: "arshamirahjh@gmail.com",
    linkedin: "Jess Houssen",
    imageUrl: "../public/assets/image3.jpg"
  }
];

const Info: React.FC = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Notre Équipe</h2>
        <p>Découvrez les talents qui composent notre groupe</p>
      </div>

      <div className="cards-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="card-image-wrapper">
              <img src={member.imageUrl} alt={`Portrait de ${member.name}`} className="card-image" />
            </div>
            
            <div className="card-content">
              <h3 className="card-name">{member.name}</h3>
              <p className="card-role">{member.role}</p>
              <p className="card-description">{member.description}</p>
            </div>

            <hr className="card-divider" />

            <div className="card-footer">
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{member.email}</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <a href="#" className="linkedin-link">{member.linkedin}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='my-15 flex justify-center items-center'>
        <Contact/>
      </div>
    </section>
  );
};

export default Info;
