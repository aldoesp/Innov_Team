import React from 'react';
import './info.css';

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
    name: "Sophie Martin",
    role: "Cheffe de Projet",
    description: "Passionnée par la gestion de projets innovants, Sophie coordonne l'équipe avec expertise et bienveillance. Elle possède 8 ans d'expérience dans le secteur.",
    email: "sophie.martin@exemple.fr",
    linkedin: "Profil LinkedIn",
    imageUrl: "https://i.pravatar.cc/150?img=47" // Remplacer par le chemin de la vraie image
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Développeur Full-Stack",
    description: "Expert en développement web et mobile, Thomas transforme les idées en applications fonctionnelles. Il maîtrise React, Node.js et les technologies cloud.",
    email: "thomas.dubois@exemple.fr",
    linkedin: "Profil LinkedIn",
    imageUrl: "https://i.pravatar.cc/150?img=11" 
  },
  {
    id: 3,
    name: "Emma Rousseau",
    role: "Designer UX/UI",
    description: "Créative et attentive aux détails, Emma conçoit des interfaces intuitives et élégantes. Elle place l'utilisateur au cœur de chaque décision de design.",
    email: "emma.rousseau@exemple.fr",
    linkedin: "Profil LinkedIn",
    imageUrl: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 4,
    name: "Lucas Bernard",
    role: "Spécialiste Marketing Digital",
    description: "Stratège créatif, Lucas développe des campagnes percutantes qui captent l'attention. Il excelle dans l'analyse de données et l'optimisation des performances.",
    email: "lucas.bernard@exemple.fr",
    linkedin: "Profil LinkedIn",
    imageUrl: "https://i.pravatar.cc/150?img=12"
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
    </section>
  );
};

export default Info;