import React, { useState } from "react";

function HogCard({ name, image, handleShowDetails }) {

    const [isHidden, setIsHidden] = useState(false)

    function handleHide() {
        setIsHidden(isHidden => !isHidden)
        console.log('hide')
    }

    return (
        <div className="ui card">
            <p className="hide-hog" onClick={handleHide}>{isHidden ? `Show ${name}` : `Hide ${name}`}</p>
            <div className={isHidden ? 'image hide' : 'image'}>
                <img src={image} className="hog-image" alt={name + " image"}></img>
            </div>
            <div className={isHidden ? 'content hide' : 'content'}>
                <h3 className="header pointer" onClick={(e) => handleShowDetails(e.target.textContent)}>{name}</h3>
            </div>
        </div>
    )
}

export default HogCard