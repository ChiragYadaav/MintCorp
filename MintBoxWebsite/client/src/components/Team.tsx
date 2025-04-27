import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  positionColor: string;
  socialColor: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  bio, 
  image, 
  positionColor, 
  socialColor,
  delay 
}) => {
  return (
    <div 
      className="team-card bg-white rounded-lg shadow-md overflow-hidden reveal" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="h-64 bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className={`${positionColor} font-medium mb-3`}>{position}</p>
        <p className="text-gray-600 mb-4 text-sm">{bio}</p>
        <div className="flex justify-center space-x-3">
          <a href="#" className={`text-gray-400 hover:${socialColor} transition-colors duration-300`}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className={`text-gray-400 hover:${socialColor} transition-colors duration-300`}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={`text-gray-400 hover:${socialColor} transition-colors duration-300`}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const team = [
    {
      name: "Michael Johnson",
      position: "CEO & Founder",
      bio: "Over 20 years of experience in financial consulting and investment management.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      positionColor: "text-[hsl(var(--primary))]",
      socialColor: "text-[hsl(var(--primary))]",
      delay: 100
    },
    {
      name: "Sarah Williams",
      position: "Financial Director",
      bio: "Specialized in corporate finance strategies and investment optimization.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      positionColor: "text-[hsl(var(--secondary))]",
      socialColor: "text-[hsl(var(--secondary))]",
      delay: 200
    },
    {
      name: "David Chen",
      position: "Investment Strategist",
      bio: "Expert in developing custom investment strategies for high-net-worth clients.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      positionColor: "text-[hsl(var(--primary))]",
      socialColor: "text-[hsl(var(--primary))]",
      delay: 300
    },
    {
      name: "Jennifer Smith",
      position: "Tax Planning Expert",
      bio: "Specialized in developing efficient tax strategies for businesses and individuals.",
      image: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      positionColor: "text-[hsl(var(--secondary))]",
      socialColor: "text-[hsl(var(--secondary))]",
      delay: 400
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
            Meet Our <span className="text-[hsl(var(--primary))]">Team</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our team of experienced professionals is dedicated to providing exceptional service and expert guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              position={member.position}
              bio={member.bio}
              image={member.image}
              positionColor={member.positionColor}
              socialColor={member.socialColor}
              delay={member.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
