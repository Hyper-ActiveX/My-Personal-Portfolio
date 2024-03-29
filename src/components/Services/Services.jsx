import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import dEmoji from "../../img/dEmoji.png"
import idea from "../../img/idea.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About Me And</span>
        <span>My Interest</span>
        <spane>
          I am a student at The India Institute of Information Technology, Design & Manufacturing (IIITDM) Jabalpur.
          <br/>
          B Tech. Computer Science (2020 Batch)
          <br />
          I like to solve problems, I solved more than 500 across all the platforms(leetcode, codeforces & codechef), and I am also a full stck Developer.
        </spane>
        <a href="https://drive.google.com/file/d/12xN8bL9wBHawyqEQqqsTd3ttXSVpM4RP/view?usp=sharing" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Hobbies"}
            detail={"Chess,Writing,Design,cricket,Travel Volunteering, community service or charity work"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={dEmoji}
            heading={"Developer"}
            detail={"Cpp, ,oops in java, Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={idea}
            heading={"Problem Solving"}
            detail={
              "Data Structure and Algorithms"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
