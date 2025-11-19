import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/UofA.png';
import c4pLogo from '../assets/C4P_Logo.png';

const SidebarContainer = styled.nav`
  width: 175px;           
  min-height: 100vh;      
  display: flex;
  flex-direction: column; 
  background-color: #2c3e50;
  padding: 1rem;
  color: white;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;    
`;

const Logo = styled.img`
  width: 40px;    
  height: auto;
  margin-right: 10px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  line-height: 1.2;
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavLinkItem = styled.li`
  margin-bottom: 1rem; 
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  &:hover {
    color: #3498db;
  }
`;

const BottomLogoItem = styled.li`
  display: flex;
  flex-direction: column; /* stack logo and text vertically */
  align-items: center;    /* center horizontally */
  margin-top: 1.5rem;     /* spacing above logo */
`;

const BottomLogo = styled.img`
  width: 100px;  /* slightly larger */
  height: auto;
`;

const BottomText = styled.span`
  margin-top: 0.5rem;     /* spacing between logo and text */
  font-size: 0.85rem;     /* slightly smaller than nav links */
  text-align: center;
  font-style: italic;     /* optional styling */
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <BrandContainer>
        <Logo src={logo} alt="University Logo" />
        <Title>Center for Precise, Personalized, and Preventive Psychiatry (C4P)</Title>
      </BrandContainer>

      <NavLinks>
        <NavLinkItem>
          <StyledLink to="/">Home</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/selected-publications">Publications</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/media">Media</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/Our-Lab">People</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/Firsts">Firsts</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/FAQ">FAQ</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/contactus">Contact Us</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/gscholar">Citations and Reproducibility</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/book">Life and Mind Book</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/philan">Philanthropy</StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/photoalbum">Photo Album</StyledLink>
        </NavLinkItem>

        {/* C4P logo and text below the Photo Album option */}
        <BottomLogoItem>
          <BottomLogo src={c4pLogo} alt="C4P Logo" />
          <BottomText>Vive. Felicius. Diutius.</BottomText>
        </BottomLogoItem>
      </NavLinks>
    </SidebarContainer>
  );
}

export default Sidebar;
