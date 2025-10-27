import React from 'react';
import '../styles/Projects.css';
import { trackEvent } from '../analytics';

const projects = [
  {
    id: 1,
    title: "Supreme Court Case (SCC) Dashboard",
    description: "An interactive dashboard that visualizes Canadian Supreme Court judgments and trends by year.",
    link: "https://sccdashboard.com",
    analyticsName: "scc_dashboard",
    destinationType: "live_site"
  },
  {
    id: 2,
    title: "AI-Powered Non-Playable Character Chatbot",
    description: "Chat bot that automates NPC dialogue generation using AI and NLP techniques integrated within the Unity game engine.",
    link: "https://github.com/misha-hb/NPC_Chatbot",
    analyticsName: "npc_chatbot",
    destinationType: "github_repo"
  },
  {
    id: 3,
    title: "Johnny's Maze Adventure",
    description: "Johnny's Maze Adventure is an engaging maze exploration game built with Unity. Help Johnny navigate through complex mazes, find hidden keys, and unlock doors to escape.",
    link: "https://misha-hb.github.io/Maze-Adventure-Game/",
    analyticsName: "maze_adventure",
    destinationType: "github_game"
  },
  {
    id: 4,
    title: "Country Demographic Visualizer",
    description: "Allows user to see different demographic data based on their input from the World Bank's data repository.",
    link: "https://github.com/misha-hb/Country-Demographic-Visualizer",
    analyticsName: "country_demographic_visualizer",
    destinationType: "github_repo"
  }

];

const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ backgroundColor: '#fafae3' }}>
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-card-link"
                onClick={() => {
                  trackEvent('project_link_click', {
                    project: project.analyticsName,
                    destination: project.destinationType,
                    location: 'projects_page'
                  })
                }}
              >
                View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;