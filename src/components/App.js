import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer"
import HogModal from "./HogModal"
import SortAndFilter from "./SortAndFilter";

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
	const [sort, setSort] = useState('All')
	const [showHogs, setShowHogs] = useState(hogs)



	function handleShowDetails(hogName) {
		setModalVisible(modalVisible => !modalVisible)
		setHogDetails(() => {
			return hogs.filter(hog => {
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
		console.log(event.target.value)
	}


	const displayHogs = showHogs.filter(hogs => {
		if (filter === 'All') return true
		else if ( filter === 'true') {
			return hogs.greased === true
		} return hogs.greased === false
	})



	return (
		<div className="App">
			<Nav />
			<SortAndFilter handleFilter={handleFilter} handleSort={handleSort} />
			<HogContainer hogs={displayHogs} handleShowDetails={handleShowDetails} />
			<HogModal hogDetails={hogDetails} modalVisible={modalVisible} handleCloseModal={handleCloseModal} />
		</div>
	);
}

export default App;
