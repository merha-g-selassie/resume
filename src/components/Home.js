import React from 'react';
import './Home.css';
import WorkExperiences from './WorkExperiences';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Footer from './Footer';

const Home = () => {

    return (
        <>
        <div className="grid-container">
            <div className="item1">
                <PersonalInfo/>
            </div>
            <div className="item2">
                <WorkExperiences/>
            </div>
            <div className="item3">
                <Skills/>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;