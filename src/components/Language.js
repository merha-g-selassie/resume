import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";

export default ({language, now}) => {
    const hrStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginLeft: '15px',
        marginRight: '15px',
    };
    return (
        <>
            <p>{language}</p>
            <ProgressBar variant='success' now={now} label={`${now}%`} srOnly />
        </>
    );
}