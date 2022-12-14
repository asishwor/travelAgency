import React from "react";
import { Container } from "../Container.style";
import { Button, ButtonContainer } from "../header/Header.style";
import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerHeading,
  Overlay,
} from "./Banner.style";

export default function Hero() {
  return (
    <>
      <BannerContainer>
        <Overlay />
        <BannerHeading>
          Let's make your dream come true with GoOut
        </BannerHeading>
        <BannerContent>
          We are ready to accompany you anytime anywhere to explore this .
        </BannerContent>
        <BannerButton>
          <Button>
            <img src="./images/treeclip.svg" alt="" />
            Vacation
          </Button>
          <Button>
            {" "}
            <img src="./images/mountainclip.png" alt="" /> Adventure
          </Button>
        </BannerButton>
      </BannerContainer>
    </>
  );
}
