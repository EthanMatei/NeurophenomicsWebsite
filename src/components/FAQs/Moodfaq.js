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

const Answer = styled.div`
  margin: 0 0 20px;
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

function MoodBiomarkersFAQ() {
  const faqs = [
    {
      question: "Can you summarize your current research?",
      answer: (
        <>
          We found patterns of change in the blood that reflect whether a person has low mood (depression) or high mood.
          These changes occur at the level of gene expression (how active a gene is) and involve genes previously
          thought to act primarily in the brain.
          <br />
          <br />
          Unlike cases of cancer, you can’t biopsy the target organ (brain) in psychiatry. Having a readily accessible
          peripheral readout for blood would be great - even better (i.e., easier) than having a readout for
          cerebro-spinal fluid (CSF), which has been another area studied. However, such study requires a painful
          procedure for the patient (spinal tap).
          <br />
          <br />
          Gene expression is more informative than genetic mutations in DNA - especially in terms of disease state - as
          it reflects gene activity. It is the place where rubber-meets-the-road in terms of gene-environment
          interactions: effects of drugs, stress, and medications. It may be more informative to know your biomarkers
          than to have your genome sequenced.
        </>
      ),
    },
    {
      question: "What are the advantages of a blood test for mood disorders?",
      answer: (
        <>
          In psychiatry, we currently rely on patients’ self-reported symptoms, as well as the clinician’s impression.
          Patients are not sure as to the severity of their illness, and neither is the clinician (sometimes dismissing
          patients' symptoms, sometimes overestimating them). I am a psychiatrist as well as a researcher, and I often
          face that dilemma in my own clinical practice, where I see complicated cases.
          <br />
          <br />
          Having an objective test to measure disease state, severity, and (especially) response to treatment would be a
          big step forward. Such a measure would be similar to your primary care doctor or cardiologist ordering a
          baseline lipid panel, starting you on a medication, and conducting repeat lab testing to see how well the
          medication is working. It would place psychiatry on par with other medical specialties.
          <br />
          <br />
          For example, nowadays for depression, a patient gets started on an antidepressant. Weeks or months may pass
          before the patient and doctor know if the particular medication is working or if a different antidepressant
          should be administered. A blood test for mood state could objectively reflect the efficacy of current
          treatment. Perhaps changes in the blood could be caught early on, reducing the duration of uncertainty (trial
          and error). Knowing early on that a medication is moving things in the right direction is reassuring - and
          frankly - therapeutic to patients. Hope and optimism are powerful (yet poorly understood) neurobiological
          players: we know this due to the high rate of initial placebo responses with antidepressants.
          <br />
          <br />
          Another example: a patient is diagnosed as depressed but is actually bipolar (manic-depressive); this is a
          common problem. The patient may be started on an antidepressant initially, and if bipolar, will be flipped by
          the antidepressant into a mixed state or frank mood elevation (hypomania or mania). Patients could be
          monitored with a panel of mood-state markers after they have begun taking an antidepressant. If these markers
          indicate a shift to elevated mood, several interventions can be employed: medications can be changed; a mood
          stabilizer added to the regimen. A potentially dangerous - and certainly, miserable - episode for the patient
          can be averted.
        </>
      ),
    },
    {
      question:
        "Aside from depression and bipolar disorder, what other diseases could these findings diagnose?",
      answer: (
        <>
          Mood state is important and sometimes overlooked in favor of complex disorders: postpartum depression
          (trivialized as "baby blues"), post-traumatic stress disorder, depression following myocardial infarction and
          cardiovascular procedures, depression associated with cancer, fibromyalgia, and mood changes associated with
          other serious diseases. Having an objective measure would expedite appropriate attention and treatment to
          patients.
          <br />
          <br />
          We are also doing similar work in schizophrenia, looking for blood markers associated with delusions and
          hallucinations. Schizophrenia is a complex disorder, with subjectivity and uncertainty about illness severity
          contributing to its intricacy. We are excited about our unpublished findings in this area and hope to quickly
          advance such work. NIH funding is on the decline these days. I think philanthropy can play a major role in
          funding such early-stage, unconventional research.
        </>
      ),
    },
    {
      question:
        "Two drugs were found to exert similar effects on both high and low mood. Can you expound on the implications of this and how this data could aid drug development?",
      answer: (
        <>
          In brief: we are looking at patterns changed in the blood with relationship to mood state and comparing these
          pattern changes with a database at the Broad Institute at MIT (containing signature patterns of a large number
          of known drugs). Using the database, we can ascertain which drugs exert a similar effect. The database might
          suggest new drugs (or at least chemical structures to be tweaked and developed by pharmaceutical companies) to
          be explored in the treatment of mood disorders.
        </>
      ),
    },
    {
      question:
        "Can you expound on the implications of the overlap between some genes identified in your study and those involved in cancer?",
      answer: (
        <>
          It is a surprise to us, and we do not want to over-interpret it. Other colleagues in the field (Husseini Manji
          at NIMH, Francine Benes at Harvard, Huda Akil, colleagues at Michigan, and others) obtained similar results,
          and now the full picture is beginning to make sense. Nature is a tinkerer and has a limited number of building
          blocks at its disposal: nature seems to be re-using some of the same molecules used for "lower" functions
          (such as cell proliferation and cell death) and higher mental functions (such as mood regulation).
        </>
      ),
    },
  ];

  return (
    <Container>
      <Title>Mood Biomarkers FAQ</Title>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Question>{faq.question}</Question>
          <Answer>{faq.answer}</Answer>
        </div>
      ))}
    </Container>
  );
}

export default MoodBiomarkersFAQ;
