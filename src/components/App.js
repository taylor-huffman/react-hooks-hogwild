import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer"
import HogModal from "./HogModal"
import SortAndFilter from "./SortAndFilter";
import Form from "./Form"

import hogs from "../porkers_data";

const initialHog = [{
	name: "Babe",
	specialty: "Being incredibly cute",
	greased: false,
	weight: 2.0,
	"highest medal achieved": "bronze",
	image:
	  "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
  }]

function App() {
	
	const [hogDetails, setHogDetails] = useState(initialHog)
	const [modalVisible, setModalVisible] = useState(false)
	const [filter, setFilter] = useState('All')
	const [sort, setSort] = useState('Sorting Off')
	const [showHogs, setShowHogs] = useState(hogs)



	function handleShowDetails(hogName) {
		setModalVisible(modalVisible => !modalVisible)
		setHogDetails(() => {
			return showHogs.filter(hog => {
				return hog.name === hogName
			})
		})
	}


	function handleCloseModal() {
		setModalVisible(modalVisible => !modalVisible)
	}


	function handleFilter(event) {
		setFilter(event.target.value)
	}

	function handleSort(event) {
		setSort(event.target.value)
	}

	function handleAddHog(newHog) {
		setShowHogs([...showHogs, newHog])
	}

	console.log('in app', showHogs)
	


	const displayHogs = showHogs.filter(hogs => {
		if (filter === 'All') return true
		else if ( filter === 'true') {
			return hogs.greased === true
		} return hogs.greased === false
	}).sort((a,b) => {
		if (sort === 'Sorting Off') return true
		else if (sort === 'name a-z') {
			const nameA = a.name.toUpperCase(); // ignore upper and lowercase
			const nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		} else if (sort === 'name z-a') {
			const nameA = a.name.toUpperCase(); // ignore upper and lowercase
			const nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameB < nameA) {
				return -1;
			}
			if (nameB > nameA) {
				return 1;
			}

			// names must be equal
			return 0;
		} else if (sort === 'weight low to high') {
			return a.weight - b.weight;
		} else {
			return b.weight - a.weight
		}
	})



	return (
		<div className="App">
			<Nav />
			<Form handleAddHog={handleAddHog} />
			<SortAndFilter handleFilter={handleFilter} handleSort={handleSort} />
			<HogContainer hogs={displayHogs} handleShowDetails={handleShowDetails} />
			<HogModal hogDetails={hogDetails} modalVisible={modalVisible} handleCloseModal={handleCloseModal} />
		</div>
	);
}

export default App;
