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

const Question = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  color: #34495e;
`;

const Answer = styled.p`
  margin: 0;
  padding: 0 10px;
  color: #2c3e50;
`;

const List = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

function BiomarkerFAQ() {
  const faqs = [
    {
      question: "Why blood?",
      answer: "Accessibility, as the brain cannot be biopsied; less painful and easier to collect than CSF.",
    },
    {
      question: "Why gene expression and not proteomics?",
      answer:
        "Gene expression reflects gene-environment interactions and underlies biological function. For discovery, it is far more powerful and precise than proteomics, as it lends itself to whole-genome arrays or sequencing, and Convergent Functional Genomics analytics. Moreover, some RNAs are just regulatory, do not translate into proteins, and we would miss them with proteomics. After gene expression biomarkers are discovered and validated, their protein counterpart levels can be assessed and tested in a hypothesis-driven fashion for clinical use, if one desires.",
    },
    {
      question: "Why whole blood?",
      answer:
        "Ease of collection. Minimal manipulation of blood by not separating different cell types, so good RNA preservation. Ease of deployment in the field for population studies.",
    },
    {
      question: "Why not immortalized lymphoblastoid cell lines?",
      answer:
        "Because they can be riddled with Epstein-Barr virus (EBV) induced artifacts, cell culture passaging artifacts, and have no direct correlation with measured clinical state.",
    },
    {
      question: "Does it matter from which cell type the biomarkers come? What about CBC variations?",
      answer:
        "On the front end (discovery), it does not matter from which blood cells the biomarkers come, as we are not interested in blood cell biology, we just want to find peripheral markers. On the back end, for clinical implementation, after a biomarker is discovered and validated, larger population studies need to be conducted to find normative levels for laboratory testing. At that point, understanding which cell types the biomarkers come from should be done, as variations in CBC (infections, immune disorders) could influence biomarker levels.",
    },
    {
      question: "Why would changes in blood gene expression reflect changes in the brain?",
      answer:
        "Likely due to conserved signal transduction modules in different cell types, similar promoter regions, and common exposure to environmental factors like stress and medications. However, the signal is buried in noise, so you need a good design and methodology for extracting it.",
    },
    {
      question: "Why are we successful with relatively small cohorts?",
      answer: (
        <List>
          <ListItem>
            <strong>Phenotype:</strong> We prefer to study discrete quantitative phenotypes, not broad diagnostic categories. We focus on state markers, correlated with phenes measured at the time of blood draw, not trait markers.
          </ListItem>
          <ListItem>
            <strong>Cohorts:</strong> Separated by gender and ethnicity for homogeneity and noise reduction.
          </ListItem>
          <ListItem>
            <strong>Gene expression:</strong> Gene expression integrates the effects of thousands of SNPs and environmental factors.
          </ListItem>
          <ListItem>
            <strong>Study design:</strong>
            <List>
              <ListItem>
                <strong>Intra-subject design:</strong> Best for factoring out genetic variability. Requires n~101 for gene expression studies.
              </ListItem>
              <ListItem>
                <strong>Case-case design:</strong> Factors out some disease-related variability. Requires n~102 for gene expression studies.
              </ListItem>
              <ListItem>
                <strong>Case-control design:</strong> Least effective due to population heterogeneity and noise. Requires n~103 for gene expression studies.
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <strong>Convergent Functional Genomics (CFG):</strong> A Bayesian method to identify and prioritize disease-related genes from differentially expressed genes in the blood. CFG ensures biomarkers are fit-to-disease rather than fit-to-cohort, allowing reproducibility in independent cohorts.
          </ListItem>
        </List>
      ),
    },
  ];

  return (
    <Container>
      <Title>Biomarker Discovery Efforts - The "Secrets" of Our Success FAQ</Title>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Question>{faq.question}</Question>
          <Answer>{faq.answer}</Answer>
        </div>
      ))}
    </Container>
  );
}

export default BiomarkerFAQ;