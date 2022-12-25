import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  HeaderStyles,
  List,
  Logo,
  MenuHide,
  MenuShow,
  MobileNav,
  Nav,
} from "./Header.style";

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [top, setTop] = useState(0);
  // for toggle mobile menu
  const [isActive, setIsActive] = useState(false);
  const [start, setstart] = useState({
    st: 0,
    end: 0,
  });
  function fixedNav() {
    setTop(window.scrollY);
    setFixed(() => {
      while (top > 75) {
        if (start.st < start.end) {
          return true;
        } else {
          return false;
        }
      }
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", fixedNav);
    setstart((st) => {
      return { ...st, st: top, end: st.st };
    });
    return window.removeEventListener("scroll", () => {});
  }, [top, fixed]);
  return (
    <>
      <HeaderStyles className={fixed ? "fixed" : ""}>
        <Logo src="/images/logo.png" />
        <Nav>
          <List>
            <li>
              <NavLink to="/location">Location</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/booking">Booking</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </List>
          <div style={{ display: "flex", gap: "10px", marginLeft: "auto" }}>
            <Button variant={"primary"}>Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </Nav>
        {isActive && <MenuHide onClick={() => setIsActive(false)} />}
        {!isActive && <MenuShow onClick={() => setIsActive(true)} />}

        {/* // for small devices */}
        <MobileNav className={isActive ? "toggle" : ""} toggle={isActive}>
          <ul>
            <li>
              <NavLink  onClick={() => setIsActive(false)} to="/location">Location</NavLink>
            </li>
            <li>
              <NavLink  onClick={() => setIsActive(false)}  to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink  onClick={() => setIsActive(false)} to="/booking">Booking</NavLink>
            </li>
            <li>
              <NavLink  onClick={() => setIsActive(false)} to="/contact">Contact</NavLink>
            </li>
          </ul>
          {/* <div style={{ display: "flex", gap: "10px" }}>
            <Button variant={"primary"}>Sign In</Button>
            <Button>Sign Up</Button>
          </div> */}
        </MobileNav>
      </HeaderStyles>
    </>
  );
}

/*
 {/* <Container>
        <NavHeader>
          <NavLink to="/">
            <Logo src="./images/logo.png" alt="logo" />
          </NavLink>
          <Nav>
            <List>
              
            </List>
            <div style={{ display: "flex" }}>
              <ButtonContainer>
                <Link to={"/login"}>
                  <button>SignIn</button>
                </Link>
                <Link to={"/register"}>
                  <button>Register</button>
                </Link>
              </ButtonContainer>
              <ToggleTheme dark={isDark}>
                <MdDarkMode className="mode" onClick={toggleDarkTheme} />
                <MdOutlineLightMode
                  className="mode"
                  onClick={toggleLightTheme}
                />
              </ToggleTheme>
            </div>
          </Nav>

            for mobile and tablet devices 
          <GoThreeBars />
        </NavHeader>
        <MobileNav>
          <List>
            <li>
              <NavLink to="/location">Location</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/booking">Booking</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </List>
          <ButtonContainer>
            <Link to={"/login"}>
              <button>SignIn</button>
            </Link>
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </ButtonContainer>
 <ToggleTheme dark={isDark}>
              <MdDarkMode className="mode" onClick={toggleDarkTheme} />
              <MdOutlineLightMode className="mode" onClick={toggleLightTheme} />
            </ToggleTheme> 
        </MobileNav>
      </Container>*/
