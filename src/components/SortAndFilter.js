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
                        <option value="Sorting Off">Sorting Off</option>
                        <option value="name a-z">Name: A-Z</option>
                        <option value="name z-a">Name: Z-A</option>
                        <option value="weight low to high">Weight: Low To High</option>
                        <option value="weight high to low">Weight: High To Low</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default SortAndFilter