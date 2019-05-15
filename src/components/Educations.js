import React from 'react';
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Languages.css';
import Education from './Education';
import {themes} from "../colors";
import {educations} from "../data/educations";

export default () => {
    const style = {
        color: themes.lightGrey
    };
    return (
        <>
            <div className={'Languages-title'}>
                <div className={'Languages-FontAwesomeIcon'}>
                    <FontAwesomeIcon size={'2x'} icon={faGraduationCap} color={themes.darkBlue}/>
                </div>
                <h4 style={style}>Education</h4>
            </div>
            {
                educations.map((education, i) => {
                    return (
                        <Education key={i} education={education}/>
                    )
                })
            }
        </>
    );
}