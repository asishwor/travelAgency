import React from "react";
import { Container } from "../Container.style";
import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerHeading,
  Overlay,
} from "./Banner.style";

export default function Hero() {
  return (
    <Container>
      <BannerContainer>
        <Overlay />
        <BannerHeading>
          Let's make your dream come true with GoOut
        </BannerHeading>
        <BannerContent>
          We are ready to accompany you anytime anywhere to explore this .
        </BannerContent>
        <BannerButton>
          <button>
            {" "}
            <img src="./images/treeclip.svg" alt="" />
            Vacation
          </button>
          <button>
            {" "}
            <img src="./images/mountainclip.png" alt="" /> Adventure
          </button>
        </BannerButton>
      </BannerContainer>
    </Container>
  );
}
