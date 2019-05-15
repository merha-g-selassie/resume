import React from 'react';
import './Skill.css';
import {themes} from "../colors";
export default ({skill}) => {
    const style = {
        color: themes.darkGrey
    }
    return (
        <>
            <div className="Skill-bg">
                <div style={style} className="Skill-text">{skill.name}</div>
            </div>
                <img className="Skill-img" alt={skill.name} src={skill.img}/>
        </>
    );
}