import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%"}} />
      <div className="f-content">
        <span>jayactive11112@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/jay-kumar-pandit-8a74ab200/"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/_hyper_jay/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://github.com/Hyper-ActiveX"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
