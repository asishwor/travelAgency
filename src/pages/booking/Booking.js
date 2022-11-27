import React from "react";
import { Container } from "../../Components/Container.style";
import Destination from "../../Components/destination/Destination";

function Booking() {
  return (
    <Container className="">
      <div className="pagesBanner">
        <h1>Booking</h1>
      </div>
      <Destination />
    </Container>
  );
}

export default Booking;
