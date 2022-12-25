import styled from "styled-components";
import { Container } from "../Container.style";
import { Nav } from "../header/Header.style";


export const FooterNav = styled(Nav)`
@media (max-width:991px) {
  display: flex;
}

`
export const FooterContainer = styled(Container)`
  padding: 0 10px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-primary);
  color: var(--clr-white);
  padding:30px 15px;
  @media (max-width:550px) {

    display:grid;
    row-gap: 20px;
    place-items: center;
    
  }
`;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  svg {
    cursor: pointer;
    &:hover {
      color: var(--clr-primary);
      scale: 1.3;
      transition: var(--transition);
    }
  }
`;
