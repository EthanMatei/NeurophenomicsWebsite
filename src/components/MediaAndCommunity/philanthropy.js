import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

function Philanthropy() {
  return (
    <Container>
      <Heading>Support Dr. Niculescu’s Research</Heading>
      <Paragraph>
        A gift to support Dr. Niculescu’s research programs in personalized psychiatry is an investment in making a difference in patients' and families' lives, as well as in society.
      </Paragraph>
      <Paragraph>
        Tax-deductible gifts to support Dr. Niculescu’s work can be arranged by contacting Dr. Niculescu at{' '}
        <a href="mailto:aniculescu@arizona.edu">aniculescu@arizona.edu</a>.
      </Paragraph>
    </Container>
  );
}

export default Philanthropy;
