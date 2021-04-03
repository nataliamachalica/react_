import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';


class List extends React.Component {
    
    static propTypes = {
      title: PropTypes.node,
      source: PropTypes.string,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.node,
      addColumn: PropTypes.func,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }

    

    render() {
      const {title, image, description, columns, addColumn} = this.props;

      return (
        <Container>
          <section className={styles.component}>
            <Hero titleText={title} imageSource = {image}/>
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>{columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
            </div>
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn} />
            </div>
          </section>
        </Container>
      );
    }
}

export default List;