import React from 'react';
import Date from './Date';
import {themes} from "../colors";
export default ({work}) => {
    const style = {
        colorDark: {
            color: themes.darkGrey,
        },
        textAlignment: {
            textAlign: 'justify',
        }
    };
    return (
        <div>
            <h5 style={style.colorDark}>{work.title}</h5>
            <Date years={work.period}/>
            <p style={style.textAlignment}>{work.tasks}</p>
        </div>
    );
}