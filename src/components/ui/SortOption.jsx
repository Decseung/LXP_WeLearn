import React, { useState } from 'react';

function SortOption({ sortOption, setSortOption }) {
  const handleChange = (e) => {
    setSortOption({
      ...sortOption,
      sort: e.target.value,
    });
  };

  return (
    <div className="sort-dropdown">
      <select
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-gray-900 focus:outline-none"
        value={sortOption}
        onChange={handleChange}
      >
        <option value="latest">최신순</option>
        <option value="popular">인기순</option>
        <option value="rating">평점순</option>
        <option value="student">수강생순</option>
      </select>
    </div>
  );
}

export default SortOption;
