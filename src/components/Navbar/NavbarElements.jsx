import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "rgba(17, 25, 40)" : "transparent")};
  /* background-color: rgba(17, 25, 40, 0.75); */
  border-radius: 0px 0px 12px 12px;

  transition: 0.8s all ease;

  height: 80px;
  margin-top: -110px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    /* align-self: center; */
    display: block;
    align-self: center;
    /* position: absolute;
    top: 0;
    right: 0; */
    trandform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 2px solid #fb5607;
  }
`;
