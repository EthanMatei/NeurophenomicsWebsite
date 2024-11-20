import React from 'react';
import styled from 'styled-components';
import Animal1 from '../../assets/AnimalIMG1.jpg';
import Animal2 from '../../assets/AnimalIMG2.jpg';
import Animal3 from '../../assets/AnimalIMG3.jpg';

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
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  color: #4f4f4f;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;


function AnimalModels() {
  return (
    <Container>
      <Title>Animal Models</Title>
      <Paragraph>
        Pioneering animal model studies by our group to comprehensively map the whole-genome gene
        expression landscape (brain regions and blood) of psychiatric disorders: agonist/antagonist
        pharmacogenomic mouse models and a circadian clock genetic knock-out mouse model.
      </Paragraph>
      <img src={Animal1} alt="Lab Mission Visual" />
      <img src={Animal2} alt="Lab Mission Visual" />
      <img src={Animal3} alt="Lab Mission Visual" />

    </Container>
  );
}

export default AnimalModels;
