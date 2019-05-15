import React from 'react';
import './Skill.css';

export default ({skill}) => {
    return (
        <>
            <div className="img">
                <div className="img__overlay">{skill.name}</div>
                <img alt={skill.name} src={skill.img}/>
            </div>
        </>
    );
}