import styled from "styled-components";

export const TestimonialsHeader = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;
  .buttonContainer {
    margin-right: 20px;
  }
  .header {
    width: min(700px, 100%);
  }
  h2 {
    line-height: 1.4em;
  }
  p {
  }
`;
export const TestimonialsCard = styled.div`
  display: grid;
  gap: 20px;
  font-size: 14px;
  color: var(--body-font-color);
  background-color: var(--testimonials-bg);
  padding: 30px;
  svg {
    color: var(--clr-primary);
    font-size: 23px;
  }
  transition: var(--transition);

  &:hover {
    background-color: var(--clr-primary);
    transition: var(--transition);
    translate: 0 -10px;

    .name {
      color: var(--body-bg);
    }
    svg {
      color: var(--body-bg);
    }
  }
  .name {
    color: var(--clr-primary);
    font-size: var(--fs-100);
    &-container {
      display: flex;
      align-items: center;
    }
  }
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;
export const SwiperContainer = styled.div`
  display: block;
  .swiper-button-next {
    top: 20px;
    right: 1px;
    padding: 1px 17px 9px 18px;
    &::after {
      content: none;
    }
    &:hover ~ .buttonContainer > .testimonials-next {
      background-color: var(--clr-secondary);
      color: var(--clr-primary);
      transition: var(--transition);
    }
  }
  .swiper-button-prev {
    top: 19px;
    border-radius: 50%;
    padding: 1px 17px 9px 18px;
    right: 71px;
    z-index: 120;
    left: unset;
    &::after {
      content: none;
    }
    &:hover ~ .buttonContainer > .testimonials-prev {
      background-color: var(--clr-secondary);
      color: var(--clr-primary);
      transition: var(--transition);
    }
  }

  button {
    padding: 11px 12px 9px 11px;
    position: absolute;
    top: 0;
    right: 0;
    svg {
      line-height: 0;
    }
    border-radius: 50%;
    border: 1px solid var(--clr-primary);
    &:nth-of-type(1) {
      margin-right: 70px;
    }
  }
`;
