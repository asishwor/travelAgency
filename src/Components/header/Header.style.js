import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const HeaderStyles = styled.header`
  width: 100%;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999;
  background-color: var(--clr-white);
  box-shadow: 0 10px 30px 25px #0004;
  @media (max-width: 991px) {
    justify-content: space-between;
  }
`;

export const MenuHide = styled(FaTimes)`
  @media (min-width: 992px) {
    display: none;
  }
  font-size: 25px;
  cursor: pointer;
  z-index: 1000;
`;

export const MenuShow = styled(FaBars)`
  @media (min-width: 992px) {
    display: none;
  }
  cursor: pointer;
  font-size: 20px;
  z-index: 100;
`;
export const Logo = styled.img`
  width: 50px;
  margin-right: 50px;
  z-index: 100;
`;
export const Nav = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
  display: flex;
  flex-grow: 1;
  align-items: center;
  ul {
    display: flex;
    gap: 25px;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
// mobile naviagtion
export const MobileNav = styled.div`
  position: absolute;
  padding: 40px 30px;
  background-color: #fff;
  height: 0;
  left: 0;
  opacity: 0;
  top: 62px;
  overflow: hidden;
  width: 100%;
  transform-origin: top;
  transition: all 350ms linear;
  box-shadow: -0px 0 0px 0px #0001, 0 32px 30px #0007;

  &.toggle {
    height: 310px;
    translate: 0;
    opacity: 1;
    transition: all 350ms linear;
    box-shadow: none;
  }
  li {
    padding: 20px 0px 4px 5px;
    border-bottom: 2px solid #0001;
    font-weight: 700;
  }
`;
export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--clr-primary)" : "var(--clr-white)"};
  color: ${(props) =>
    props.variant === "primary" ? "var(--clr-white)" : "var(--clr-primary)"};
  border: 1px solid var(--clr-primary);
  &:hover {
    background: var(--ratings-color);
  }
`;
export const ButtonContainer = styled.div``;
export const List = styled.ul``;
