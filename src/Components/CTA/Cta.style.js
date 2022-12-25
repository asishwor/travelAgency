import styled from "styled-components";
import { Container } from "../Container.style";

export const CtaContainer = styled(Container)`
  padding: 0;
  margin-top: 90px;
  background-color: var(--section-bg);
  display: flex;
  overflow: hidden;
  /* flex-wrap: wrap; */
  align-items: center;

  .left {
    width: 50%;
    padding-left: 100px;
    h2 {
      width: min(600px, 100%);
      line-height: 1.7em;
      font-size: var(--fs-700);
    }
    .email {
      padding: 10px 10px 10px 20px;
      display: flex;
      align-items: center;
      background-color: var(--clr-white);
      &-icon {
        color: var(--clr-primary);
        margin-right: 20px;
        font-size: 25px;
      }
      input {
        font-size: var(--fs-100);
      }
      .send {
        margin-left: auto;
        padding-inline: 35px;
      }
    }
  }
  .right {
    transform: rotateZ(5deg);
    width: 40%;
    height: 400px;
    translate: 174px -19px;
    gap: 12px 9px;
    display: grid;
    place-items: calc(10px);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(100% / 7);
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      &:nth-of-type(1) {
        grid-row: 1/4;
        box-shadow: 5px 10px 10px #0005;
      }
      &:nth-of-type(2) {
        grid-row: 1/3;
      }
      &:nth-of-type(3) {
        grid-row: 1/5;
      }
      &:nth-of-type(4) {
        grid-row: 4/8;
      }
      &:nth-of-type(5) {
        grid-row: 3/7;
        box-shadow: 5px 10px 10px #0005;
      }
      &:nth-of-type(6) {
        grid-row: 5/8;
      }
      &:nth-of-type(7) {
        grid-row: 7/8;
        grid-column: 2/3;
        width: 100%;
      }
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 60px 20px;
    .left {
      width: 100%;
      padding-left: 0;
    }
    .right {
      width: 100%;
      translate: 0;
      margin-top: 50px;

      transform: rotateZ(0);
    }
  }
`;
