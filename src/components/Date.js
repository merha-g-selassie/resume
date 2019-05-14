import React from 'react';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default ({years}) => {
    const style = {
        flex: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        icon: {
            paddingTop: '4px',
        }
    };
    return (
            <div style={style.flex}>
                <FontAwesomeIcon style={style.icon} size={'lg'} icon={faCalendar}
                                 color="green"/>
                <span>{years}</span>
            </div>
    );
}