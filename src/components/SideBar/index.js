import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              about
            </SidebarLink>
            <SidebarLink to="House Selection" onClick={toggle}>
              House Selection
            </SidebarLink>
            <SidebarLink to="Houses" onClick={toggle}>
              Houses
            </SidebarLink>
            <SidebarLink to="Contact" onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
