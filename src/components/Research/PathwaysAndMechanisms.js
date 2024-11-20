import React from 'react';
import styled from 'styled-components';
import Path1 from '../../assets/Path1.png';
import Path2 from '../../assets/Path2.jpg';
import Path3 from '../../assets/Path3.jpg';
import Path4 from '../../assets/path4.jpg';
import Path5 from '../../assets/Path5.jpg';
import Path6 from '../../assets/Path6.jpg';
import Path7 from '../../assets/Path7.jpg';
import Path8 from '../../assets/Path8.jpg';
import Path9 from '../../assets/Path9.jpg';
import Path10 from '../../assets/Path10.jpg';
import Path11 from '../../assets/Path11.jpg';
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f9f9f9;
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
  color: #34495e;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Paragraph = styled.p`
  color: #4f4f4f;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  color: #4f4f4f;

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function PathwaysAndMechanisms() {
  return (
    <Container>
      <Title>Pathways and Mechanisms</Title>

      <Section>
        <SubTitle>Alcoholism</SubTitle>
        <Paragraph>
          D.F. Levey, H. Le-Niculescu, J. Frank, M. Ayalew, N. Jain, B. Kirlin, R. Learman, E. Winiger, Z.A. Rodd, A. Shekhar, N. J. Schork, F, Kiefe, N. Wodarz, B. Müller-Myhsok, N. Dahmer, GESGA Consortium, M. Nöthen, R. Sherva, L. Farrer, A. H. Smith, H. Kranzler, M. Rietschel, J. Gelernter, A. B. Niculescu. Genetic Risk Prediction and Neurobiological Understanding of Alcoholism. Translational Psychiatry 2014 Epub May 20.
        </Paragraph>
        <Paragraph>Ingenuity, KEGG, and GeneGo Pathway Analyses of top candidate genes for alcoholism.</Paragraph>
        <img src={Path1} alt="Pathways and Mechanisms" />
      </Section>

      <Section>
        <SubTitle>Suicide</SubTitle>
        <Paragraph>
          Le-Niculescu H, Levey D, Ayalew M, Palmer L, Gavrin LM, Jain N, Winiger E, Bhosrekar S, Shankar G, Radel M, Bellanger E, Duckworth H, Olesek K, Vergo J, Schweitzer R, Yard M, Ballew A, Shekhar A, Sandusky GE, Schork NJ, Kurian SM, Salomon DR, Niculescu AB. Discovery and validation of blood biomarkers for suicidality. Molecular Psychiatry 2013 Epub August 20.
        </Paragraph>
        <Paragraph>Ingenuity and KEGG Pathway Analyses of top candidate genes for suicidality.</Paragraph>
        <img src={Path2} alt="Pathways and Mechanisms" />
      </Section>

      <Section>
        <SubTitle>Schizophrenia</SubTitle>
        <Paragraph>
          Ayalew M, Le-Niculescu H, Levey D, Jain N, Changala B, Patel SD, Winiger E, Breier A, Shekhar A, Amdur R, Koller D, Nurnberger JI, Corvin A, Geyer M, Tsuang MT, Salomon DR, Schork NJ, Fanous A, O'Donovan M, Niculescu AB. Convergent Functional Genomics of Schizophrenia: From Comprehensive Understanding to Genetic Risk Prediction. Molecular Psychiatry 2012 Epub May 15.
        </Paragraph>
        <Paragraph>Ingenuity Pathway Analysis of top candidate genes for schizophrenia.</Paragraph>
        <img src={Path3} alt="Pathways and Mechanisms" />
        <Paragraph>A comprehensive model for schizophrenia pathophysiology.</Paragraph>
        <img src={Path4} alt="Pathways and Mechanisms" />
      </Section>

      <Section>
        <SubTitle>Anxiety Disorders</SubTitle>
        <Paragraph>
          Le-Niculescu H, Balaraman Y, Patel SD, Ayalew M, Gupta J, Kuczenski R, Shekhar A, Schork N, Geyer MA, Niculescu AB. Convergent Functional Genomics of Anxiety Disorders: Translational Identification of Genes, Biomarkers, Pathways and Mechanisms. Translational Psychiatry. Epub 2011 May 24.
        </Paragraph>
        <Paragraph>Top biological pathways for anxiety in different brain regions. Overlap between brain regions, and with the blood.</Paragraph>
        <img src={Path5} alt="Pathways and Mechanisms" />
      </Section>

      <Section>
        <SubTitle>Bipolar Disorder</SubTitle>
        <Paragraph>
          Patel SD, Le-Niculescu H, Koller DL, Green SD, Lahiri DK, McMahon F, Nurnberger JI, Niculescu AB. Coming to Grips With Complex Disorders: Genetic Risk Prediction in Bipolar Disorder Using Panels of Genes Identified Through Convergent Functional Genomics. American Journal of Medical Genetics Part B (Neuropsychiatric Genetics). Epub 2010 April 9.
        </Paragraph>
        <Paragraph>Ingenuity Pathway Analysis of top candidate genes for Bipolar Disorder.</Paragraph>
        <img src={Path6} alt="Pathways and Mechanisms" />
      </Section>

      <Section>
        <SubTitle>Psychosis</SubTitle>
        <Paragraph>
          SM Kurian, H Le-Niculescu, SD Patel, D Bertram, J Davis, C Dike, N Yehyawi, P Lysaker, J Dustin, M Caligiuri, J Lohr, DK Lahiri, JI Nurnberger Jr, SV Faraone, MA Geyer, MT Tsuang, NJ Schork, DR Salomon and AB Niculescu. Identification of blood biomarkers for psychosis using convergent functional genomics. Molecular Psychiatry. 2009 Epub Nov 24.
        </Paragraph>
        <Paragraph>Ingenuity Pathway Analysis of top candidate biomarkers.</Paragraph>
        <img src={Path7} alt="Pathways and Mechanisms" />
        <img src={Path8} alt="Pathways and Mechanisms" />
        <Paragraph>Psychosis: disconnection and de-differentiation.</Paragraph>
        <img src={Path9} alt="Pathways and Mechanisms" />
        
      </Section>

      <Section>
        <SubTitle>Bipolar Disorder</SubTitle>
        <Paragraph>
          H. Le-Niculescu, S.D. Patel, M. Bhat, R. Kuczenski, S.V. Faraone, M.T. Tsuang, F.J. McMahon, N.J. Schork, J.I. Nurnberger Jr., and A.B. Niculescu III. Convergent Functional Genomics of Genome-Wide Association Data for Bipolar Disorder: Comprehensive Identification of Candidate Genes, Pathways and Mechanisms. American Journal of Medical Genetics Part B (Neuropsychiatric Genetics). 2009 Mar 5 150B(2):155-181.
        </Paragraph>
        <Paragraph>Ingenuity Pathway Analysis of top candidate genes.</Paragraph>
        <img src={Path10} alt="Pathways and Mechanisms" />
        <Paragraph>A comprehensive model for bipolar disorder pathophysiology.</Paragraph>
        <img src={Path11} alt="Pathways and Mechanisms" />
        
      </Section>
    </Container>
  );
}

export default PathwaysAndMechanisms;
