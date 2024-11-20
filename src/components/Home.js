import React from 'react';
import styled from 'styled-components';
import largeImage from '../assets/HomeImage.jpg'; // Replace with the path to your image

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  display: flex;

  img {
    width: 65%;
    height: auto;
    justify-content: center;
    border-radius: 10px;
  }
`;

const MissionTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const MissionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

const Quote = styled.blockquote`
  font-size: 1.1rem;
  font-style: italic;
  margin: 30px 0;
  border-left: 5px solid #3498db;
  padding-left: 15px;
  color: #2c3e50;
`;

function Home() {
  return (
    <Container>
      <ImageContainer>
        <img src={largeImage} alt="Lab Mission Visual" />
      </ImageContainer>
      <MissionTitle>Our Mission: Understanding the Mind to Help Save and Improve Lives</MissionTitle>
      <MissionText>
        Mental health is one of the most important subject matters there is. Everything that we do, in our daily lives and in our increasingly knowledge-based economy, is dependent directly or indirectly on the mind. The mind may even influence our viability (as in suicide), and more generally our longevity.
      </MissionText>
      <MissionText>
        On the other hand, psychiatry is lagging behind other medical specialties in terms of understanding of disease, diagnostics, and treatments. It still relies on a non-biologically based, somewhat subjective, diagnostic classification, embodied in the DSM. Drugs are still being developed to treat DSM disorders (as FDA approval is based on DSM).
      </MissionText>
      <MissionText>
        Fortunately, our work on precision medicine in psychiatry can offer a solution to this state of affairs. Our human studies provide specificity for illness and context. Lower organism model studies offer sensitivity of detection of signal, and ability to test molecular and biological circuitry beyond what can be done in humans, due to obvious practical and ethical limitations. Integrating the two broad avenues converges on a real understanding of how the brain works in health and disease. Three developments give future cause for optimism that progress can be made.
      </MissionText>
      <MissionText>
        First is the advent of genomics, with the ability to completely sequence the genome of individuals, and with comprehensive understanding of gene expression patterns underlying neurobiological functioning and phenotype. In that, we have pioneered Convergent Functional Genomics (CFG) and PhenoChipping approaches.
      </MissionText>
      <MissionText>
        Second is the use of peripheral molecular biomarkers, and of patient-derived stem cells to generate neurons and glial cells in culture, leading to an ability to conduct molecular and cellular biology studies, and to test new drug treatments in a personalized way. In that, we have pioneered the discovery of blood biomarkers for psychiatric disorders, and used them to generate leads towards new, personalized, drug and nutraceutical treatments.
      </MissionText>
      <MissionText>
        Third is the programmatic way research is moving beyond DSM criteria, to a domain or dimensional approach. In that, we have pioneered the three-dimensional Mindscape approach, encompassing anxiety, mood and cognition as dimensions. We have been mapping the genomic and phenomic landscape of psychiatric disorders since 1999. We have conducted work in the mind domains of anxiety, mood (bipolar, depression) and cognition (schizophrenia, Alzheimer), along with pain and stress as key environmentally driven components, as well as addictions and suicide as major negative behavioral outcomes, and longevity as a positive behavioral outcome.
      </MissionText>
      <MissionText>
        Psychiatric disorders are a magnifying glass permitting us to examine and understand the normal functioning of the mind. Our work is pointing to anxiety as being underpinned by cellular and whole-body reactivity, mood by activity, and cognition by connectivity. Genetic variants in different combinations and environments lead to a spectrum of phenotypes, from different clinical disorders to normal behavior to the supra-normative performance seen in elite troops, athletes, inventors, mathematicians and artists.
      </MissionText>
      <MissionText>
        We believe a worthwhile goal is to understand, diagnose, treat, prevent, and improve individuals based on their profile of genetic variants, biomarkers, and phenes (quantitative phenotypic data), including clinical and daily life information through apps. The use of lifestyle changes (exercise, nutrition, behaviors), promoting whole-body health, along with the use of medications in rational combinations, can lead to synergistic benefits and minimize side-effects.
      </MissionText>
      <Quote>
        "The future is already here – it's just not evenly distributed" -William Gibson
      </Quote>
      <Quote>
        “A diagnostic tool doesn’t have to be 100 percent accurate- just better than what we have now” -Todd Golub, Broad Institute of MIT and Harvard
      </Quote>
    </Container>
  );
}

export default Home;
