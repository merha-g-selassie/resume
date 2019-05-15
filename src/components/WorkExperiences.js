import React from 'react';
import WorkExperience from './WorkExperience';
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './WorkExperiences.css';
import {themes} from "../colors";

export default () => {
    const style = {
        colorDark: {
            color: themes.darkGrey,
        }
    };
    return (
        <div>
            <div className={'WorkExperiences-title'}>
                <div className={'WorkExperiences-FontAwesomeIcon'} >
                    <FontAwesomeIcon size={'2x'} icon={faSuitcase} color={themes.darkBlue}/>
                </div>
                <h2 style={style.colorDark}>Work Experience</h2>
            </div>
            <WorkExperience/>
        </div>
    )
}