import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { themes } from "../colors";

export default () => {
  const style = {
    background: {
      backgroundColor: themes.darkBlue,
      paddingTop: "20px",
      paddingBottom: "20px"
    },
    text: {
      color: themes.white
    }
  };
  return (
    <>
      <footer>
        <div style={style.background}>
          <p style={style.text}>Find me on social media.</p>
          <div style={style.flex}>
            <a
              href={"https://www.facebook.com/merhawi.ghebreselassie"}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={"Footer-icon"}
                size={"2x"}
                icon={faFacebook}
                color={themes.white}
              />
            </a>
            <a
              href={"https://twitter.com/GsMerha"}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={"Footer-icon"}
                size={"2x"}
                icon={faTwitter}
                color={themes.white}
              />
            </a>
            <a
              href={"https://www.instagram.com/merha_gs/"}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={"Footer-icon"}
                size={"2x"}
                icon={faInstagram}
                color={themes.white}
              />
            </a>
            <a
              href={
                "https://www.linkedin.com/in/merhawi-ghebre-selassie-b3b0a6189/"
              }
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={"Footer-icon"}
                size={"2x"}
                icon={faLinkedin}
                color={themes.white}
              />
            </a>
            <a
              href={"https://github.com/merha-g-selassie/"}
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={"Footer-icon"}
                size={"2x"}
                icon={faGithub}
                color={themes.white}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
