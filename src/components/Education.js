import React from 'react';
import './Languages.css';
import './Education.css';
import Date from './Date';
import {themes} from "../colors";

export default () => {
    const style = {
        colorDark: {
            color: themes.darkGrey,
        }
    };
    return (
        <>
            <div>
                <Date years={'2013-2018'}/>
                <p style={style.colorDark} className={'diploma'}>Bachelor of Science in Business Information Technology</p>
                <p className={'school'}>University of Applied Sciences and Arts Western Switzerland, Neuchâtel</p>
            </div>
        </>
    );
}