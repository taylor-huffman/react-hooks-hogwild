import React, { useState } from "react";

function Form({ handleAddHog }) {

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        weight: '',
        specialty: '',
        'highest medal achieved': '',
        greased: '',
    })
    // const [image, setImage] = useState('')
    // const [weight, setWeight] = useState('')
    // const [specialty, setSpecialty] = useState('')
    // const [medal, setMedal] = useState('')
    // const [greased, setGreased] = useState('True')


    function handleName(event) {
        setFormData({...formData, name: event.target.value})
    }

    function handleImage(event) {
        setFormData({...formData, image: event.target.value})
    }

    function handleWeight(event) {
        setFormData({...formData, weight: event.target.value})
    }

    function handleSpecialty(event) {
        setFormData({...formData, specialty: event.target.value})
    }

    function handleMedal(event) {
        setFormData({...formData, 'highest medal achieved': event.target.value})
    }

    function handleGreased(event) {
        setFormData({...formData, greased: event.target.value})
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        handleAddHog(formData)
        setFormData({
            name: '',
            image: '',
            weight: '',
            specialty: '',
            'highest medal achieved': '',
            greased: '',
        })
    }


    return (
        <div className="form-container">
                <p>Add A Hog</p>
                <form onSubmit={handleSubmit}>
                    <input type='text' name="name" placeholder="Name" value={formData.name} onChange={handleName}></input>
                    <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleImage}></input>
                    <input type='number' name="weight" placeholder="Weight" value={formData.weight} onChange={handleWeight}></input>
                    <input type='text' name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleSpecialty}></input>
                    <input type="text" name="highest medal achieved" placeholder="Highest Medal Achieved" value={formData['highest medal achieved']} onChange={handleMedal}></input>
                    <select name="greased" defaultValue={formData.greased} onChange={handleGreased}>
                        <option value='true'>True</option>
                        <option value='false'>False</option>
                    </select>
                    <input type="submit"></input>
                </form>
            </div>
    )
}

export default Form