import React from "react";

function HogModal({ hogDetails, modalVisible, handleCloseModal }) {
    const highestMedal = hogDetails[0]['highest medal achieved']
    debugger
    return (
        <div className={modalVisible ? "modal" : "modal hide"}>
            <div className="modal-container">
                <img className="modal-image" src={hogDetails[0].image} alt={hogDetails[0].image + ' image'}></img>
                <div className="modal-details">
                    <h3>{hogDetails[0].name}</h3>
                    <p>Weight: {hogDetails[0].weight.toFixed(1)}</p>
                    <p>Greased: {hogDetails[0].greased ? 'Yes' : 'No'}</p>
                    <p>Specialty: {hogDetails[0].specialty}</p>
                    <p>Highest Medal Achieved: {highestMedal.slice(0,1).toUpperCase() + highestMedal.slice(1)}</p>
                </div>
                <p className="close-modal" onClick={handleCloseModal}>x</p>
            </div>
        </div>
    )
}

export default HogModal