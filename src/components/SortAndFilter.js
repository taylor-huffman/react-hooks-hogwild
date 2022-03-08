import React from "react";

function SortAndFilter({ handleFilter, handleSort }) {
    return (
        <div className="sort-filter-bar ui grid container">
            <div className="filter-container">
                <label>
                    Filter
                    <select onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="true">Greased</option>
                        <option value="false">Not Greased</option>
                    </select>
                </label>
            </div>
            <div className="sort-container">
                <label>
                    Sort
                    <select onChange={handleSort}>
                        <option value="All">All</option>
                        <option value="name">Name: A-Z</option>
                        <option value="weight">Weight: Low To High</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default SortAndFilter