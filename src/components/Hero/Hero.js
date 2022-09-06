import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
           Mustafa's<br />
           Personal Portfolio
        </SectionTitle>
        <SectionText>
         Junior at Depauw University Pursuing a career in Software Engineering.I am particulary interested in Web Development.
        </SectionText>
        <Button href = "https://www.google.com/" >Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;