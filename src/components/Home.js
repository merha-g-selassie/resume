import React from 'react';
import './Home.css';
import WorkExperiences from './WorkExperiences';
import PersonalInfo from './PersonalInfo';

const Home = () => {

	return (
            <div className="grid-container">
                <div className="item1"><PersonalInfo/></div>
                <div className="item2">
                    <WorkExperiences/>
                </div>
                <div className="item3"><WorkExperiences/></div>
            </div>
	);
}

export default Home;