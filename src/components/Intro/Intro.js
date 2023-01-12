import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/image.png";
import glassesimoji from "../../img/main_emoji.png";
import Github from "../../img/github (1).png";
import LinkedIn from "../../img/linkedin (1).png";
import Instagram from "../../img/instagram (1).png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hoi! This is </span>
          <span>Aryan Raj</span>
          <span>
         A 3rd-Year Mechanical undergarduate at "IIT kanpur"<br></br>
         Cordinator of <a href="https://students.iitk.ac.in/snt/aeromodelling/"target ="blank">
          Aeromodelling Club</a><br></br>
         Competitive programmer, Blockchain & front end developer<br></br>
         Intrested in Mecahanical stuff like CAD, MATLAB, Ansys & EV
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/aryanraj4049"target="blank"><img src={Github}></img></a>
          <a href="https://www.linkedin.com/in/aryanraj4049/"target="blank"><img src={LinkedIn}></img></a>
          <a href="https://www.instagram.com/bittu._.b2/"target="blank"><img src={Instagram}></img></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right" >

        {/* animation */}
        <motion.img
          initial={{top: "0%"}}
          whileInView={{ top: "-30%",left:"30" }}
          transition={transition}
          src={boy}
          alt=""
        />
        <motion.img
          initial={{ left: "-20%" }}
          whileInView={{ left: "40%" ,top: "-25%"}}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
