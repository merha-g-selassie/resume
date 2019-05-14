import React from 'react';
import myPicture from '../john-westrock-638048-unsplash.jpg';
import './PersonalInfo.css';
import {faEnvelope, faHome, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Separation from './Separation';
import Languages from './Languages';

export default () => {
    return (
        <div>
            <div className={'PersonalInfo-text-image'}>
                <img src={myPicture} alt={'myPicture'}/>
                <p className={'bottom-left-firstname'}>Merhawi</p>
                <p className={'bottom-left-lastname'}>GHEBRE SELASSIE</p>
            </div>
            <div className={'PersonalInfo-margins'}>
                <div className={'PersonalInfo-div-flex-column'}>
                    <div className={'PersonalInfo-div-flex-row'}>
                        <FontAwesomeIcon className={'PersonalInfo-FontAwesomeIcon'} size={'lg'} icon={faBriefcase}
                                         color="green"/>
                        <span>Software developer</span>
                    </div>
                    <div className={'PersonalInfo-div-flex-row'}>
                        <FontAwesomeIcon className={'PersonalInfo-FontAwesomeIcon'} size={'lg'} icon={faHome}
                                         color="green"/>
                        <span>Neuchâtel, Switzerland</span>
                    </div>
                    <div className={'PersonalInfo-div-flex-row'}>
                        <FontAwesomeIcon className={'PersonalInfo-FontAwesomeIcon'} size={'lg'} icon={faEnvelope}
                                         color="green"/>
                        <span>merhawi.gs@gmail.com</span>
                    </div>
                </div>
                <Separation/>
                <Languages/>
            </div>
        </div>
    );
}