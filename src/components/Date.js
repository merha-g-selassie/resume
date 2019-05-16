import React from 'react';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {themes} from "../colors";
export default ({years}) => {
    const style = {
        flex: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        icon: {
            paddingTop: '4px',
        },
        textColor: {
            color: themes.darkBlue
        }
    };
    return (
            <div style={style.flex}>
                <FontAwesomeIcon style={style.icon} size={'lg'} icon={faCalendar}
                                 color={themes.darkBlue}/>
                <span style={style.textColor}>{years}</span>
            </div>
    );
}