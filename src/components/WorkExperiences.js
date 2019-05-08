import React from 'react';
import WorkExperience from './WorkExperience';
import {faBacon, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './WorkExperiences.css';

export default () => {
    return (
        <div>
            <div className={'WorkExperiences-title'}>
                <div className={'WorkExperiences-FontAwesomeIcon'} >
                    <FontAwesomeIcon size={'2x'} icon={faBriefcase} color="green"/>
                </div>
                <h1>abc</h1>
            </div>
            <WorkExperience/>
            <WorkExperience/>
            <WorkExperience/>
        </div>
    )
}