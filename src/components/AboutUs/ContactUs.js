import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  color: #2c3e50;
  line-height: 1.2;
`;

const InfoItem = styled.p`
  margin: 0;
  padding: 5px 0;
`;


function ContactPage() {
  return (
    <Container>
      <Title>Contact Information</Title>
      <ContactInfo>
        <InfoItem><strong>Alexander B. Niculescu, MD, PhD</strong></InfoItem>
        <InfoItem>Professor of Psychiatry</InfoItem>
        <InfoItem>Founding Director, C4P (Center for Precise, Personalized, and Preventive Psychiatry)</InfoItem>
        <InfoItem>BSPB, 6th floor, E619</InfoItem>
        <InfoItem>The University of Arizona College of Medicine – Phoenix</InfoItem>
        <InfoItem>475 N. 5th Street</InfoItem>
        <InfoItem>Phoenix, AZ 85004-2230</InfoItem>
        <InfoItem>Staff Psychiatrist and R&D Investigator, Carl T. Hayden VAMC</InfoItem>
        <InfoItem>Email: aniculescu@arizona.edu</InfoItem>
      </ContactInfo>
    </Container>
  );
}

export default ContactPage;
