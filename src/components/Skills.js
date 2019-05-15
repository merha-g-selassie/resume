import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import './Skills.css';
import {themes} from "../colors";
import Skill from './Skill'
import {skills} from "../data/skills";

export default () => {
    const style = {
        colorDark: {
            color: themes.darkGrey,
        }
    };
    return (
        <>
            <div className={'Skills-title'}>
                <div className={'Skills-Fontawesome-icon'}>
                    <FontAwesomeIcon size={'2x'} icon={faLaptopCode} color={themes.darkBlue}/>
                </div>
                <h2 style={style.colorDark}>Skills</h2>
            </div>
            <div className={'Skill-flex'}>
                {
                    skills.map((skill, i) => {
                        return (
                            <div className={'Skill-margins'}>
                                <Skill key={i} skill={skill}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}