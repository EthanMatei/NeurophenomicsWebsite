import React from 'react';
import styled from 'styled-components';
import Pheno1 from '../../assets/phenochipping1.jpg';
import Pheno2 from '../../assets/phenochipping2.jpg';

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

const Quote = styled.blockquote`
  font-style: italic;
  color: #34495e;
  margin: 20px 0;
  padding-left: 20px;
  border-left: 5px solid #3498db;
`;

const Paragraph = styled.p`
  color: #4f4f4f;
  line-height: 1.6;
  margin-bottom: 15px;
`;


function PhenoChipping() {
  return (
    <Container>
      <Title>PhenoChipping</Title>
      <Quote>
        “Solving big problems is easier than solving little problems” - Larry Page, Google
      </Quote>
      <Paragraph>
        Another line of our research involves the study of phenotypes (known as "phenomics").
      </Paragraph>
      <Paragraph>
        The imprecise nature of psychiatric phenotypes is a rate-limiting step for general clinical
        research and practice (particularly in psychiatric genetics). Dr. Niculescu and
        collaborators have developed an approach - termed "PhenoChipping" - that applies microarray
        paradigms and methodology to the empirical study of phenotypes.
      </Paragraph>
      <Paragraph>
        On-going work in this area is focused on major psychiatric disorders (schizophrenia,
        schizoaffective disorder, bipolar disorder, depression, anxiety disorders). We are building
        a bank of blood samples from PhenoChipped subjects for repeated mining by concurrent studies
        integrating genetic and genomics with phenomics.
      </Paragraph>
      <Paragraph>
        We are particularly interested in the practical applications of this approach to biomarker
        discovery, drug clinical trials, and improved clinical practice - personalized medicine in
        psychiatry.
      </Paragraph>
            <img src={Pheno1} alt="Lab Mission Visual" />
            <img src={Pheno2} alt="Lab Mission Visual" />
    </Container>
  );
}

export default PhenoChipping;
