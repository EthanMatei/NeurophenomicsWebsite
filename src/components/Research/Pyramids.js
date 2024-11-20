import React from 'react';
import styled from 'styled-components';
import py1 from '../../assets/Pyramid1.png';
import py2 from '../../assets/Pyramid2.png';
import py3 from '../../assets/Pyramid3.png';
import py4 from '../../assets/Pyramid4.png';
import py5 from '../../assets/Pyramid5.png';
import py6 from '../../assets/Pyramid6.png';
import py7 from '../../assets/Pyramid7.png';
import py8 from '../../assets/Pyramid8.png';
import py9 from '../../assets/Pyramid9.png';
import py10 from '../../assets/Pyramid10.jpg';
import py11 from '../../assets/Pyramid11.jpg';
import py12 from '../../assets/Pyramid12.jpg';
import py13 from '../../assets/Pyramid13.jpg';
import py14 from '../../assets/Pyramid14.jpg';
import py15 from '../../assets/Pyramid15.jpg';
import py16 from '../../assets/Pyramid16.jpg';
import py17 from '../../assets/Pyramid17.jpg';
import py18 from '../../assets/Pyramid18.jpg';
import py19 from '../../assets/Pyramid19.jpg';
import py20 from '../../assets/pyramid20.jpg';
import py21 from '../../assets/pyramid21.jpg';
import py22 from '../../assets/Pyramid22.jpg';





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

function Pyramids() {
  return (
    <Container>
      <Title>Prioritizing Candidate Genes and Biomarkers for Psychiatric Disorders using Convergent Functional Genomics</Title>
      <Section>
        <SubTitle>Blood biomarkers for memory: toward early detection of risk for Alzheimer disease, pharmacogenomics, and repurposed drugs.</SubTitle>
        <List>
          <ListItem>
            Niculescu AB, Le-Niculescu H, Roseberry K, Wang S, Hart J, Kaur A, Robertson H, Jones T, Strasburger A, Williams A, Kurian SM, Lamb B, Shekhar A, Lahiri DK, Saykin AJ. Mol Psychiatry. 2019 Dec 2. doi: 10.1038/s41380-019-0602-2. [Epub ahead of print] PMID: 31792364.
          </ListItem>
          <img src={py1} alt="Pyramid1" />
        </List>
      </Section>
      <Section>
        <SubTitle>Towards Precision Medicine for Pain: Diagnostic Biomarkers and Repurposed Drugs</SubTitle>
        <List>
          <ListItem>
            Niculescu AB, Le-Niculescu H, Levey DF, Roseberry K, Soe KC, Rogers J, Khan F, Jones T, Judd S, McCormick MA, Wessel AR, Wiliams A, Kurian SM, White FA. Molecular Psychiatry. 2019 Feb 12. doi: 10.1038/s41380-018-0345-5. [Epub ahead of print] PMID: 30755720.
          </ListItem>
          <img src={py2} alt="Pyramid2" />
        </List>
      </Section>
      <Section>
        <SubTitle>Precision medicine for suicidality: from universality to subtypes and personalization.</SubTitle>
        <List>
          <ListItem>
            Niculescu AB, Le-Niculescu H, Levey DF, Phalen PL, Dainton HL, Roseberry K, Niculescu EM, Niezer JO, Williams A, Graham DL, Jones TJ, Venugopal V, Ballew A, Yard M, Gelbart T, Kurian SM, Shekhar A, Schork NJ, Sandusky GE, Salomon DR. Mol Psychiatry. 2017 Sep;22(9):1250-1273. doi: 10.1038/mp.2017.128. Epub 2017 Aug 15. PMID: 28809398.
          </ListItem>
          <img src={py3} alt="Pyramid3" />
        </List>
      </Section>
      <Section>
        <SubTitle>Mood, stress and longevity: convergence on ANK3.</SubTitle>
        <List>
          <ListItem>
            Rangaraju S, Levey DF, Nho N, Jain N, Andrews KD, Le-Niculescu H, Salomon DR, Saykin AJ, Petrascheck M, and Niculescu AB. Molecular Psychiatry 2016 May 24 doi: 10.1038/mp.2016.65.
          </ListItem>
          <img src={py4} alt="Pyramid4" />
        </List>
      </Section>
      <Section>
        <SubTitle>Towards understanding and predicting suicidality in women: biomarkers and clinical risk assessment.</SubTitle>
        <List>
          <ListItem>
            Levey DF, Niculescu EM, Le-Niculescu H, Dainton HD, Phalen PL, Ladd TB, Weber H, Belanger E, Graham DL, Khan FN, Vanipenta NP, Stage EC, Ballew A, Yard M, Gelbart T, Shekhar A, Schork NJ, Kurian SM, Sandusky GE, Salomon DR, Niculescu AB. Molecular Psychiatry 2016 April 5 doi: 10.1038/mp.2016.31.
          </ListItem>
          <img src={py5} alt="Pyramid5" />
        </List>
      </Section>
      <Section>
        <SubTitle>Understanding and predicting suicidality using a combined genomic and clinical risk assessment approach.</SubTitle>
        <List>
          <ListItem>
            Niculescu AB, Levey DF, Phalen PL, Le-Niculescu H, Dainton HD, Jain N, Belanger E, James A, George S, Weber H, Graham DL, Schweitzer R, Ladd TB, Learman R, Niculescu EM, Vanipenta NP, Khan FN, Mullen J, Shankar G, Cook S, Humbert C, Ballew A, Yard M, Gelbart T, Shekhar A, Schork NJ, Kurian SM, Sandusky GE, Salomon DR. Molecular Psychiatry 2015 Epub August 18.
          </ListItem>
          <img src={py6} alt="Pyramid6" />
        </List>
      </Section>
      <Section>
        <SubTitle>Genetic Risk Prediction and Neurobiological Understanding of Alcoholism.</SubTitle>
        <List>
          <ListItem>
            D.F. Levey, H. Le-Niculescu, J. Frank, M. Ayalew, N. Jain, B. Kirlin, R. Learman, E. Winiger, Z.A. Rodd, A. Shekhar, N.J. Schork, F, Kiefe, N. Wodarz, B. Müller-Myhsok, N. Dahmer, GESGA Consortium, M. Nöthen, R. Sherva, L. Farrer, A.H. Smith, H. Kranzler, M. Rietschel, J. Gelernter, A.B. Niculescu. Translational Psychiatry. Epub 2014 May 20.
          </ListItem>
          <ListItem>
          Top candidate genes for alcoholism.
          </ListItem>
          <img src={py7} alt="Pyramid7" />
        </List>
      </Section>
      <Section>
        <SubTitle>Discovery and validation of blood biomarkers for suicidality.</SubTitle>
        <List>
          <ListItem>
            Le-Niculescu H, Levey D, Ayalew M, Palmer L, Gavrin LM, Jain N, Winiger E, Bhosrekar S, Shankar G, Radel M, Bellanger E, Duckworth H, Olesek K, Vergo J, Schweitzer R, Yard M, Ballew A, Shekhar A, Sandusky GE, Schork NJ, Kurian SM, Salomon DR, Niculescu AB. Molecular Psychiatry. Epub 2013 August 20.
          </ListItem>
          <ListItem>
          Top candidate blood biomarkers for suicidality.
          </ListItem>
          <img src={py8} alt='Pryamid8' />
        </List>
      </Section>
      <Section>
        <SubTitle>Convergent Functional Genomics of Schizophrenia: From Comprehensive Understanding to Genetic Risk Prediction.</SubTitle>
        <List>
          <ListItem>
            Ayalew M, Le-Niculescu H, Levey D, Jain N, Changala B, Patel SD, Winiger E, Breier A, Shekhar A, Amdur R, Koller D, Nurnberger JI, Corvin A, Geyer M, Tsuang MT, Salomon DR, Schork NJ, Fanous A, O'Donovan M, Niculescu AB. Molecular Psychiatry. Epub 2012 May 15.
          </ListItem>
          <ListItem>
          Top candidate genes for schizophrenia.
          </ListItem>
          <img src={py9} alt='Pyramid9' />
        </List>
      </Section>
      <Section>
        <SubTitle>Convergent functional genomics of anxiety disorders: translational identification of genes, biomarkers, pathways and mechanisms.</SubTitle>
        <List>
          <ListItem>
            Le-Niculescu H, Balaraman Y, Patel SD, Ayalew M, Gupta J, Kuczenski R, Shekhar A, Schork N, Geyer MA and Niculescu AB. Translational Psychiatry 2011. Epub 2011 May 24.
          </ListItem>
          <ListItem>
          Top candidate genes for anxiety.
          </ListItem>
          <img src={py10} alt='Pyramid10' />
        </List>
      </Section>
      <Section>
        <SubTitle>Convergent functional genomic studies of omega-3 fatty acids in stress reactivity, bipolar disorder and alcoholism.</SubTitle>
        <List>
          <ListItem>
            Le-Niculescu H, Case NJ, Hulvershorn L, Patel SD, Bowker D, Gupta J, Bell R, Edenberg HJ, Tsuang MT, Kuczenski R, Geyer MA, Rodd Z, Niculescu AB. Translational Psychiatry 2011. Epub April 26.
          </ListItem>
          <ListItem>
          Top candidate genes changed in DBP knockout (KO) stressed (ST) mice on high- vs low-docosahexaenoic acid (DHA) diet. (a) Female mice and (b) Male mice
          </ListItem>
          <img src={py11} alt='Pyramid11' />
        </List>
      </Section>
      <Section>
        <SubTitle>Mindscape: A convergent perspective on life, mind, consciousness and happiness.</SubTitle>
        <List>
          <ListItem>
            Niculescu AB, Schork NJ, Salomon DR. Journal of Affective Disorders. 2010 Jun;123(1-3):1-8.
          </ListItem>
          <ListItem>
          Genetic heterogeneity and complexity.
          </ListItem>
          <img src={py12} alt='pyramid12' />
        </List>
      </Section>
      <Section>
        <SubTitle>Coming to Grips With Complex Disorders: Genetic Risk Prediction in Bipolar Disorder Using Panels of Genes Identified Through Convergent Functional Genomics.</SubTitle>
        <List>
          <ListItem>
            Patel SD, Le-Niculescu H, Koller DL, Green SD, Lahiri DK, McMahon F, Nurnberger JI, Niculescu AB. American Journal of Medical Genetics Part B (Neuropsychiatric Genetics). 2010 Jun 5;153B(4):850-77.
          </ListItem>
          <ListItem>
          Top bipolar candidate genes.
          </ListItem>
          <img src={py13} alt='pyramid13' />
        </List>
      </Section>
      <Section>
        <SubTitle>Identification of blood biomarkers for psychosis using convergent functional genomics.</SubTitle>
        <List>
          <ListItem>
            SM Kurian, H Le-Niculescu, SD Patel, D Bertram, J Davis, C Dike, N Yehyawi, P Lysaker, J Dustin, M Caligiuri, J Lohr, DK Lahiri, JI Nurnberger Jr, SV Faraone, MA Geyer, MT Tsuang, NJ Schork, DR Salomon and AB Niculescu. Molecular Psychiatry (2009), 1–22.
          </ListItem>
          <ListItem>
          Top blood candidate biomarker genes for (a) hallucinations and (b) delusions.
          The CFG lines of evidence scoring are depicted on the right side of the pyramid.
          </ListItem>
          <img src={py14} alt='pyramid14' />
          <img src={py15} alt='pyramid15' />
        </List>
      </Section>
      <Section>
        <SubTitle>Convergent Functional Genomics of Genome-Wide Association Data for Bipolar Disorder: Comprehensive Identification of Candidate Genes, Pathways and Mechanisms.</SubTitle>
        <List>
          <ListItem>
            H. Le-Niculescu, S.D. Patel, M. Bhat, R. Kuczenski, S.V. Faraone, M.T. Tsuang, F.J. McMahon, N.J. Schork, J.I. Nurnberger Jr., and A.B. Niculescu III. American Journal of Medical Genetics Part B (Neuropsychiatric Genetics). 2009 Mar 5 150B(2):155-181.
          </ListItem>
          <ListItem>
          Top Candidate Genes for Bipolar Disorder Identified by CFG of GWAS data.
          </ListItem>
          <img src={py16} alt='pyramid16' />
        </List>
      </Section>
      <Section>
        <SubTitle>Identifying blood biomarkers for mood disorders using convergent functional genomics.</SubTitle>
        <List>
          <ListItem>
            H. Le-Niculescu, S. M. Kurian, N. Yehyawi, C. Dike, S.D. Patel, H.J. Edenberg, M. T. Tsuang, D. R. Salomon, J. I. Nurnberger Jr, A. B. Niculescu. Molecular Psychiatry. 2009 Feb;14(2):156-74.
          </ListItem>
          <ListItem>
          Top Blood Candidate Biomarker Genes for Mood State.
          </ListItem>
          <img src={py17} alt='pyramid17' />
        </List>
      </Section>
      <Section>
        <SubTitle>Phenomic, convergent functional genomic and biomarker studies in a stress-reactive genetic animal model of bipolar disorder and co-morbid alcoholism.</SubTitle>
        <List>
          <ListItem>
            Le-Niculescu H, McFarland MJ, Ogden CA, Balaraman Y, Patel S, Tan J, Rodd ZA, Paulus M, Geyer M, Edenberg HJ, Glatt SJ, Faraone SV, Nurnberger JI, Kuczenski R, Tsuang MT and Niculescu AB. American Journal of Medical Genetics Part B (Neuropsychiatric Genetics). 2008 Mar 5;147(2):134-166.
          </ListItem>
          <ListItem>
          Top candidate genes. a) DBP KO NST; b) DBP KO ST.
          </ListItem>
            <img src={py18} alt='pyramid18' />
            <img src={py19} alt='pyramid19' />
        </List>
      </Section>
      <Section>
        <SubTitle>Towards Understanding the Schizophrenia Code: An Expanded Convergent Functional Genomics Approach.</SubTitle>
        <List>
          <ListItem>
            Le-Niculescu H, Balaraman Y, Patel S, Tan J, Sidhu K, Jerome RE, Edenberg HJ, Kuczenski R, Geyer MA, Nurnberger JI Jr, Faraone SV, Tsuang MT, Niculescu AB. American Journal of Medical Genetics Part B (Neuropsychiatric Genetics). 2007 Mar 5;144(2):129-58.
          </ListItem>
          <ListItem>
          Top Candidate Genes Identified by CFG for Schizophrenia
          </ListItem>
          <img src={py20} alt='pyramid20' />
        </List>
      </Section>
      <Section>
        <SubTitle>Candidate genes, pathways and mechanisms for alcoholism: an expanded convergent functional genomics approach.</SubTitle>
        <List>
          <ListItem>
            Z.A.Rodd, B.A.Bertsch, W.N.Strother, H.Le-Niculescu, Y.Balaraman, E.Hayden, R.E.Jerome, L.Lumeng, J.I. Nurnberger Jr., H.J.Edenberg, W.J.McBride, and A.B.Niculescu. The Pharmcogenomics Journal. 2007; 7: 222-56.
          </ListItem>
          <ListItem>
          Top Candidate Genes Identified by CFG for Alcoholism
          </ListItem>
            <img src={py21} alt='pyramid21' />
        </List>
      </Section>
      <Section>
        <SubTitle>Candidate genes, pathways and mechanisms for bipolar (manic-depressive) and related disorders: an expanded convergent functional genomics approach.</SubTitle>
        <List>
          <ListItem>
            Ogden CA, Rich ME, Schork NJ, Paulus MP, Geyer MA, Lohr JB, Kuczenski R, Niculescu AB. Molecular Psychiatry. 2004; 9:1007-1029.
          </ListItem>
          <ListItem>
          Top Candidate Genes Identified by CFG for Bipolar Disorder
          </ListItem>
          <img src={py22} alt="pyramid22" />
        </List>
      </Section>
    </Container>
  );
}

export default Pyramids;
