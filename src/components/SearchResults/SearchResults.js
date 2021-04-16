import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  };

  render(){
    const {cards} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            Is it me you&apos;re looking for?
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;