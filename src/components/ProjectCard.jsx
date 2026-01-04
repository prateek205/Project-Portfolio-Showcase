import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`project-card scale-in delay-${index % 4}`}>
      {project.featured && (
        <div className="featured-badge">
          <FaStar /> Featured
        </div>
      )}
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="project-image"
        loading="lazy"
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link secondary"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;