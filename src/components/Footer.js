import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

export default () => {
    const style = {
        background: {
            backgroundColor: '#ABC',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
        flex: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '200px',
        }
    }
    return (
        <>
            <footer>
                <div style={style.background}>
                    <p>Find me on social media.</p>
                    <div>

                    </div>
                    <div style={style.flex}>
                        <FontAwesomeIcon icon={faFacebook} color="white"/>
                        <FontAwesomeIcon icon={faTwitter} color="white"/>
                        <FontAwesomeIcon icon={faInstagram} color="white"/>
                        <FontAwesomeIcon icon={faLinkedin} color="white"/>
                        <FontAwesomeIcon icon={faGithub} color="white"/>
                    </div>
                </div>
            </footer>
        </>
    );
}