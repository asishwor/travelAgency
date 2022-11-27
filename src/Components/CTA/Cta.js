import React from "react";
import { CtaContainer } from "./Cta.style";
import { FaEnvelope } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

function Cta() {
  return (
    <Fade cascade direction="right" delay={500} triggerOnce={true}>
      <CtaContainer>
        <div className="left">
          <h2>To stay connected and more informatio</h2>
          <p>Put your email below for more information about G0Out</p>
          <form action="/" className="email">
            <FaEnvelope className="email-icon" />
            <input type="email" placeholder="Your email address" />
            <button className="send" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="right">
          <img src="./images/grid.jpg" alt="grid" />
          <img src="./images/grid1.jpg" alt="grid" />
          <img src="./images/grid3.jpg" alt="grid" />
          <img src="./images/maldives.jpg" alt="grid" />
          <img src="./images/banner.jpg" alt="grid" />
          <img src="./images/switzerland.jpg" alt="grid" />
          <img src="./images/usa.jpg" alt="grid" />
        </div>
      </CtaContainer>
    </Fade>
  );
}

export default Cta;
