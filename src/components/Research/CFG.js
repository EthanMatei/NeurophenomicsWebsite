import React from 'react';
import styled from 'styled-components';
import largeImage from '../../assets/CFGimg.jpg';

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

const Section = styled.div`
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.75rem;
`;

const Paragraph = styled.p`
  color: #4f4f4f;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function CFG() {
  return (
    <Container>
      <Title>Convergent Functional Genomics (CFG)</Title>
      <Quote>
        “The increasing volume of information is just more opportunity to build better answers to questions. The more information you have, the better” - Larry Page, Google
      </Quote>
      <Section>
        <Paragraph>
          We have initiated and developed since 1999 (Niculescu et al. 2000) a translational methodology, Convergent Functional Genomics (CFG), that integrates in a Bayesian fashion multiple lines of evidence from human and animal model studies. Human data increase the relevance to the disorder (specificity), whereas animal model data increase the ability to identify the signal (sensitivity). Combined, we have an approach that increases our ability to distinguish signal from noise even with limited size cohorts and datasets. The CFG approach also increases the likelihood that the findings will prove reproducible and have predictive power in independent cohorts, which is a key litmus test for genetic and biomarker studies.
        </Paragraph>
        <Paragraph>
          The emerging picture from psychiatric genetics, in which our CFG approach has had a decade's head start, is that gene-level, followed by pathway-level and mechanisms-level, analyses appear to be the way to go, as opposed to focusing exclusively on identifying genetic polymorphisms. The latter method of analysis by itself is proving unwieldy because of the sheer number of common and rare variants involved (complexity) and the diversity (heterogeneity) in the population. A combined approach such as CFG, which is focused on gene-level integration, can harness the present and future body of work in the field to yield a successful outcome, truly reflecting, in essence, a field-wide collaboration.
        </Paragraph>
        <Paragraph>
          We have built in our laboratory a large and evolving CFG-curated database, integrating our own datasets and published data in the field of psychiatric genetics and genomics, comprising at this point over 13,000 genes. Using this database, there is an emerging appreciation at genetic, neurobiological, and phenotypic levels of the complexity, heterogeneity, overlap, and interdependence of major psychiatric disorders. For example, in our earlier work we have provided evidence of a significant molecular overlap between bipolar disorder and schizophrenia (Le-Niculescu et al, 2007), which has been confirmed by more recent independent studies. Based on our work and that of others in the field, we believe that the contextual cumulative combinatorics of common (normal) genetic variants may underlie the vulnerability or resilience to disease, in lieu of or in addition to rare (abnormal) mutations.
        </Paragraph>
        <Paragraph>
          We have proposed a combinatorial modular Lego game-like model for psychiatric disorders. It is likely that panels of markers (SNPs, biomarkers) rather than single markers will emerge as useful profiling tools for personalized/precision medicine approaches.
        </Paragraph>
      </Section>

      {/* Image element added here */}
      <img src={largeImage} alt="Lab Mission Visual" />

      <Section>
        <Paragraph>
          This Bayesian strategy for cross-validating findings extracts meaning from large datasets by prioritizing candidate genes, pathways, and mechanisms; which are then targeted by subsequent hypothesis-driven research. Top candidate genes, for which there are multiple independent lines of evidence, are less likely to be false positives. The network of lines of evidence for each gene is resilient, even if one or another of the nodes (lines of evidence) is less than optimal.
        </Paragraph>
        <Paragraph>
          In the end, the results speak for themselves in terms of the ability of our Convergent Functional Genomics approach to extract signal and prioritize findings, similar to a Google PageRank algorithm, from large and potentially noisy datasets. The CFG approach has been successfully applied to bipolar disorder, schizophrenia, anxiety, alcoholism, and blood biomarker discovery.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Biomarkers</SubTitle>
        <Paragraph>
          Biomarkers: concordant gene expression in brain and peripheral tissues such as blood, due to inherited genetic factors (e.g., promoter regions, signal transduction modules) or external factors (medications, stress and other environmental effects).
        </Paragraph>
        <Paragraph>
          TESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTINGTESTING
          </Paragraph>
      </Section>
    </Container>
  );
}

export default CFG;
