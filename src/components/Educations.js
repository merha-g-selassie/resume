import React from 'react';
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Languages.css';
import Education from './Education';

export default () => {
    return (
        <>
            <div className={'Languages-title'}>
                <div className={'Languages-FontAwesomeIcon'}>
                    <FontAwesomeIcon size={'2x'} icon={faGraduationCap} color="green"/>
                </div>
                <h3>Education</h3>
            </div>
            <Education education={null}/>
            <Education education={null}/>
        </>
    );
}