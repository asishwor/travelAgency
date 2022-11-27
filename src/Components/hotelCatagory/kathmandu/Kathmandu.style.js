import styled from "styled-components/macro";
import { Container } from "../../Container.style";

export const NewDestinations = styled(Container)`
  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    @media (min-width: 768px) {
      flex-wrap: no-wrap;
    }
  }
  .filters {
    border: 1px solid #dbdbdf;
    padding: 20px;
    display: flex;
    gap: 40px;
    @media (min-width: 768px) {
      display: grid;
      width: min(250px, 100%);
    }

    input {
      box-shadow: 0 0 10px #dbdbdf;
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
    .star-filter {
      display: grid;
      gap: 10px;
    }
    .reviewScore {
      display: grid;
      gap: 10px;
    }
  }
  .search {
    padding: 100px 0;
    background: url(./images/kathmandu.jpg);
  }
  .hotelList {
    width: 100%;
    display: grid;
    /* flex-grow: 1; */
    @media (min-width: 768px) {
      flex-grow: 0;
      width: calc(100% - 250px);
    }
    gap: 15px;
    .ratings-star {
      display: flex;
      align-items: stretch;
      font-size: 20px;
    }
    .card {
      display: flex;
      border: 0.5px solid var(--body-font-color);
      border-radius: 5px;
      position: relative;
      min-height: 300px;
      @media (min-width: 768px) {
        margin-left: 30px;
      }
      // right side card style
      &-right {
        width: 250px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        .reviews {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .ratingStats {
          padding: 5px 8px;
          border: 3px solid var(--clr-primary);
          display: grid;
          color: var(--clr-primary);
          position: absolute;
          top: 20px;
          right: 10px;
          place-items: center;
          &::before {
            height: 3px;
            width: 9px;
            rotate: -130deg;
            background-color: var(--body-bg);
            content: "";
            position: absolute;
            top: 2px;
            left: -9px;
            border: 3px solid var(--clr-primary);
            border-left: 5px solid var(--body-bg);
            border-bottom: 5px solid var(--body-bg);
          }
        }
        .price {
          font-size: 30px;
          line-height: 1.33em;
        }
      }
    }
    .details {
      display: grid;
      place-items: start;
      padding: 20px 20px 20px 0;
      width: calc(100% - 500px);
      border-right: 1px solid var(--body-font-color);
      gap: 20px;
      .location-link {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: var(--clr-primary);
        margin-left: 10px;
      }
      .comment {
        button {
          background-color: transparent;
          color: var(--clr-primary);
          display: flex;
          align-items: center;
        }
      }
    }
    .image {
      width: 250px;
      height: 100%;
      margin-right: 20px;
      padding: 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
`;
