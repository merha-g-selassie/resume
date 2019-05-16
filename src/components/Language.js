import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
import {themes} from "../colors";

export default ({language, now}) => {
    const style = {
        margins: {
            marginBottom: '15px',
        },
        text: {
            color: themes.darkGrey,
            marginBottom: 0,
        }
    };
    return (
        <>
            <style type="text/css">
                {`
                 .progress-bar{
                    background-color: ${themes.darkBlue};
                 }
                `}
            </style>
            <div style={style.margins}>
                <p style={style.text}>{language}</p>
                <ProgressBar now={now} label={`${now}%`} srOnly/>
            </div>
        </>
    );
}