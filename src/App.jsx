import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProjectCard from './components/ProjectCard';
import projectData from './assets/Project-db.json';
import './styles/App.css';
import './styles/theme.css';
import './styles/animation.css';
import { FaFolderOpen, FaRocket } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeCategory, setActiveCategory] = useState('all');
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const featured = projectData.projects.filter(project => project.featured);
    setFeaturedProjects(featured);
    
    if (activeCategory === 'all') {
      setFilteredProjects(projectData.projects);
    } else {
      const filtered = projectData.projects.filter(
        project => project.category === activeCategory
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <section className="hero">
        <div className="container">
          <h1 className="hero-title fade-in">Project Portfolio Showcase</h1>
          <p className="hero-subtitle fade-in delay-1">
            A collection of web development projects showcasing modern UI/UX, responsive design, 
            and JavaScript applications. Filter by category to explore different types of projects.
          </p>
        </div>
      </section>

      <section id="featured" className="featured-projects">
        <div className="container">
          <h2 className="section-title slide-in">Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="all-projects">
        <div className="container">
          <h2 className="section-title slide-in">All Projects</h2>
          
          <CategoryFilter
            categories={projectData.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <FaFolderOpen className="empty-state-icon" />
              <h3>No projects found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="fade-in">
              <FaRocket className="pulse" /> Project Portfolio Showcase
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;