import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";

export default ({language, now}) => {
    return (
        <>
            <p>{language}</p>
            <ProgressBar variant='success' now={now} label={`${now}%`} srOnly />
        </>
    );
}