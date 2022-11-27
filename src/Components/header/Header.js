import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../Container.style";
import { ButtonContainer, List, Logo, Nav, ToggleTheme } from "./Header.style";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(false);
  let body = document.querySelector("body");

  //change theme funtion

  const toggleDarkTheme = () => {
    body.classList.remove("light");
    body.classList.add("dark");
    setIsDark(true);
  };
  const toggleLightTheme = () => {
    body.classList.remove("dark");
    body.classList.add("light");
    setIsDark(false);
  };

  //sticky header
  function sticky() {
    if (window.scrollY > 130) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", sticky);
  }, [isSticky]);

  return (
    <>
      <Container>
        <Nav className={isSticky ? "sticky-nav" : ""}>
          <NavLink to="/">
            <Logo src="./images/logo.png" alt="logo" />
          </NavLink>

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
        </Nav>
      </Container>
    </>
  );
}
