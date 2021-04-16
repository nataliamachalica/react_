import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {FAQContents} from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContents.title} imageSource={FAQContents.imageSource}/>
    <div>
      {FAQContents.content}
    </div>
  </Container>
);

export default FAQ;