import React, { useState } from 'react';
import CATEGORIES from '../../constants/categories';

function CategoryBox({ sortOptions, setSortOption }) {
  const handleCategoryClick = (e) => {
    setSortOption({
      ...sortOptions,
      category: e.target.value,
    });
  };

  return (
    <>
      {/* <!-- Filter Buttons --> */}
      <div className="filter-buttons flex flex-wrap items-center gap-2">
        <button
          className={`rounded-lg px-4 py-2 text-sm font-medium ${sortOptions.category === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} `}
          value="all"
          onClick={handleCategoryClick}
        >
          전체
        </button>

        {CATEGORIES.map((category) => {
          return (
            <button
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${sortOptions.category === category.key ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              key={category.name}
              onClick={handleCategoryClick}
              value={category.key}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default CategoryBox;
