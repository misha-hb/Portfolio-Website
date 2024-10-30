import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Country Demographic Visualizer",
    description: "Allows user to see different demographic data based on their input from the World Bank's data repository.",
    link: "https://github.com/misha-hb/Country-Demographic-Visualizer"
  },
  {
    id: 2,
    title: "Johnny's Maze Adventure",
    description: "Johnny's Maze Adventure is an engaging maze exploration game built with Unity. Help Johnny navigate through complex mazes, find hidden keys, and unlock doors to escape. Challenge yourself to achieve the fastest time and secure your place on the leaderboard!",
    link: "https://misha-hb.github.io/Maze-Adventure-Game/"
  },
  {
    id: 3,
    title: "AI-Powered Non-Playable Character Chatbot",
    description: "Chat bot that automates NPC dialogue generation using AI and NLP techniques integrated within the Unity game engine.",
    link: "https://github.com/misha-hb/NPC_Chatbot"
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ backgroundColor: getCardColor(project.id) }}>
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getCardColor = (id) => {
  const colors = ['#E8F3FD', '#CDE1F9', '#91BDEB'];
  return colors[(id - 1) % colors.length];
};

export default Projects;