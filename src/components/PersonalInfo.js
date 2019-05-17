import React from 'react';
import small from '../images/800.jpg';
import medium from '../images/1600.jpg';
import large from '../images/3500.jpg';
import './PersonalInfo.css';
import {faEnvelope, faHome, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Separation from './Separation';
import Languages from './Languages';
import Educations from './Educations';
import {themes} from "../colors";
export default () => {
    const style = {
        color: themes.darkGrey
    };
    return (
        <div>
            <div className={'PersonalInfo-text-image'}>
                <picture>
                    <source media="(max-width: 500px" srcset={small}/>
                    <source media="(min-width: 1600px" srcset={large}/>
                    <img src={medium} alt={'myPicture'}/>
                </picture>
                <p className={'bottom-left-firstname'}>Merhawi</p>
                <p className={'bottom-left-lastname'}>GHEBRE SELASSIE</p>
            </div>
            <div className={'PersonalInfo-margins'}>
                <div style={style} className={'PersonalInfo-div-flex-column'}>
                    <div className={'PersonalInfo-div-flex-row'}>
                        <FontAwesomeIcon className={'PersonalInfo-FontAwesomeIcon'} size={'lg'} icon={faBriefcase}
                                         color={themes.darkBlue}/>
                        <span>Software developer</span>
                    </div>
                    <div className={'PersonalInfo-div-flex-row'}>
                        <FontAwesomeIcon className={'PersonalInfo-FontAwesomeIcon'} size={'lg'} icon={faHome}
                                         color={themes.darkBlue}/>
                        <span>Neuchâtel, Switzerland</span>
                    </div>
                    <div className={'PersonalInfo-div-flex-row'}>
                        <FontAwesomeIcon className={'PersonalInfo-FontAwesomeIcon'} size={'lg'} icon={faEnvelope}
                                         color={themes.darkBlue}/>
                        <span><a style={style} href={'mailto:merhawi.gs@gmail.com'}>merhawi.gs@gmail.com</a></span>
                    </div>
                </div>
                <Separation/>
                <Educations/>
                <Separation/>
                <Languages/>
            </div>
        </div>
    );
}