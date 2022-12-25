import React from "react";
import { FaFacebook, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { List, Logo, Nav } from "../header/Header.style";
import { FooterContainer, FooterNav, SocialContainer } from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <FooterNav footer>
        <Link to="/">
          <Logo src="./images/logo.png" alt="logo" />
        </Link>

        <List>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/location">FAQ</Link>
          </li>
          <li>
            <Link to="/booking">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </List>
      </FooterNav>
      <SocialContainer>
        <FaTelegramPlane />
        <FaTwitter />
        <FaFacebook />
      </SocialContainer>
    </FooterContainer>
  );
}

export default Footer;
