import React from 'react';
import {faGlobeEurope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Language from './Language';
import './Languages.css';
import {themes} from "../colors";
import {languages} from "../data/languages";

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
            {
                languages.map((language, i) => {
                    return (
                        <Language key={i} language={language.name} now={language.rate}/>
                    )
                })
            }
        </>
    );
}