import styled from "styled-components";
import { Container } from "../Container.style";

export const FooterContainer = styled(Container)`
  padding: 0 10px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
