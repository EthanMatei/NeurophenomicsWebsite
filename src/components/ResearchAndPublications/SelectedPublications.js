import React from 'react';
import styled from 'styled-components';
import publicationImage1 from '../../assets/PUB1img.jpg'; // Replace with actual paths
import publicationImage2 from '../../assets/PUB2img.jpg';
import publicationImage3 from '../../assets/PUB3img.jpg';
import publicationImage4 from '../../assets/PUB4img.jpg';

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

const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: #34495e;
  font-style: italic;
`;

const PublicationsList = styled.div`
  margin-bottom: 40px;
`;

const PublicationItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 5px;
  text-decoration: none;
  color: #3498db;
  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  img {
    width: 24%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

function SelectedPublications() {
    const publications = [
        {
          title: "Next-generation precision medicine for suicidality prevention",
          authors: "R Bhagar, S S Gill, H Le-Niculescu, et al.",
          journal: "Transl Psychiatry. 2024 Sep 6;14(1):362",
          doi: "10.1038/s41398-024-03071-y",
          pmid: "PMID: 39242534",
          link: "/src/assets/PDF1.pdf"
        },
        {
          title: "Precision Medicine for psychotic disorders: objective assessment, risk prediction, and pharmacogenomics",
          authors: "Hill MD, Gill SS, Le-Niculescu H, et al.",
          journal: "Molecular Psychiatry. 2024 Feb 8 (2)",
          doi: "10.1038/s41380-024-02433-8",
          pmid: "PMID: 38326562",
          link: "/src/assets/PDF2.pdf"
        },
        {
          title: "Temporal effects on death by suicide: empirical evidence and possible molecular correlates",
          authors: "R. Bhagar, H. Le-Niculescu, K. Roseberry, et al.",
          journal: "Discover Mental Health. 2023 April 3(10)",
          doi: "10.1007/s44192-023-00035-4",
          pmid: "",
          link: "/src/assets/PDF3.pdf"
        },
        {
          title: "Towards precision medicine for anxiety disorders: objective assessment, risk prediction, pharmacogenomics, and repurposed drugs",
          authors: "K. Roseberry, H. Le-Niculescu, D.F Levey, et al.",
          journal: "Molecular Psychiatry. 2023 March 7(2)",
          doi: "10.1038/s41380-023-01998-0",
          pmid: "PMID: 36878964",
          link: "/src/assets/PDF4.pdf"
        },
        {
          title: "Polyphenic risk score shows robust predictive ability for long-term future suicidality",
          authors: "M. Cheng, K. Roseberry, Y. Choi, et al.",
          journal: "Discover Mental Health. 2022 June 13(2)",
          doi: "10.1007/s44192-022-00016-z",
          pmid: "",
          link: "/src/assets/PDF5.pdf"
        },
        {
          title: "Precision medicine in psychiatry: biomarkers to the forefront",
          authors: "Niculescu AB, Le-Niculescu H.",
          journal: "Neuropsychopharmacology. 2022 Jan 47(1):422-423",
          doi: "10.1038/s41386-021-01183-3",
          pmid: "PMID: 34584209",
          link: "/src/assets/PDF6.pdf"
        },
        {
          title: "Precision medicine for mood disorders: objective assessment, risk prediction, pharmacogenomics, and repurposed drugs",
          authors: "Le-Niculescu H, Roseberry K, Gill SS, et al.",
          journal: "Molecular Psychiatry. 2021 Jul 26(7):2776-2804",
          doi: "10.1038/s41380-021-01061-w",
          pmid: "PMID: 33828235",
          link: "/src/assets/PDF7.pdf"
        },
        {
          title: "Blood biomarkers for memory: toward early detection of risk for Alzheimer disease, pharmacogenomics, and repurposed drugs",
          authors: "Niculescu AB, Le-Niculescu H, et al.",
          journal: "Molecular Psychiatry. 2020 Aug; 25(8):1651-1672",
          doi: "10.1038/s41380-019-0602-2",
          pmid: "PMID: 31792364",
          link: "/src/assets/PDF8.pdf"
        },
        {
          title: "Convergence of recent GWAS data for suicidality with previous blood biomarkers: independent reproducibility using independent methodologies in independent cohorts",
          authors: "Niculescu AB, Le-Niculescu H.",
          journal: "Molecular Psychiatry. 2020 Jan; 25(1): 19-21",
          doi: "10.1038/s41380-019-0465-6",
          pmid: "PMID: 31383925",
          link: "/src/assets/PDF9.pdf"
        },
        {
          title: "Towards precision medicine for stress disorders: diagnostic biomarkers and targeted drugs",
          authors: "Le-Niculescu H, Roseberry K, et al.",
          journal: "Molecular Psychiatry. 2020 May; 25(5): 918-938",
          doi: "10.1038/s41380-019-0370-z",
          pmid: "PMID: 30862937",
          link: "/src/assets/PDF10.pdf"
        },
        {
          title: "Towards precision medicine for pain: diagnostic biomarkers and repurposed drugs",
          authors: "Niculescu AB, Le-Niculescu H, et al.",
          journal: "Molecular Psychiatry. 2019 Apr; 24(4): 501-522",
          doi: "10.1038/s41380-018-0345-5",
          pmid: "PMID: 30755720",
          link: "/src/assets/PDF11.pdf"
        },
        {
          title: "Assessing Risk of Future Suicidality in Emergency Department Patients",
          authors: "Brucker KM, Duggan C, Roseberry K, et al.",
          journal: "Academic Emergency Medicine. 2019 Apr; 26(4): 376-383",
          doi: "10.1111/acem.13562",
          pmid: "PMID: 30375082",
          link: "/src/assets/PDF12.pdf"
        },
        {
          title: "Precision medicine for suicidality: from universality to subtypes and personalization",
          authors: "Niculescu AB, Le-Niculescu H, et al.",
          journal: "Molecular Psychiatry. 2017 Sep;22(9):1250-1273",
          doi: "10.1038/mp.2017.128",
          pmid: "PMID: 28809398",
          link: "/src/assets/PDF13.pdf"
        },
        {
          title: "Dissecting Suicidality Using a Combined Genomic and Clinical Approach",
          authors: "Niculescu AB, Le-Niculescu H.",
          journal: "Neuropsychopharmacology. 2017 Jan;42(1):360",
          doi: "10.1038/npp.2016.228",
          pmid: "PMID: 27909331",
          link: "/src/assets/PDF14.pdf"
        },
        {
          title: "Mood, Stress and Longevity: Convergence on ANK3",
          authors: "Rangaraju S, Levey DF, Nho K, et al.",
          journal: "Molecular Psychiatry. 2016 Aug;21(8):1037-49",
          doi: "10.1038/mp.2016.65",
          pmid: "PMID: 27217151",
          link: "/src/assets/PDF15.pdf"
        },
        {
          title: "Towards understanding and predicting suicidality in women: biomarkers and clinical risk assessment",
          authors: "Levey DF, Niculescu EM, Le-Niculescu H, et al.",
          journal: "Molecular Psychiatry. 2016 Jun;21(6):768-85",
          doi: "10.1038/mp.2016.31",
          pmid: "PMID: 27046645",
          link: "/src/assets/PDF16.pdf"
        },
        {
          title: "A brief proposal for improving clinical trials",
          authors: "Niculescu AB.",
          journal: "Molecular Psychiatry. 2016 Jun;21(6):736-7",
          doi: "10.1038/mp.2016.42",
          pmid: "PMID: 27021813",
          link: "/src/assets/PDF17.pdf"
        },
        {
          title: "Suppression of transcriptional drift extends C. elegans lifespan by postponing the onset of mortality",
          authors: "Rangaraju S, Solis GM, Thompson RC, et al.",
          journal: "eLife. 2015 Dec 1;4:e08833",
          doi: "10.7554/eLife.08833",
          pmid: "PMID: 26623667",
          link: "/src/assets/PDF18.pdf"
        },
        {
          title: "Understanding and predicting suicidality using a combined genomic and clinical risk assessment approach",
          authors: "Niculescu AB, Le-Niculescu H, et al.",
          journal: "Molecular Psychiatry. 2015; 20: 1266–1285",
          doi: "10.1038/mp.2015.112",
          pmid: "PMID: 26283638",
          link: "/src/assets/PDF19.pdf"
        },
        {
          title: "Convergent functional genomics: What We Have Learned and Can Learn About Genes, Pathways, and Mechanisms",
          authors: "Niculescu AB, Le-Niculescu H.",
          journal: "Neuropsychopharmacology. 2010 Jan;35(1):355-6",
          doi: "10.1038/npp.2010.1",
          pmid: "PMID: 20049798",
          link: "/path/to/pdf20.pdf"
        },
        {
          title: "Convergent Functional Genomics of Psychiatric Disorders",
          authors: "Niculescu AB.",
          journal: "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics. 2013 Oct;162B(7):587-94",
          doi: "10.1002/ajmg.b.32163",
          pmid: "PMID: 23868208",
          link: "/path/to/pdf21.pdf"
        },
        {
          title: "Convergent Functional Genomics of Schizophrenia: From Comprehensive Understanding to Genetic Risk Prediction",
          authors: "Ayalew M, Le-Niculescu H, Levey D, et al.",
          journal: "Molecular Psychiatry. 2012 Sep;17(9):887-905",
          doi: "10.1038/mp.2012.37",
          pmid: "PMID: 22614287",
          link: "/path/to/pdf22.pdf"
        }
        // Add any other missing publications from the list following the same format
      ];

  return (
    <Container>
      <Title>Selected Publications</Title>
      <Subtitle>“Look to the genome to rebuild healthcare” -Leroy Hood, Institute for Systems Biology</Subtitle>
      <ImageContainer>
        <img src={publicationImage1} alt="Publication Visual 1" />
        <img src={publicationImage2} alt="Publication Visual 2" />
        <img src={publicationImage3} alt="Publication Visual 3" />
        <img src={publicationImage4} alt="Publication Visual 4" />
      </ImageContainer>
      <PublicationsList>
        {publications.map((pub, index) => (
          <PublicationItem key={index}>
            <h3>{pub.title}</h3>
            <p><strong>Authors:</strong> {pub.authors}</p>
            <p><strong>Journal:</strong> {pub.journal}</p>
            <p><strong>DOI:</strong> {pub.doi} {pub.pmid && <strong>PMID:</strong>} {pub.pmid}</p>
            <DownloadLink href={pub.link} target="_blank" rel="noopener noreferrer">
              Download PDF
            </DownloadLink>
          </PublicationItem>
        ))}
      </PublicationsList>
    </Container>
  );
}

export default SelectedPublications;
