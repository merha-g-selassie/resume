import React from 'react';
import {faGlobeEurope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Language from './Language';
import './Languages.css';
import {themes} from "../colors";
export default () => {
    const style = {
        colorDark: {
            color: themes.darkGrey,
        }
    };
    return (
        <>
            <div className={'Languages-title'}>
                <div className={'Languages-FontAwesomeIcon'}>
                    <FontAwesomeIcon size={'2x'} icon={faGlobeEurope} color={themes.darkBlue}/>
                </div>
                <h4 style={style.colorDark}>Languages</h4>
            </div>
            <Language language={'French'} now={100}/>
            <Language language={'English'} now={75}/>
        </>
    );
}