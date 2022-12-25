import styled from "styled-components";
import { Container } from "../Container.style";

export const Form = styled.form`
  width: min(calc(1400px - 200px), 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 15px 30px;
  margin: 0 auto;
  box-shadow: 0 20px 30px #0001;
  @media (max-width: 992px) {
    padding-top: 71px;
    width: auto;
    overflow-x: scroll;
  }

  .search-btn {
    @media (max-width: 992px) {
      padding: 16px 0;
      text-align: center;
      width: 150px;
    }
  }
`;
export const Input = styled.input`
  font-size: var(--fs-200);
  display: inline-block;
`;
export const Label = styled.span`
  font-size: var(--fs-200);
  font-weight: 500;
  color: var(--heading-font-color);
`;
export const InputWrapper = styled.div`
  display: grid;
`;
export const IconWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  gap: 12px;
`;
export const SearchContainer = styled(Container)`
  padding-bottom: 80px;
 
`;
