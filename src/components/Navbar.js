import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/UofA.png';
import c4pLogo from '../assets/C4P_Logo.png';

const SidebarContainer = styled.nav`
  width: 175px;           /* Fixed width for sidebar */
  min-height: 100vh;      /* Full viewport height */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between; /* Push top and bottom content apart */
  background-color: #2c3e50;
  padding: 1rem;
  color: white;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;    /* Spacing below brand */
`;

const Logo = styled.img`
  width: 40px;    /* Adjust as needed */
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
  margin-bottom: 1rem; /* Spacing between each link */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  &:hover {
    color: #3498db;
  }
`;

const BottomLogo = styled.img`
  width: 50px;    /* Adjust as needed */
  height: auto;
  align-self: center; /* Center horizontally at bottom */
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <TopSection>
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
        </NavLinks>
      </TopSection>

      {/* C4P logo at the bottom */}
      <BottomLogo src={c4pLogo} alt="C4P Logo" />
    </SidebarContainer>
  );
}

export default Sidebar;
