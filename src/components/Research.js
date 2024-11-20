import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f5f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

const SubNav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  background-color: #3498db;
  padding: 15px;
  border-radius: 8px;
`;

const SubNavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.25rem;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #2c82c9;
    transform: translateY(-3px);
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

function Research() {
  return (
    <Container>
      <Title>Research</Title>
      <SubNav>
        <SubNavLink to="convergent-functional-genomics">CFG</SubNavLink>
        <SubNavLink to="animal-models">Animal</SubNavLink>
        <SubNavLink to="pheno-chipping">PhenoChipping</SubNavLink>
        <SubNavLink to="3d-mindscape">3D Mindscape</SubNavLink>
        <SubNavLink to="current-research">Current Research</SubNavLink>
        <SubNavLink to="pyramids">Pyramids</SubNavLink>
        <SubNavLink to="pathways-and-mechanisms">Pathways and Mechanisms</SubNavLink>
      </SubNav>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  );
}

export default Research;
