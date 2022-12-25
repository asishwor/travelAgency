import styled from "styled-components";
import { Container } from "../Container.style";
import { ButtonContainer } from "../header/Header.style";

export const BannerContainer = styled(Container)`
  padding-top: 100px;
  position: relative;
  z-index: 3;
  background: url(./images/banner.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 992px) {
  }
`;
export const BannerHeading = styled.h1`
  font-size: var(--fs-600);
  width: min(670px, 98%);
  margin: 0 auto;
  color: var(--clr-white);
  text-align: center;
`;
export const BannerContent = styled.p`
  color: var(--clr-white);
  margin-top: 20px;
  text-align: center;
  letter-spacing: 1px;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: linear-gradient(to bottom, #000, #000);
  opacity: 0.7;
`;
export const BannerButton = styled(ButtonContainer)`
  justify-content: center;
  margin-top: 200px;
  & > button:nth-of-type(1) {
    background-color: var(--clr-secondary);
    font-weight: 500;

    &:hover {
      background-color: var(--clr-primary);
      color: var(--body-bg);
    }
  }

  button {
    position: relative;
    padding-left: 48px;
  }
  button img {
    position: absolute;
    left: 10px;
    top: 4px;
    height: 30px;
  }
`;
