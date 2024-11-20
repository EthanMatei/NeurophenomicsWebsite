import React from 'react';
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
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  color: #4f4f4f;
  line-height: 1.6;

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function CurrentResearch() {
  return (
    <Container>
      <Title>Current Research</Title>
      <Section>
        <SubTitle>From Convergent Functional Genomics to Phenomics: Translational Studies in Neuropsychiatric Disorders</SubTitle>
      </Section>
      <Section>
        <SubTitle>Mood, Stress and Longevity: Convergence on ANK3. (2016)</SubTitle>
        <List>
          <ListItem>List of genes at different steps of discovery, prioritization, and validation</ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Towards understanding and predicting suicidality in women: biomarkers and clinical risk assessment. (2016)</SubTitle>
        <List>
          <ListItem>Demographic and Clinical Data</ListItem>
          <ListItem>Biomarkers Discovery Prioritization and Validation</ListItem>
          <ListItem>Testing of Predictive Ability for Suicidal Ideation and for Future Hospitalizations for Suicidality</ListItem>
          <ListItem><a href="path/to/SASS.pdf" target="_blank" rel="noopener noreferrer">SASS: Simplified Affective State Scale (PDF file)</a></ListItem>
          <ListItem><a href="path/to/CFI-S.pdf" target="_blank" rel="noopener noreferrer">Convergent Functional Information for Suicide Scale (PDF file)</a> (Instructions) (App Version 4.8.1) (Manual)</ListItem>
          <ListItem><a href="path/to/instructions.docx" target="_blank" rel="noopener noreferrer">Instructions for downloading and installing apps (Word document)</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Understanding and Predicting Suicidality Using a Combined Genomic and Clinical Risk Assessment Approach. (2015)</SubTitle>
        <List>
          <ListItem>Demographic and Clinical Data</ListItem>
          <ListItem>Biomarkers Discovery Prioritization and Validation</ListItem>
          <ListItem>Testing of Predictive Ability for Suicidal Ideation and for Future Hospitalizations for Suicidality</ListItem>
          <ListItem><a href="path/to/SASS.pdf" target="_blank" rel="noopener noreferrer">SASS: Simplified Affective State Scale (PDF file)</a></ListItem>
          <ListItem><a href="path/to/CFI-S.pdf" target="_blank" rel="noopener noreferrer">Convergent Functional Information for Suicide Scale (PDF file)</a> (Instructions) (App Version 4.8.1) (Manual)</ListItem>
          <ListItem><a href="path/to/instructions.docx" target="_blank" rel="noopener noreferrer">Instructions for downloading and installing apps (Word document)</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Genetic Risk Prediction and Neurobiological Understanding of Alcoholism. (2014)</SubTitle>
        <List>
          <ListItem><a href="path/to/data" target="_blank" rel="noopener noreferrer">View Data on our Website</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Discovery and Validation of Blood Biomarkers for Suicidality. (2013)</SubTitle>
        <List>
          <ListItem><a href="path/to/data" target="_blank" rel="noopener noreferrer">View Data on our Website</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Convergent Functional Genomics of Schizophrenia: From Comprehensive Understanding to Genetic Risk Prediction. (2012)</SubTitle>
        <List>
          <ListItem><a href="path/to/data" target="_blank" rel="noopener noreferrer">View Data on our Website</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Convergent Functional Genomics of Anxiety Disorders: Translational Identification of Genes, Biomarkers, Pathways and Mechanisms. (2011)</SubTitle>
      </Section>
      <Section>
        <SubTitle>Convergent Functional Genomic Studies of Omega-3 Fatty Acids in Stress Reactivity, Bipolar Disorder and Alcoholism. (2011)</SubTitle>
      </Section>
      <Section>
        <SubTitle>Convergent Functional Genomics of Genome-Wide Association Data for Bipolar Disorder: Comprehensive Identification of Candidate Genes, Pathways and Mechanisms. (2009)</SubTitle>
        <List>
          <ListItem><a href="path/to/data" target="_blank" rel="noopener noreferrer">View Data on our Website</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Identifying blood biomarkers for mood disorders using convergent functional genomics. (2009)</SubTitle>
      </Section>
      <Section>
        <SubTitle>Identifying blood biomarkers for psychosis using convergent functional genomics. (2009)</SubTitle>
      </Section>
      <Section>
        <SubTitle>Phenomic, convergent functional genomic and biomarker studies in a stress-reactive genetic animal model of bipolar disorder and co-morbid alcoholism. (2008)</SubTitle>
      </Section>
      <Section>
        <SubTitle>High Probability Candidate Genes, Pathways, and Mechanisms for Bipolar (Manic-Depressive) and Related Disorders Identified Through a Comprehensive Convergent Functional Genomics Approach.</SubTitle>
        <List>
          <ListItem><a href="path/to/data" target="_blank" rel="noopener noreferrer">View Data on our Website</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Towards Understanding The Schizophrenia Code: An Expanded Convergent Functional Genomics Approach (2007)</SubTitle>
        <List>
          <ListItem><a href="path/to/data" target="_blank" rel="noopener noreferrer">View Data on our Website</a></ListItem>
        </List>
      </Section>
      <Section>
        <SubTitle>Candidate Genes, Pathways And Mechanisms For Alcoholism: An Expanded Convergent Functional Genomics Approach. (2007)</SubTitle>
      </Section>
      <Section>
        <SubTitle>PhenoChipping Of Psychotic Disorders: A Novel Approach For Deconstructing And Quantitating Psychiatric Phenotypes. (2006)</SubTitle>
      </Section>
      <Section>
        <SubTitle>INBRAIN - Indiana Center for Biomarker Research In Neuropsychiatry</SubTitle>
        <List>
          <ListItem><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Link to Website</a></ListItem>
        </List>
      </Section>
    </Container>
  );
}

export default CurrentResearch;
