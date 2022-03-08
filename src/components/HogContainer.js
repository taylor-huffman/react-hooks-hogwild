import React from "react";
import HogCard from "./HogCard"

function HogContainer({ hogs, handleShowDetails }) {

    console.log(hogs)
    return (
        <div className="hog-container ui grid container">
            {hogs.map(hog => {
                return <HogCard key={hog.name} name={hog.name} image={hog.image} handleShowDetails={handleShowDetails} />
            })}
        </div>
    )
}

export default HogContainer