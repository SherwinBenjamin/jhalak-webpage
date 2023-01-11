import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Jhalak</NavLogo>
          <Hamburger onClick={toggle}>
            <FaBars />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="house-selection">House Selection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Houses">Houses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
