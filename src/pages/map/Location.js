import React from "react";
import { Container } from "../../Components/Container.style";

function Location() {
  return (
    <>
      <Container className="mapouter ">
        <div className="pagesBanner">
          <h1>location </h1>
        </div>
        <div
          className="gmap_canvas"
          style={{
            overflow: "hidden",
            background: "none",
            height: "100%",
            width: "100%",
          }}
        >
          <iframe
            title="map"
            width="1080"
            height="1080"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            style={{ width: "100%", height: "100vh" }}
          ></iframe>
        </div>
      </Container>
    </>
  );
}

export default Location;
