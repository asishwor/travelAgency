import styled from "styled-components";
import { Container } from "../../Components/Container.style";

export const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .left {
    display: flex;
    gap: 10px;
    align-items: center;

    .avatar {
      padding: 9px 7px 9px 11px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      line-height: 0;
      background-color: var(--body-font-color);
      svg {
        font-size: 20px;
        cursor: pointer;
        color: var(--clr-secondary);
      }
    }
  }
  .times {
    color: var(--clr-primary);
    font-size: 14px;
    cursor: pointer;
  }
`;
export const Form = styled.form`
  background-color: var(--body-bg);
  height: auto;
  border-radius: 10px;
  width: min(400px, 100%);
  margin: 0 auto;
  padding: 30px;
  margin-top: 20px;
  p {
    margin-bottom: 20px;
  }
  label {
    svg {
      font-size: 7px;
      color: red;
    }
  }
  .input-container {
    margin: 10px 0 20px;
    box-shadow: 0 0 2px 0px var(--body-font-color);
    border-radius: 10px;
    overflow: hidden;

    input {
      display: block;
      padding: 12px 18px;
      width: 100%;
      font-size: var(--fs-100);
      align-items: center;
    }
  }
  .email {
    width: 100%;
    margin: 10px 0 20px 0;
  }
  .password {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      color: var(--body-font-color);
      cursor: pointer;
      margin-right: 20px;
    }
  }
  .login-btn {
    width: 100%;
    border-radius: 10px;
  }
  .forgot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -10px;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover {
      color: var(--clr-primary);
    }
  }
  .btn {
    margin-top: 20px;
    border: 1px solid var(--body-font-color);
    background-color: transparent;
    color: var(--body-font-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:hover {
      background-color: var(--clr-primary);
      color: var(--body-bg);
    }
    &:hover svg {
      color: var(--body-bg);
    }
    svg {
      color: #49ace0;
    }
    &:nth-of-type(4) {
      svg {
        color: var(--body-font-color);
      }
    }
  }
  .divider {
    text-align: center;
    margin-top: 10px;
  }
  .sign-up {
    text-align: center;
    padding: 15px 0;
    a {
      color: var(--clr-primary);
      font-weight: 700;
    }
  }
`;
export const FormContainer = styled(Container)`
  padding: 80px;
  background-color: #e6e8ec;
`;
