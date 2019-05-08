import React from 'react';
import './Home.css';
import WorkExperiences from './WorkExperiences';

const Home = () => {

	return (
		<div className="grid-container">
			<div className="item1"><WorkExperiences/></div>
			<div className="item2">
				<WorkExperiences/>
			</div>
			<div className="item3"><WorkExperiences/></div>
		</div>
	);
}

export default Home;