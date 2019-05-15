import React from 'react';
import './Languages.css';
import './Education.css';
import Date from './Date';
import {themes} from "../colors";

export default ({education}) => {
    const style = {
        colorDark: {
            color: themes.darkGrey,
        }
    };

    return (
        <>
            <div>
                <Date years={education.years}/>
                <p style={style.colorDark} className={'diploma'}>{education.diploma}</p>
                <p className={'school'}>{education.school}</p>
            </div>
        </>
    );
}