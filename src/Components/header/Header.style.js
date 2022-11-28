import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  transform: var(--transition);
  /* background-color: ${(props) =>
    props.footer ? "transparent" : "var(--navbar-bg)"}; */

  &.sticky-nav {
    position: fixed;
    top: 0;
    padding: 0 20px;
    margin: 0 auto;
    width: 100%;
    z-index: 999;
    background-color: ${(props) =>
      props.footer ? "transparent" : "var(--navbar-bg)"};
    left: 0;
    right: 0;
    color: var(--clr-white);
    box-shadow: 0 5px 20px #000000;
    transform: var(--transition);
    button {
      color: var(--clr-white) !important;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: var(--fs-200);
  & > li {
    margin-right: 30px;
    &:nth-of-type(4) {
      margin-right: 0px;
    }
    a {
      padding: 10px 23px;
    }
  }
`;
export const Logo = styled.img`
  height: 40px;
  width: 200px;
  object-fit: contain;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  & > a:nth-of-type(1) button {
    background-color: transparent;
    color: var(--clr-primary);
  }
`;
export const ToggleTheme = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.dark ? "var(--body-bg)" : "var(--clr-primary)"};
  padding: 10px;
  border-radius: 30px;
  font-size: 30px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: inset 0 0 5px #0004;

  .mode {
    transition: all 0.7s linear;

    &:nth-of-type(1) {
      translate: ${(props) => (props.dark ? "-130%" : "90%")};

      transition: all 0.7s linear;
    }
    &:nth-of-type(2) {
      translate: ${(props) => (props.dark === false ? "-230%" : 0)};
      transition: all 0.7s linear;
    }
  }
`;
