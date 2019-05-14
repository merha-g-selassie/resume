import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import './Skills.css';

export default () => {
    return (
        <>
            <div className={'Skills-title'}>
                <div className={'Skills-Fontawesome-icon'}>
                    <FontAwesomeIcon size={'2x'} icon={faLaptopCode} color="green"/>
                </div>
                <h2>Skills</h2>
            </div>
        </>
    );
}