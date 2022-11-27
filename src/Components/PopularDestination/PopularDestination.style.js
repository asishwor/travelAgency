import styled from "styled-components/macro";
import { Container } from "../Container.style";

export const PopularDestinationContainer = styled(Container)`
  padding: 60px 15px;
  @media (max-width: 768px) {
    padding: 80px 15px;
  }
`;
export const PopularDestinationHEading = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .left {
    width: min(360px, 100%);
    line-height: 2.5em;
    font-size: var(--fs-200);
    h2 {
      font-size: var(--fs-500);
    }
  }
`;

export const DestinationGrid = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  display: grid;
  gap: 10px;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: repeat(3, 150px);
`;
export const GridImage = styled.div`
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  &:hover .hoverEffect {
    translate: 0;
    transition: var(--transition);
  }

  @media (min-width: 768px) {
    color: var(--clr-white);
    z-index: 2;

    &:nth-of-type(1) {
      grid-row: 1/4;
      grid-column: 1/2;
    }
    &:nth-of-type(2) {
      grid-row: 1/3;
      grid-column: 2/3;
    }
    &:nth-of-type(3) {
      grid-row: 3/4;
      grid-column: 2/3;
    }
    &:nth-of-type(4) {
      grid-row: 1/4;
      grid-column: 3/4;
    }
  }
  .hoverEffect {
    display: grid;
    place-items: center;
    position: absolute;
    left: 0;
    top: 0%;
    height: 100%;
    width: 100%;
    z-index: 12;
    background-color: #0009;
    translate: -100%;
    transition: var(--transition);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #0005;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .name {
    position: absolute;
    bottom: 46px;
    font-size: 15px;
    font-weight: 700;
    z-index: 2;
    left: 20px;
  }
  .location {
    position: absolute;
    bottom: 20px;
    z-index: 2;
    font-size: 13px;
    color: var(--body-font-color);
    left: 20px;
  }
`;
export const DestinationCatagory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .destination {
    display: grid;
    place-items: center;
  }
  .image {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
  }
`;
