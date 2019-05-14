import React from 'react';
import WorkExperience from './WorkExperience';
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './WorkExperiences.css';

export default () => {
    return (
        <div>
            <div className={'WorkExperiences-title'}>
                <div className={'WorkExperiences-FontAwesomeIcon'} >
                    <FontAwesomeIcon size={'2x'} icon={faSuitcase} color="green"/>
                </div>
                <h2>Work Experience</h2>
            </div>
            <WorkExperience/>
        </div>
    )
}