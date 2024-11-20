import React from "react";

const CategoryFilter = ({ products, selectedCategory, setSelectedCategory }) => {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
