import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          key={category.id}
          className={`category-btn ${activeCategory === category.id ? 'active' : ''} fade-in delay-${index % 4}`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;