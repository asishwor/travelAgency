import styled from "styled-components";

export const RegisterStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 80px;
  background-color: #e6e8ec;
  height: 700px;
  max-width: 1000px;
  margin: 0 auto;

  .left {
    width: 60%;
    height: 100%;
    display: flex;

    place-items: center;
    padding: 0 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background: url(./images/r.jpg);
    h3 {
      color: #fff;
      line-height: 1.7em;
      letter-spacing: 1px;
      font-size: var(--fs-400);
      opacity: 0.97;
    }
  }
  form {
    width: 100%;
  }
  .right {
    width: 40%;
    padding: 100px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--body-bg);
    height: 100%;
    h3 {
      font-size: var(--fs-400);
      line-height: 1.5em;
    }
    input {
      display: block;
      width: 100%;
      margin-top: 20px;
      padding-bottom: 7px;
      border-bottom: 1px solid var(--body-font-color);
    }
    button {
      width: 100%;
      border-radius: 8px;
      background-color: #222222;
      margin-top: 20px;
      &.google {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: #fff;
        color: #222222;
        border: 1px solid #222;
        &:hover {
          background-color: #222;
          color: var(--body-bg);
        }
      }
      &:hover {
        background-color: var(--body-bg);
        color: #222;
        border-color: #222;
      }
    }
  }
`;
