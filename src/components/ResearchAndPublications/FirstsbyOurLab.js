import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`;

const AchievementList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  background-color: #f9f9f9;
  margin-bottom: 15px;
  padding: 15px;
  border-left: 5px solid #3498db;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function FirstsByOurLab() {
  const achievements = [
    "Early use of first commercially available Affymetrix microarrays to study gene expression in different brain regions (1999)",
    "First gene-level integration of genetics and gene expression, in human and animal model studies, for identification and prioritization of candidate genes for psychiatric disorders (Convergent Functional Genomics) (2000)",
    "First proof of a candidate blood biomarker gene (2000)",
    "First experimental evidence for circadian clock genes involvement in bipolar mood disorders (2000, 2004)",
    "Conceptualization of genes involved in psychiatric disorders as being risk genes (psychogenes, by analogy with oncogenes) and protective genes (psychosis-suppressor genes, by analogy to tumor-suppressor genes) (2000)",
    "\"Genes that change (in expression) together (may) work together\": co-acting gene expression groups (CAGE) (2000)",
    "Coined the term phenomics and proposed to use genomic methodologies to study phenotypes, the weakest link in psychiatry (2002)",
    "Agonist and antagonist pharmacogenomics in mouse models for psychiatric disorders, where the interference of drugs provides additional information compared to the single drug treatment arms (2004, 2007, 2011)",
    "Evidence that the repertoire of genes involved in psychiatric disorders is large (thousands of genes) (2004)",
    "Early emphasis on biological pathways and mechanisms as a way of understanding psychiatric disorders and showing reproducibility across studies (2004)",
    "Early emphasis on repositioning of existing drugs using genomics (2004)",
    "Evidence of myelin-related genes being downregulated in expression in animal models of various psychiatric disorders, not just in human postmortem brains, indicating the findings are real and not brain aging-related artefacts, and proposing that demyelination is a common if non-specific denominator of psychiatric disorders (2004, 2006, 2007, 2008, 2011)",
    "Evidence for complexity, heterogeneity, overlap and interdependence at a genomic level between the major psychiatric disorders by mapping the genomic landscape of bipolar disorder, alcoholism, schizophrenia, and anxiety disorders (2004, 2006, 2007, 2011)",
    "Use of quantitative microarray-type clustering approaches for the empirical studying of psychiatric phenotypes in bipolar disorder and schizophrenia (PhenoChipping), demonstrating phenomics level complexity, heterogeneity and overlap (2006)",
    "Early emphasis on personalized medicine and rational polypharmacy approaches (2006)",
    "The first genetic animal model mimicking both phases of bipolar disorder (depression, mania) (2008)",
    "Pioneered the use of fresh whole blood for biomarker work, to make it easy to deploy in the field and to avoid artefacts, as opposed to using purified white blood cells or immortalized lymphoblastoid cell lines (2008)",
    "First brain-blood studies in animal models to identify candidate biomarkers (2008)",
    "First human blood biomarkers for mood disorders (2008)",
    "First evidence of predictive ability in completely independent cohorts for panels of human blood biomarkers (2008)",
    "First demonstrated use of a polygenic score, used for biomarkers (2008)",
    "A tri-dimensional model for the mental landscape, with anxiety, mood, and cognition as axes (Mindscape) (2009)",
    "First demonstrations of extracting reproducible results from GWAS datasets using integration of multiple lines of evidence (CFG) (2010, 2012)",
    "First demonstrations of the power of genetic risk prediction scoring (GRPS) with a limited number of highly prioritized candidate genes (2010, 2012)",
    "Making the fundamental argument that reproducibility across studies is more important than p-value in individual studies (\"the p-value illusion\"), due to genetic heterogeneity, and that the SNP level focus of GWASes brings to the fore primarily housekeeping genes (2010)",
    "First mapping of the genomic effects of omega-3 fatty acids (2011)",
    "First in vivo evidence that omega-3 fatty acids reverse myelin-related gene expression decreases (2011)",
    "First evidence that omega-3 fatty acids decrease alcohol consumption (2011)",
    "First evidence of major gene expression differences between genders in animal model studies (2011)",
    "First major proof of genetic overlap between schizophrenia and anxiety disorders, introducing the term schizoanxiety disorder, by analogy to schizoaffective disorder (2011)",
    "Comprehensive mapping of the genetic biological landscape of schizophrenia using CFG, with top findings showing unprecedented reproducibility in four independent large cohorts of two different ethnicities (2012)",
    "First identification, validation, and evidence of predictive ability in independent cohorts for blood gene expression biomarkers for suicidality, in live people and suicide completers, alone and in combination with clinical data (2013)",
    "Comprehensive mapping of the genetic and biological landscape of alcoholism using CFG, with top findings showing unprecedented reproducibility in three independent large cohorts, of two different ethnicities, from two continents, and in both genders (2014)",
    "Integration of blood biomarkers and apps to predict suicidality in men (2015)",
    "Developed the Convergent Functional Evidence (CFE) approach for biomarker discovery, prioritization, validation, and testing for clinical validity in multiple independent cohorts (2015)",
    "Integration of blood biomarkers and apps to predict suicidality in women (2016)",
    "Discovery of genes and blood biomarkers at the interface of mood, stress, and longevity (2016)",
    "Development of precision medicine for suicidality, from diagnostics to medications, and identification of subtypes of suicidality (2017)",
    "A simple polyphenic risk score for predicting suicidality risk without asking them if they have suicidal ideation (2019)",
    "First identification, validation, and evidence of predictive ability in independent cohorts for blood gene expression biomarkers for pain, using cross-sectional and longitudinal approaches (2019)",
    "First identification, validation, and evidence of predictive ability in independent cohorts for blood gene expression biomarkers for stress/PTSD (2020)",
    "Demonstrating the convergence of biomarkers and independent GWAS data for suicidality (2020)",
    "Development of precision medicine for memory disorders/Alzheimer’s, from diagnostics to repurposed medications (2020)",
    "Development of precision medicine for mood disorders (depression, bipolar), from biomarkers to repurposed medications (2021)",
    "Development of precision medicine for anxiety disorders, from biomarkers to repurposed medications (2023)",
    "First identification of temporal effects on death by suicide (2023)",
    "Development of precision medicine for psychotic disorders/schizophrenia, from biomarkers to  pharmacogenomics (2024)",
    "Next-generation precision medicine  studies for suicidality, showing reproducibility across multiple platforms and independent cohorts, pharmacogenomics, and repurposed drugs (2024)",
  ];


  return (
    <Container>
      <Title>Firsts by Our Group</Title>
      <AchievementList>
        {achievements.map((achievement, index) => (
          <AchievementItem key={index}>{achievement}</AchievementItem>
        ))}
      </AchievementList>
    </Container>
  );
}

export default FirstsByOurLab;
