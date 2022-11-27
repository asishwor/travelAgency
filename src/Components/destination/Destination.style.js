import styled from "styled-components";
import { SearchContainer } from "../search/Search.style";

export const DestinationContainer = styled(SearchContainer)`
  padding-top: 80px;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    top: 93%;
    padding: 0px 22px 1px 22px;
    z-index: 2;
    &.swiper-button-disabled {
      position: absolute;
      z-index: 120;
      /* pointer-events: fill; */
      color: var(--clr-primary);
      border-radius: 50%;
      background-color: #fff;
    }

    &::after {
      content: none;
    }
  }
  .swiper-button-prev {
    left: calc(60% - 30px);
    margin-right: 20px;
    z-index: 20;
    transition: var(--transition);
    padding: 0px 22px 1px 22px;

    &:hover ~ .custom-prev {
      color: var(--clr-primary);
      border: 1px solid var(--clr-primary);
      background-color: var(--clr-secondary);

      z-index: 1;
    }
  }

  .swiper-button-next {
    right: calc(37% - 40px);
    transition: var(--transition);

    &:hover ~ .custom-next {
      color: var(--clr-primary);
      border: 1px solid var(--clr-primary);
      background-color: var(--clr-secondary);
      transition: var(--transition);
    }
  }
  .custom-next,
  .custom-prev {
    color: var(--body-bg);
    border-radius: 50%;
    display: grid;
    font-size: 20px;
    place-items: center;
    z-index: 1;
    background-color: var(--clr-primary);
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary);
      background-color: var(--clr-secondary);

      transition: var(--transition);
    }
  }
  //Active pagination bullets style
  .swiper-pagination-bullets-dynamic {
    transition: var(--transition);
    .swiper-pagination-bullet-active-main {
      margin-top: 2px;
      transform: scale(1);
      width: 45px;
      height: 12px;
      background-color: var(--clr-primary);
      border-radius: 10px;
    }
  }
  .swiper-pagination-bullet {
    height: 16px;
    background-color: var(--clr-primary);

    width: 16px;
  }
`;
export const BgSection = styled.section`
  background-color: var(--section-bg);
`;
export const HeadingContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 30px;
  h2 {
    text-align: center;
    display: inline-block;
    font-size: var(--fs-700);

    .color {
      color: var(--clr-primary);
      font-size: var(--fs-700);
      font-weight: 700;
    }
  }
  & > span {
    position: absolute;
    background-color: var(--clr-primary);
    height: 3px;
    &:nth-of-type(1) {
      width: 37px;
      rotate: -45deg;
      top: -17px;
      right: -42px;
    }
    &:nth-of-type(2) {
      width: 56px;
      rotate: -28deg;
      top: -13px;
      right: -67px;
    }
    &:nth-of-type(3) {
      width: 37px;
      rotate: -10deg;
      top: 3px;
      right: -53px;
    }
  }
`;

//destination slider
export const SliderCard = styled.div`
  background-color: var(--body-bg);
  width: 100%;
  margin-bottom: 80px;
  padding: 20px;
  position: relative;
  display: grid;
  gap: 2px;
  border: 1px solid #d1d5d6;
  .image-wrapper {
    position: relative;
  }
  .image {
    height: 280px;
    width: 100%;
    object-fit: cover;
  }
  .title {
    font-size: var(--fs-200);
    color: var(--heading-font-color);
    font-weight: 700;
    &:hover {
      color: var(--clr-primary);
      text-decoration: none;
    }
  }
  .location {
    &:hover {
      color: var(--clr-primary);
      cursor: pointer;
    }
  }
  .rating {
    color: var(--heading-font-color);
    font-size: 12px;
  }
  .card-bottom {
    display: flex;
    justify-content: space-between;

    .price {
      color: var(--clr-primary);
      font-weight: 700;
    }
  }
  .tag {
    position: absolute;
    top: 40px;
    right: 40px;
    padding: 5px 10px;
    line-height: 1;
    border-radius: 20px;
    background-color: var(--body-bg);
    color: var(--clr-primary);
    font-size: 12px;
  }
`;
export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ratings-color);
`;
