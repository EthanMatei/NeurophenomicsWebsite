import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/UofA.png';

const SidebarContainer = styled.nav`
  width: 175px;           /* Fixed width for sidebar */
  min-height: 100vh;      /* Full viewport height */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-start;
  background-color: #2c3e50;
  padding: 1rem;
  position: flex;        /* Keep it fixed on the left if you want */
  top: 0;
  left: 0;
  color: white;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;    /* Spacing below brand */
`;

const Logo = styled.img`
  width: 40px;    /* Slightly bigger, tweak as needed */
  height: auto;
  margin-right: 10px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  line-height: 1.2;
  /* Because the sidebar can be narrower, 
     reduce font-size if needed */
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

function Sidebar() {
  return (
    <SidebarContainer>
      <BrandContainer>
        <Logo src={logo} alt="Logo" />
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
    </SidebarContainer>
  );
}

export default Sidebar;
