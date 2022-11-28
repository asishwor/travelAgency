import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import {
  DestinationGrid,
  GridImage,
  PopularDestinationContainer,
  PopularDestinationHEading,
} from "./PopularDestination.style";

function PopularDestination() {
  const [gridContent, setGridContent] = useState([]);

  useEffect(() => {
    fetch("./json/popularDestination.json").then((res) =>
      res.json().then((data) => setGridContent(data))
    );
  }, []);

  //popular destinations

  return (
    <PopularDestinationContainer>
      <Fade cascade direction="right" delay={500} triggerOnce={true}>
        <PopularDestinationHEading>
          <div className="left">
            <h2>Popular destination in Indonesia for you</h2>
            <p>A collection of the most popular destinations.</p>
          </div>
          <Link to="/destination">
            <button>Explore</button>
          </Link>
        </PopularDestinationHEading>

        {/* popular destination Category  */}

        <DestinationGrid>
          {gridContent.map((elm) => {
            const { name, location, image, id } = elm;
            return (
              <GridImage
                className="card"
                key={id}
                style={{ display: id < 5 ? "block" : "none" }}
              >
                <a href="/">
                  <img src={image} alt="cover" />
                </a>
                <div className="overlay"></div>
                <div className="hoverEffect">
                  <button>View More</button>
                </div>
                <div className="name">{name}</div>
                <a href="/" className="location">
                  {location}
                </a>
              </GridImage>
            );
          })}
        </DestinationGrid>
      </Fade>
    </PopularDestinationContainer>
  );
}

export default PopularDestination;
