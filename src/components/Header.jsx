import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaRocket } from 'react-icons/fa';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo fade-in">
            <FaRocket className="float" />
            PortfolioShowcase
          </a>
          <div className="header-actions">
            <nav>
              <a href="#featured" className="category-btn">Featured</a>
              <a href="#projects" className="category-btn">All Projects</a>
            </nav>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;