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

function BipolarGenesFAQ() {
  const faqs = [
    {
      question: "Can you summarize briefly what you found?",
      answer: (
        <>
          We have found a way of combining the latest large-scale international gene hunting studies for bipolar disorder
          (called Genome-Wide Association Studies, GWAS) with our own studies looking at levels of gene activity (gene
          expression) in human blood samples and in animal models, as well as other published lines of evidence, to come
          up with the very best candidate genes for the illness.
          <br />
          <br />
          GWAS studies by themselves have yielded very few statistically significant findings, despite the large number
          of people enrolled and the millions of dollars spent on them. When the data from GWAS is integrated with other
          data as part of our approach, it becomes apparent which genes have a lot of evidence for, and which not. The
          more lines of evidence implicating a gene, the more likely it is involved in bipolar disorder. It is sort of
          like the Google approach, where the more links to a page on the internet, the more likely it is it will come
          up at the top of your search list.
          <br />
          <br />
          We also were able to analyze how these genes work together and come up with a comprehensive biological
          understanding of what bipolar disorder is all about, from an evidence-driven perspective as opposed to a
          theoretical or speculative one. Before, different studies, by us and others, were uncovering different aspects
          of bipolar disorder - sort of like the parable of the blind men and the elephant. Now we have an idea for the
          first time of what the whole elephant might look like. A lot of the pieces of the puzzle are now making sense
          and falling into place.
        </>
      ),
    },
    {
      question: "What were the main findings?",
      answer: (
        <List>
          <ListItem>
            <strong>First:</strong> Based on this work, we now project that there are going to be hundreds of genes
            involved in this illness, possibly as much as 10% of the genome. Not all gene mutations occur in every
            individual with bipolar - different individuals will have different combinations of genes. Still, this
            genetic complexity is likely what made past attempts to identify genes for the disorder through
            genetic-only studies so difficult and inconsistent. There is so much genetic diversity that huge
            population studies, possibly requiring hundreds of thousands of participants, would be needed to get
            statistically significant results for a large number of these bipolar genes. Most studies to date have
            used at most a few thousand subjects.
          </ListItem>
          <ListItem>
            <strong>Second:</strong> Even though we used experimental data (genetic, gene expression, human and animal
            models) from studies of bipolar disorder, some of the top genes and pathways identified are also involved
            in other brain disorders (like schizophrenia or, surprisingly, Alzheimer Disease) as well as
            non-neuropsychiatric disorders like cancer. So there are shared genes and mechanisms with other disorders,
            which has potentially huge implications.
          </ListItem>
        </List>
      ),
    },
    {
      question: "What would be the advantages of identifying these genes?",
      answer: (
        <>
          First, a better understanding of bipolar disorder and related disorders. Second, we will be able to go back in
          individuals and study which combination of genes is present in what individual, to come up with a genetic risk
          score. So even before the illness manifests itself, preventive measures - lifestyle changes, counseling, even
          low dose medications - can be used to delay or abrogate the illness from developing. Third, in individuals who
          already have the illness manifested, genetic testing, in combination with blood biomarkers of disease state,
          can help inform which treatment works or not, reducing costly and distressing trials and errors.
          <br />
          <br />
          The bottom line is that a lot more work needs to be done to validate and understand these findings - in
          different populations, to look at gender differences, effects of environmental variables, etc. This is big
          science, and in the current environment, where the federal funding for science is flat or declining,
          philanthropy can make a huge impact in moving things forward fast, for the benefit of patients and their
          families.
        </>
      ),
    },
    {
      question: "Contact Information",
      answer: (
        <>
          Alexander B. Niculescu III, MD, PhD
          <br />
          Assistant Professor of Psychiatry and Medical Neuroscience, Indiana University School of Medicine
          <br />
          Staff Psychiatrist, Indianapolis VA Medical Center
          <br />
          Director, INBRAIN and Laboratory of Neurophenomics
          <br />
          Institute of Psychiatric Research, 791 Union Drive, Indianapolis, IN 46202-4887
          <br />
          Email: <a href="mailto:anicules@iupui.edu">anicules@iupui.edu</a>
        </>
      ),
    },
  ];

  return (
    <Container>
      <Title>First Comprehensive Map Of Genes Likely To Be Involved In Bipolar Disorder FAQ</Title>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Question>{faq.question}</Question>
          <Answer>{faq.answer}</Answer>
        </div>
      ))}
    </Container>
  );
}

export default BipolarGenesFAQ;
