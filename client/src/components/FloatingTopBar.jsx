import React from 'react';
import styled from 'styled-components';
import Share from './icons/Share.jsx';
import Heart from './icons/Heart.jsx';


const Navigation = styled.nav`
  margin: 0px auto;
  width: 1042px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
  list-style-type: none;
  height:50px;
`;

const NavItem = styled.li`
  margin: 20px 5px 0 5px;
  display: inline-block;
  color: #008489;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #008489;
  }
`;

const SocialsContainer = styled.div`
  margin: 0;
  padding: 0;
  float: right;
  height:50px;
`;

const SocialItem = styled.div`
  margin: 10px 5px 0 5px;
  padding: 10px
  display: inline-block;
  height: 20px;
  font-weight: 600;
  line-height: 15px;
  cursor: pointer;
`;

const Icon = styled.svg`
  margin-right: 10px;
  float: left;
  height: 15px;
  width: 15px;
  overflow: visible;
`;


const FloatingTopBar = (props) => {

  const TopBarContainer = styled.div`
    display: ${props.show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #eee;
    z-index: 3;
  `;

  return (
    <TopBarContainer id="overview-floating-top-bar" >
      <Navigation id="overview-section-menu" >
        <NavList>
          <NavItem>Overview  ·</NavItem>
          <NavItem>Reviews  ·</NavItem>
          <NavItem>The Host  ·</NavItem>
          <NavItem>Location  ·</NavItem>
          <NavItem>Policies</NavItem>
        </NavList>

        <SocialsContainer>
          <SocialItem>
            <Icon viewBox="0 0 24 24" fill="transparent" fill-opacity="0" stroke="currentColor" stroke-width="2.25" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round">
              <Share />
            </Icon>
            Share
          </SocialItem>
          <SocialItem>
            <Icon viewBox="0 0 24 24" fill="transparent" fill-opacity="0" stroke="#484848" stroke-width="2.25" focusable="false" aria-label="Save this listing." role="img" stroke-linecap="round" stroke-linejoin="round">
              <Heart />
            </Icon>
            Save
          </SocialItem>
        </SocialsContainer>
      </Navigation>
    </TopBarContainer>
  );
};

export default FloatingTopBar;