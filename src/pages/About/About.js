import React from "react";
import { Container } from "../../Components/Container.style";
import Testimonials from "../../Components/Testimonials/Testimonials";

function About() {
  return (
    <Container>
      <div className="pagesBanner">
        <h1>About Us</h1>
      </div>
      <Testimonials />
    </Container>
  );
}

export default About;
