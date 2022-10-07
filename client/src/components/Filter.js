import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Investment">Investment</option>
        <option value="Expense">Expense</option>
        <option value="Savings">Savings</option>
      </select>
    </div>
  );
}

export default Filter;
