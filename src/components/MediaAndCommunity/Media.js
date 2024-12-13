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
        { text: "Psychiatric News Release", link:"https://psychiatryonline.org/doi/10.1176/appi.pn.2024.12.12.27"},
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
    {
      title: "Mood, stress and longevity: convergence on ANK3 (2016)",
      items: [
        { text: "Medical News Today", link: "http://www.medicalnewstoday.com/articles/310567.php" },
        { text: "Genetic Engineering & Biotechnology News", link: "http://www.genengnews.com/gen-news-highlights/gene-at-nexus-of-mood-stress-and-longevity/81252759/" },
        { text: "Daily Express (UK)", link: "http://www.express.co.uk/life-style/health/673490/Wine-sunshine-eating-long-life-healthy-stress" },
        { text: "Daily Mail (UK)", link: "http://www.dailymail.co.uk/health/article-3606740/Another-reason-holiday-Sunshine-red-wine-oily-fish-fight-ageing-effects-stress-leading-longer-life.html" },
        { text: "IU School of Medicine Press Release", link: "http://news.medicine.iu.edu/releases/2016/05/mood-stress-and-longevity.shtml" }
      ]
    },
    {
      title: "Towards understanding and predicting suicidality in women: biomarkers and clinical risk assessment (2016)",
      items: [
        { text: "IU School of Medicine Press Release", link:"http://news.medicine.iu.edu/releases/2016/03/suicidal-ideation-biomarkers-women.shtml" },
        { text: "KQED San Francisco", link: "http://ww2.kqed.org/futureofyou/2016/04/12/suicide-risk-can-be-found-in-your-blood-scientists-find/" },
        { text: "WFIU Indianapolis", link: "http://indianapublicmedia.org/news/blood-biomarker-identify-women-risk-suicide-96601/" },
        { text: "Medscape", link: "http://www.medscape.com/viewarticle/862380#vp_2" },
        { text: "BBRF/ NARSAD", link: "https://bbrfoundation.org/brain-matters-discoveries/gender-specific-diagnostic-tools-can-help-identify-women-at-highest-risk" }
      ]
    },
    {
      title: "Understanding and Predicting Suicidality Using a Combined Genomic and Clinical Risk Assessment Approach (2015)",
      items: [
        { text: "Nature.com", link: "http://www.neurophenomics.info/Nature%20Front%20Page%20(DFL%209-17-15).pdf" },
        { text: "Molecular Psychiatry - Top Ten", link: "http://www.neurophenomics.info/Molecular%20Psychiatry%20-%20Top%20Ten%20(9-4-15).pdf" },
        { text: "IU School of Medicine Press Release", link: "http://news.medicine.iu.edu/releases/2015/08/suicide-prediction-biomarkers-apps.shtml" },
        { text: "New Scientist", link: "https://www.newscientist.com/article/mg22730354-000-suicidal-behaviour-predicted-by-blood-test-showing-gene-changes/" },
        { text: "Washington Post", link: "http://www.washingtonpost.com/news/to-your-health/wp/2015/08/19/an-app-and-blood-test-can-predict-with-startling-accuracy-whether-youll-attempt-suicide/" },
        { text: "PBS", link: "http://www.pbs.org/wgbh/nova/next/body/new-blood-test-predicts-future-suicide-attempts/" },
        { text: "Smithsonian Magazine", link: "http://www.smithsonianmag.com/innovation/blood-test-app-may-help-identify-patients-at-risk-suicide-180956404/?no-ist" },
        { text: "Canadian TV", link: "http://globalnews.ca/video/2185414/app-blood-test-predict-suicide-risk" },
        { text: "Daily Beast", link: "http://www.thedailybeast.com/articles/2015/09/02/can-a-blood-test-predict-suicide.html" },
        { text: "Fierce Mobile Healthcare", link: "http://www.fiercemobilehealthcare.com/story/report-biomarkers-apps-help-suicide-prevention/2015-08-22" },
        { text: "VA", link: "http://www.research.va.gov/currents/0815-11.cfm" },
        { text: "NIH", link: "http://www.nih.gov/researchmatters/august2015/08312015suicide.htm" },
        { text: "NPR", link: "http://sideeffectspublicmedia.org/post/new-research-could-make-it-possible-test-suicide-risk-lab" },
        { text: "NARSAD", link: "https://bbrfoundation.org/brain-matters-discoveries/new-tool-for-predicting-suicidal-behavior-combines-clinical-and" },
        { text: "Psychiatric News", link: "http://psychnews.psychiatryonline.org/doi/full/10.1176/appi.pn.2015.9b17" },
        { text: "Scientific American", link: "http://www.scientificamerican.com/article/brain-study-seeks-roots-of-suicide/" }
      ]
    },
    {
      title: "Genetic Risk Prediction and Neurobiological Understanding of Alcoholism (2014)",
      items: [
        { text: "IU School of Medicine Press Release", link: "http://news.medicine.iu.edu/releases/2014/05/genes-predict-alcoholism.shtml" },
        { text: "Genome Web", link: "http://www.genomeweb.com/clinical-genomics/researchers-link-panel-genes-alcoholism-risk" },
        { text: "Genetic Engineering and Biotechnology News", link: "http://www.genengnews.com/gen-news-highlights/gene-panel-found-to-be-strongly-predictive-of-alcoholism/81249901/" },
        { text: "Business Insider Australia", link: "http://www.businessinsider.com.au/alcoholics-have-a-distinct-set-of-genes-new-research-2014-5" },
        { text: "SBS Australian TV", link: "http://www.sbs.com.au/news/article/2014/06/10/comment-are-you-genetically-predisposed-alcoholism" }
      ]
    },
    {
      title: "Discovery and validation of blood biomarkers for suicidality (2013)",
      items: [
        { text: "Nature", link: "http://www.nature.com/news/predictors-of-suicidal-behaviour-found-in-blood-1.13570" },
        { text: "Science", link: "http://news.sciencemag.org/brain-behavior/2013/08/blood-test-suicide" },
        { text: "Indiana University", link: "http://www.eurekalert.org/pub_releases/2013-08/iu-rib081913.php" },
        { text: "NIH Research Matters", link: "http://www.nih.gov/researchmatters/august2013/08262013suicide.htm" },
        { text: "Johns Hopkins Berman Institute of Bioethics", link: "http://bioethicsbulletin.org/archive/preventing-suicide-preserving-freedom/" },
        { text: "Forbes", link: "http://www.forbes.com/sites/alicegwalton/2013/08/22/will-a-suicide-panel-one-day-be-included-your-routine-blood-work/" },
        { text: "Fox News", link: "http://www.foxnews.com/health/2013/08/21/blood-test-may-predict-risk-suicide/?test=latestnews" },
        { text: "US News and World Report", link: "http://health.usnews.com/health-news/news/articles/2013/08/20/could-blood-test-one-day-predict-suicide-risk" },
        { text: "UPI", link: "http://www.upi.com/blog/2013/08/20/There-may-soon-be-a-blood-test-for-suicide-risk/3021377000575/" },
        { text: "CNET", link: "http://news.cnet.com/8301-17938_105-57599568-1/could-a-blood-test-predict-suicide-risk/" },
        { text: "ScienceNews", link: "http://www.sciencenews.org/view/generic/id/352601/description/Blood_marker_may_predict_suicide" },
        { text: "GenomeWeb", link: "http://www.genomeweb.com/gene-expression-profiling-study-finds-biomarkers-related-suicide-risk" },
        { text: "Nature World News", link: "http://www.natureworldnews.com/articles/3561/20130820/researchers-identify-biomarkers-predict-suicide-risk.htm" },
        { text: "The Australian", link: "http://www.theaustralian.com.au/higher-education/suicide-genes-raise-possibility-of-screening-tests/story-e6frgcjx-1226701565168" },
        { text: "D News", link: "http://www.youtube.com/watch?v=CAVo8ebrLQg" },
        { text: "Genetic Engineering News", link: "http://www.genengnews.com/gen-news-highlights/rna-biomarkers-might-predict-suicide-risk/81248750/" },
        { text: "MedPage Today", link: "http://www.medpagetoday.com/TheGuptaGuide/Psychiatry/41160" },
        { text: "LA Times", link: "http://www.latimes.com/science/sciencenow/la-sci-suicide-blood-test-biomarker-20130820,0,5381979.story" },
        { text: "Prevention", link: "http://www.prevention.com/mind-body/emotional-health/science-suicide" },
        { text: "Ozy.com", link: "http://www.ozy.com/fast-forward/psychiatry-in-a-blood-test/3504.article" },
        { text: "Huffington Post", link: "http://www.huffingtonpost.com/2014/07/31/suicide-blood-test_n_5635483.html" }
      ]
    },
    {
      title: "Schizophrenia: from comprehensive understanding to genetic risk prediction (2012)",
      items: [
        { text: "New York Daily News", link: "http://www.nydailynews.com/life-style/health/scientists-pinpoint-schizophrenia-genes-identified-hundreds-genes-show-risk-zone-article-1.1079229" },
        { text: "WebMD", link: "http://www.webmd.com/schizophrenia/news/20120515/new-clues-to-schizophrenia" },
        { text: "GenomeWeb", link: "http://www.genomeweb.com/integrated-analysis-defines-potentially-predictive-schizophrenia-risk-genes" },
        { text: "NARSAD Grantee Leads Breakthrough Research", link: "http://bbrfoundation.org/brain-matters-discoveries/narsad-grantee-leads-breakthrough-research-that-identifies-the-genetic-0" },
        { text: "IU School of Medicine", link: "http://communications.medicine.iu.edu/newsroom/stories/2012/researchers-identify-key-genes-and-prototype-predictive-test-for/" }
      ]
    },
    {
      title:"Other Links",
      items:[
        {text:"Dr. Niculescu receives IUPUI 2012 Trailblazer Award (2012)",link:"http://research.iupui.edu/enterprise/archive/2012/enterprise-04-23.html#announcements"},
        {text:"An Analysis for Anxiety - Genome Technology (2012)",link:"http://www.neurophenomics.info/GTFeb2012_QA.pdf"},
        {text:"Teaming up for biomarker future - EMBO Reports (2011)",link:"http://www.neurophenomics.info/Rinaldi_Biomarkers_EMBO%20rep%202011.pdf"},
        {text:"Omega-3 Fatty Acids and Psychiatric Disorders (2011)",link:"http://www.upi.com/Health_News/2011/05/26/Omega-3-may-help-treat-bipolar-disorder/UPI-50191306468299/"},
        {text:"Psychology Today June 2011",link:"http://www.neurophenomics.info/Psychology%20Today%20June%202011.pdf"},
        {text:"Dr. Niculescu featured in Indiana University's 2010 Annual Report on Research and Creative Activities.",link:"http://www.indiana.edu/~vpr/communications.shtml"},
        {text:"NIH Directors' New Innovator Award (2010)",link:"http://communications.medicine.iu.edu/newsroom/stories/2010/iu-psychiatrist-alexander-niculescu-awarded-prestigious-nih-gran/"},
        {text:"DNA Testing for Bipolar Disorder (2010)",link:"http://psychcentral.com/news/2010/04/14/test-for-genetic-risk-of-bipolar/12823.html"},
        {text:"Identifying Blood Biomarkers for Hallucinations and Delusions (2009)",link:"http://latimesblogs.latimes.com/booster_shots/2009/11/mental-illness-biomarkers.html"}
      ]
    },
    {
      title: "Faulty Body Clock May Make Kids Bipolar (2009)",
      items:[
        {text:"Scientific American Mind",link:"http://www.nature.com/scientificamericanmind/journal/v21/n2/full/scientificamericanmind0510-13a.html"},
        {text:"ABC News",link:"http://abcnews.go.com/Health/Healthday/bipolar-disorder-tied-body-clock/story?id=9191876"},
        {text:"Telegraph.co.uk",link:"http://www.telegraph.co.uk/health/healthnews/6544910/Sleep-problems-could-trigger-manic-depression-in-children.html"},
        {text:"Science Daily",link:"http://www.sciencedaily.com/releases/2009/11/091111200213.htm"},
        {text:"U.S. News and World Report",link:"http://health.usnews.com/articles/health/healthday/2009/11/27/bipolar-disorder-may-be-tied-to-body-clock.html"},
        {text:"San Francisco Examiner",link:"http://www.examiner.com/x-10560-Special-Needs-Kids-Examiner~y2009m11d29-Gene-linked-to-susceptibility-of-symptoms-for-pediatric-bipolar-disorder"}
      ]
    },
    {
      title:"Towards Improving Diagnosis in Psychiatry (2009)",
      items:[
        {text:"Diagnosis Weapons",link:"http://ivanhoe.com/viewers/watch_video.cfm?vid=RX1563&title=Diagnosis%20Weapons"},
        {text:"The Future of Testing for Bipolar Disorder - Featured on Bipolar TV",link:"http://www.webmd.com/bipolar-disorder/bipolar-tv/"}
      ]
    },
    {
      title:"First Comprehensive Map Of Genes Likely To Be Involved In Bipolar Disorder (2008)",
      items:[
        {text:"NARSAD",link:"http://www.narsad.org/news/press/rg_2008/res2008-12-08b.html"},
        {text:"UPI ",link:"http://www.upi.com/Science_News/2008/11/22/Biopolar_genes_identified/UPI-70631227332748/"},
        {text:"Science Daily",link:"http://www.sciencedaily.com/releases/2008/11/081121180438.htm"}
      ]
    },
    {
      title:"Identifying Blood Biomarkers for Mood Disorders (2008)",
      items:[
        {text:"Faculty of 1000 Biology: Major Advances, Expert Opinion",link:"http://www.f1000biology.com/article/id/1103999"},
        {text:"NARSAD",link:"http://www.narsad.org/news/press/rg_2008/res2008-03-05.html"},
        {text:"10 Leading Discoveries by NARSAD-Funded Scientists in 2008",link:"http://www.narsad.org/news/press/rg_2008/res2008-12-23b.html"},
        {text:"MSNBC",link:"http://www.msnbc.msn.com/id/23337532/"},
        {text:"New Scientist",link:"http://www.newscientist.com/article/mg19726454.700-simple-blood-test-could-predict-your-mood.html"},
        {text:"Dagens Nyheter: Sweden's largest morning paper",link:"http://www.dn.se/DNet/jsp/polopoly.jsp?d=597&a=746438"},
        {text:"BBC",link:"http://news.bbc.co.uk/2/hi/health/7262424.stm"},
        {text:"WebMD",link:"http://www.webmd.com/bipolar-disorder/news/20080225/a-blood-test-for-mood-disorders"},
        {text:"Scientific American",link:"http://www.sciam.com/article.cfm?id=moody-blood"},
        {text:"Psychiatric Times",link:"http://www.psychiatrictimes.com/display/article/10168/1286581#"}
      ]
    }
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
