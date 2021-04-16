import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {infoContents} from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imageSource={infoContents.imageSource} />
    {infoContents.content}
  </Container>
);

export default Info;