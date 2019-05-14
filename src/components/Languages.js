import React from 'react';
import {faGlobeEurope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Language from './Language';
import './Languages.css';

export default () => {
    return (
        <>
            <div className={'Languages-title'}>
                <div className={'Languages-FontAwesomeIcon'}>
                    <FontAwesomeIcon size={'2x'} icon={faGlobeEurope} color="green"/>
                </div>
                <h3>Languages</h3>
            </div>
            <Language language={'French'} now={100}/>
            <Language language={'English'} now={75}/>
        </>
    );
}