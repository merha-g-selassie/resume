import React from 'react';
import Date from './Date';
import {themes} from "../colors";
export default () => {
    const style = {
        colorDark: {
            color: themes.darkGrey,
        },
        textAlignment: {
            textAlign: 'justify',
        }
    };
    return (
        <div>
            <h5 style={style.colorDark}>Fullstack dev at..</h5>
            <Date years={'Since 2017'}/>
            <p style={style.textAlignment}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur atque
                consequatur deserunt dolore error est eum fugiat ipsum nam nihil nisi omnis quaerat
                quas quibusdam repellendus sed, tempora voluptas!
            </p>
        </div>
    );
}