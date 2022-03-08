import React from "react";

function HogCard({ name, image, handleShowDetails }) {
    return (
        // <div className="hog-card pigTile minPigTile" style={{ backgroundImage: `url(${image})` }} onClick={handleShowDetails}>
        //     <h3 className="hoggyText">{name}</h3>
        // </div>
        <div className="ui card">
            <div className="image">
                <img src={image} className="hog-image" alt={name + " image"}></img>
            </div>
            <div className="content">
                <h3 className="header pointer" onClick={(e) => handleShowDetails(e.target.textContent)}>{name}</h3>
            </div>
        </div>
    )
}

export default HogCard