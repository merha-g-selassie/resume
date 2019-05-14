import React from 'react';
import './Languages.css';
import './Education.css';
import Date from './Date';

export default () => {
    return (
        <>
            <div>
                <Date years={'2013-2018'}/>
                <p className={'diploma'}>Bachelor of Science in Business Information Technology</p>
                <p className={'school'}>University of Applied Sciences and Arts Western Switzerland, Neuchâtel</p>
            </div>
        </>
    );
}