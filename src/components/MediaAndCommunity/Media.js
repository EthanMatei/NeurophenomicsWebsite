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

const SectionTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 15px;
  color: #34495e;
`;

const MediaList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MediaItem = styled.li`
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border-left: 5px solid #3498db;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: #3498db;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Media() {
  const mediaSections = [
    {
      title: "Precision medicine for psychotic disorders: objective assessment, risk prediction, and pharmacogenomics",
      items: [
        { text: "IU School of Medicine News Release", link: "https://medicine.iu.edu/news/2024/02/psychosis-blood-test" },
        { text: "NIH Research Matters", link: "https://www.nih.gov/news-events/nih-research-matters/blood-test-may-predict-psychosis-risks" },
        { text: "New York Post", link: "https://nypost.com/2024/02/08/lifestyle/new-blood-test-predicts-schizophrenia-risk-best-treatments/" },
        { text: "U.S.News", link: "https://www.usnews.com/news/health-news/articles/2024-02-13/blood-test-to-predict-schizophrenia-shows-promise" },
        { text: "Psychology Today", link: "https://www.psychologytoday.com/us/blog/beyond-mental-health/202402/is-a-blood-test-for-schizophrenia-on-the-horizon" },
        { text: "Today's Clinical Lab", link: "https://www.clinicallab.com/new-blood-test-diagnoses-and-predicts-risk-of-psychosis-27744" },
        { text: "Neuroscience News", link: "https://neurosciencenews.com/schizophrenia-blood-test-25585/" },
        { text: "13 WTHR", link: "https://www.wthr.com/article/news/health/breakthrough-research-for-schizophrenia-discovered-indiana-university-mental-health-illness/531-af8b695d-6ec9-48ac-99a3-f63f62141d31" },
        { text: "WRTV", link: "https://www.wrtv.com/news/local-news/iu-researchers-develop-blood-test-to-predict-psychosis-risk-most-effective-treatments" }
      ]
    },
    {
      title: "Next-gen biopsies take the sting out of diagnosis",
      items: [
        { text: "ASBMB TODAY", link: "https://www.asbmb.org/asbmb-today/science/090623/next-gen-biopsies-take-the-sting-out-of-diagnosis" }
      ]
    },
    {
      title: "Temporal effects on death by suicide: empirical evidence and possible molecular correlates",
      items: [
        { text: "IU School of Medicine News Release", link: "https://medicine.iu.edu/news/2023/04/full-moon-deaths-by-suicide" },
        { text: "The Science Times", link: "https://www.sciencetimes.com/articles/43199/20230410/suicide-rates-peak-during-full-moon-late-afternoons-new-study.htm" },
        { text: "The Jerusalem Post", link: "https://www.jpost.com/health-and-wellness/article-738803" },
        { text: "LA Weekly", link: "https://www.laweekly.com/full-moon-suicide-scientists-may-have-figured-out-why-lunar-events-contribute-to-an-increase-in-self-harm/" },
        { text: "Dr. Niculescu discussing the study", link: "https://indiana-my.sharepoint.com/:v:/g/personal/bstemen_iu_edu/EeLL8e2-yRpHoJgb_B3wtqEBO-NsHQ6IpMD-yxiJVMRUSA?e=EnsOht" }
      ]
    },
    {
      title: "Towards precision medicine for anxiety disorders: objective assessment, risk prediction, pharmacogenomics, and repurposed drugs",
      items: [
        { text: "IU School of Medicine News Release", link: "https://medicine.iu.edu/news/2023/03/blood-test-for-anxiety" },
        { text: "Fox 59 News", link: "https://fox59.com/morning-news/angela-answers/angela-answers-iu-researchers-develop-blood-test-for-anxiety/" },
        { text: "Chanel 8 WISHTV", link: "https://www.wishtv.com/news/unphiltered/unphiltered-iu-develops-blood-test-for-anxiety/" },
        { text: "Discover Magazine", link: "https://www.discovermagazine.com/health/a-possible-blood-test-for-anxiety" },
        { text: "Science Alert", link: "https://www.sciencealert.com/scientists-have-developed-a-blood-test-for-anxiety" },
        { text: "Desert News", link: "https://www.deseret.com/2023/3/10/23630654/anxiety-disorder-blood-test-indiana-university-research" },
        { text: "Verywell Health", link: "https://www.verywellhealth.com/anxiety-blood-test-7255681" },
        { text: "The Science Times", link: "https://www.sciencetimes.com/articles/42770/20230311/new-blood-test-determine-ones-risk-developing-anxiety-severity-best.htm" },
        { text: "Dr. Niculescu discussing the study", link: "https://indiana-my.sharepoint.com/:v:/g/personal/bstemen_iu_edu/EZcg6oKC3w1AmSyHEPUxRpIBX-RPi2qrD7Xfi15UfsWcFQ?e=aY2V9n" },
        { text: "Big Ten TV Network – Half-Time of IU Basketball Game (2023)", link: "https://app.box.com/s/6d43w5j9vafwfv491nv44ufdf8qap8aw" }
      ]
    },
    {
      title: "Polyphenic risk score shows robust predictive ability for long-term future suicidality (2022)",
      items: [
        { text: "IU School of Medicine News Release", link: "https://medicine.iu.edu/news/2022/06/iu-researchers-validate-new-screening-tool-to-decrease-suicidality-risk" },
        { text: "ABC WRTV", link: "https://www.wrtv.com/news/iu-released-a-new-suicide-prevention-screening-that-could-save-lives" },
        { text: "Chanel 8 WISHTV", link: "https://www.wishtv.com/news/medical/iu-health-scientists-develop-screening-tool-to-predict-suicide-risk-without-asking-if-a-patient-is-suicidal-heres-why/" }
      ]
    },
    {
      title: "Precision medicine for mood disorders: objective assessment, risk prediction, pharmacogenomics, and repurposed drugs (2021)",
      items: [
        { text: "The Economist", link: "https://www.economist.com/science-and-technology/2021/05/06/a-blood-test-may-help-the-diagnosis-and-treatment-of-depression" },
        { text: "13 WTHR", link: "https://www.wthr.com/article/news/local/iu-researchers-develop-blood-test-for-depression-bipolar-disorder-team-neuroscience-psychiatry/531-de1466bc-ef79-4ab2-bd92-8fa55c68f5b6" },
        { text: "PBS Vitals", link: "https://www.youtube.com/watch?v=Bz6o_emGs-Q" },
        { text: "IU School of Medicine News Release", link: "https://news.iu.edu/stories/2021/04/iu/releases/08-researchers-develop-blood-test-depression-bipolar-disorder.html" },
        { text: "Genetic Engineering & Biotechnology News", link: "https://www.genengnews.com/news/researchers-develop-biomarker-blood-test-for-depression-bipolar-disorder/" },
        { text: "Fox News", link: "https://www.fox5ny.com/news/researchers-develop-blood-test-that-could-help-gauge-depression-bipolar-disorder" },
        { text: "pourquoidocteur", link: "https://www.pourquoidocteur.fr/Articles/Question-d-actu/35972-Bientot-test-sanguin-detecter-depression-trouble-bipolaire" }
      ]
    },
    {
      title: "Towards precision medicine for pain: diagnostic biomarkers and repurposed drugs (2019)",
      items: [
        { text: "IU School of Medicine News Release", link: "https://medicine.iu.edu/news/2019/02/iu-school-of-medicine-makes-breakthrough-towards-developing-blood-test-for-pain/" },
        { text: "BBC World Service", link: "https://www.bbc.co.uk/programmes/w3cswjlv" },
        { text: "Spectator (UK)", link: "https://health.spectator.co.uk/new-blood-test-objectively-measures-pain" },
        { text: "Fox TV", link: "https://fox59.com/2019/02/15/researchers-develop-blood-test-that-determines-severity-of-pain-paints-clearer-picture-of-patient-needs/" },
        { text: "Digital Trends", link: "https://www.digitaltrends.com/cool-tech/blood-biomarker-pain-indiana-university" },
        { text: "Genome Web", link: "https://www.360dx.com/molecular-diagnostics/blood-test-measure-pain-aims-reduce-opioid-use#.XHBmseRKi70" }
      ]
    },
    {
      title: "Precision medicine for suicidality: from universality to subtypes and personalization (2017)",
      items: [
        { text: "IU School of Medicine News Release", link: "http://news.medicine.iu.edu/releases/2017/08/precision-medicine-opens-door-scientific-wellness-preventive-approaches-suicide.shtml" },
        { text: "IU Q&A", link: "https://medicine.iu.edu/blogs/research-updates/research-suicide-risk-precision-medicine/" },
        { text: "NPR", link: "http://wbaa.org/post/iu-research-biomarkers-could-help-prevent-suicide#stream/0" },
        { text: "CBS", link: "http://cbs4indy.com/2017/09/25/iu-school-of-medicine-breakthrough-could-help-prevent-suicide/" },
        { text: "New England Journal of Medicine Journal Watch", link: "http://neurophenomics.info/Genetic%20Testing%20May%20Improve%20Suicide%20Risk%20Prediction%20-%20NEJM%20Journal%20Watch.._.pdf" }
      ]
    },
    // Continue adding sections as needed...
  ];

  return (
    <Container>
      <Title>Media for Our Work</Title>
      {mediaSections.map((section, index) => (
        <div key={index}>
          <SectionTitle>{section.title}</SectionTitle>
          <MediaList>
            {section.items.map((item, subIndex) => (
              <MediaItem key={subIndex}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
              </MediaItem>
            ))}
          </MediaList>
        </div>
      ))}
    </Container>
  );
}

export default Media;
