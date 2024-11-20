import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/UofA.png'; // Adjust the path as needed

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: #2c3e50;
  color: white;
`;

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 30px; /* Adjust as needed */
  height: auto;
  margin-right: 10px; /* Space between the logo and the title */
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarBrand>
        <Logo src={logo} alt="Logo" />
        <Title>Laboratory of Neurophenomics</Title>
      </NavbarBrand>
      <NavbarLinks>
        <li><NavbarLink to="/">Home</NavbarLink></li>
        <li><NavbarLink to="/selected-publications">Publications</NavbarLink></li>
        <li><NavbarLink to="/Our-Lab">Our Lab</NavbarLink></li>
        <li>
          <ExternalLink href="https://neurophenomicslab.blogspot.com/" target="_blank" rel="noopener noreferrer">
            Blog
          </ExternalLink>
        </li>
        <li><NavbarLink to="/media">Media</NavbarLink></li>
        <li><NavbarLink to="/research">Research</NavbarLink></li>
      </NavbarLinks>
    </NavbarContainer>
  );
}

export default Navbar;
