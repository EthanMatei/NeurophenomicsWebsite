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

const PresentationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PresentationItem = styled.li`
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-left: 5px solid #3498db;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 5px;
    color: #34495e;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #7f8c8d;
  }
`;

function RecentPresentations() {
    const presentations = [
        {
          title: "Towards Precision Medicine for Suicidality",
          details: "Oral Presentation, ABCT 53nd Annual Meeting, Atlanta, GA, November 21-24, 2019.",
        },
        {
          title: "Towards Precision Medicine for Mood Disorders",
          details: "Poster Presentation, World Congress of Psychiatric Genetics, Anaheim, CA, October 26-31, 2019.",
        },
        {
          title: "Precision medicine for stress disorders: Diagnostic biomarkers and repurposed drugs",
          details: "Oral Presentation, Society for Neuroscience Annual Meeting, San Diego, CA, November 3-7, 2018.",
        },
        {
          title: "Towards Precision Medicine for Psychosis: Biomarkers for Hallucinations and Delusions",
          details: "Poster Presentation, Society of Biological Psychiatry Annual Meeting, New York, NY, May 10-12.",
        },
        {
          title: "Precision Medicine for Suicidality Using Blood Biomarkers and Apps",
          details: "Oral Presentation, ABCT 51st Annual Meeting, San Diego, CA, November 16-19, 2017.",
        },
        {
          title: "Precision Medicine for Suicidality: From Universality to Subtypes and Personalization",
          details: "Oral Presentation, IASR/AFSP International Summit on Suicide Research, Henderson, NV, November 5-8, 2017.",
        },
        {
          title: "Precision medicine for suicidality: from universality to subtypes and personalization",
          details: "Poster Presentation, World Congress of Psychiatric Genetics, Orlando, FL, October 13-17, 2017.",
        },
        {
          title: "Precision Medicine in Psychiatry",
          details: "Vice President for Research Distinguished Lecture, SUNY Upstate, Syracuse, NY, September 6, 2017.",
        },
        {
          title: "Understanding, Predicting, and Preventing Suicidality",
          details: "Chair and Speaker, Society of Biological Psychiatry Annual Meeting, San Diego, CA, May 18-20, 2017.",
        },
        {
          title: "Biomarkers as a window into diagnosing, understanding, and treating psychiatric disorders",
          details: "Invited Speaker, Molecular Psychiatry Annual Meeting, Park City, UT, February 12-14, 2017.",
        },
        {
          title: "Precision Medicine in Psychiatry: Found, Not Lost, in Translation",
          details: "Chair and Speaker, Society of Biological Psychiatry Annual Meeting, Atlanta, GA, May 12-14, 2016.",
        },
        {
          title: "Genomic and clinical risk predictors for psychiatric disorders: focus on suicide",
          details: "Invited Speaker, Molecular Psychiatry Annual Meeting, Park City, UT, January 31-February 2, 2016.",
        },
        {
          title: "Precision Medicine in Psychiatry",
          details: "Invited Speaker, Neuroscience Global Discovery Forum, J&J, La Jolla, CA, April 29, 2015.",
        },
        {
          title: "Predicting Suicidality Using a Combined Genomic and Clinical Risk Assessment Approach",
          details: "Invited Speaker, Molecular Psychiatry Annual Meeting, Park City, UT, February 9-10, 2015.",
        },
        {
          title: "Convergent Functional Genomics and Phenomics of Psychiatric Disorders",
          details: "Invited Speaker, 11th Imaging Genetics Conference, UC Irvine, CA, January 19-20, 2015.",
        },
        {
          title: "Blood and Brain gene expression convergence: Implications for blood-based biomarkers",
          details: "Symposium, American College of Neuropharmacology (ACNP) Annual Meeting, Phoenix, AZ, December 7-11, 2014.",
        },
        {
          title: "Gene Expression: the Rosetta Stone for Psychiatric Disorders",
          details: "Chair and Speaker, Symposium, Molecular Psychiatry meeting, San Francisco, CA, November 7-9, 2014.",
        },
        {
          title: "Mapping Psychiatric Disorders Using Convergent Functional Genomics",
          details: "Invited Seminar, Stanley Institute for Cognitive Genomics Lecture Series, Cold Spring Harbor Laboratory, NY, October 29, 2014.",
        },
        {
          title: "Next generation blood biomarkers for psychiatric disorders: the power of within-subject longitudinal designs",
          details: "Oral Presentation, Molecular Psychiatry Annual Meeting, Park City, UT, February 6-8, 2014.",
        },
        {
          title: "Discovery and Validation of Blood Biomarkers for Suicidality",
          details: "Speaker, World Congress of Psychiatric Genetics (WCPG), Boston, MA, October 17-21, 2013.",
        },
        {
          title: "Genomics and Phenomics of Psychiatric Disorders: From Genetics to Biology to Personalized Medicine",
          details: "Invited Seminar, The Scripps Research Institute, La Jolla, CA, September 20, 2013.",
        },
        {
          title: "Bridging Genetic Networks to Pathophysiology in Schizophrenia",
          details: "Speaker, Symposium, Society of Biological Psychiatry Annual Meeting, San Francisco, CA, May 15-18, 2013.",
        },
        {
          title: "Tackling Suicide",
          details: "Oral Presentation, Molecular Psychiatry Annual Meeting, Park City, UT, February 3-5, 2013.",
        },
        {
          title: "Next Generation Data Integration",
          details: "Co-Chair and Speaker, Symposium, World Congress of Psychiatric Genetics, Hamburg, Germany, October 14-18, 2012.",
        },
        {
          title: "8th Annual NIH Director's Pioneer Award Symposium",
          details: "Speaker, Bethesda, MD, September 13-14, 2012.",
        },
        {
          title: "Biomarkers in psychiatry: from genetics to biology to predictive medicine",
          details: "Invited Speaker, International Society of Human Genetics (ISHG)/American Society of Human Genetics (ASHG) Joint Annual Meeting, Montreal, Canada, October 15, 2011.",
        },
        {
          title: "Convergent Functional Genomics of Anxiety Disorders",
          details: "Oral Presentation, World Congress of Psychiatric Genetics (WCPG), Washington, DC, September 14, 2011.",
        },
        {
          title: "Psychiatric Phenomics: Found (not lost) in translation",
          details: "Invited Speaker, American Psychiatric Association (APA) Annual Meeting, Honolulu, HI, May 15, 2011.",
        },
        {
          title: "Personalized Medicine in Psychiatry: from Genomics to Clinic",
          details: "Grand Rounds, Department of Psychiatry, Rush University Medical Center, Chicago, October 27, 2010.",
        },
        {
          title: "Convergent Functional Genomics: Data integration across species, modalities and platforms identifies candidate genes, blood biomarkers, pathways and mechanisms",
          details: "Invited Faculty, Short Course on the Genetics of Addiction, The Jackson Laboratory, Bar Harbor, ME August 14-18, 2010.",
        },
        {
          title: "Deciphering Bipolar Disorder: Insights for Improved Research Strategies",
          details: "Invited Speaker, New York Academy of Sciences, December 15, 2009.",
        },
      ];

  return (
    <Container>
      <Title>Recent Presentations</Title>
      <PresentationList>
        {presentations.map((presentation, index) => (
          <PresentationItem key={index}>
            <h3>{presentation.title}</h3>
            <p>{presentation.details}</p>
          </PresentationItem>
        ))}
      </PresentationList>
    </Container>
  );
}

export default RecentPresentations;
