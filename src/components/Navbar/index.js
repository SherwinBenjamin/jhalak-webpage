import React, { useEffect, useState } from "react";
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">Jhalak</NavLogo>
          <Hamburger onClick={toggle}>
            <FaBars />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <NavLink to="Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="House-selection">House Selection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Houses">Houses</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="Contact">Contact</NavLink>
            </NavItem> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
