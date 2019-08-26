import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  margin: 0px;
  float: right;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  list-style-type: none;
  height:80px;
`;

const NavItem = styled.li`
  margin: 2px 10px;
  padding: 0 10px;
  display: inline-block;
  line-height: 80px;
  height: 74px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #484848;
  }
`;

const Menu = (props) => {

  return (
    <Navigation id="overview-house-menu" >
      <NavList>
        <NavItem>Become a Host</NavItem>
        <NavItem>Help</NavItem>
        <NavItem>Signup</NavItem>
        <NavItem>Login</NavItem>
      </NavList>
    </Navigation>
  );
};

export default Menu;