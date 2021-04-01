import React from 'react';
import styles from './Container.scss';
import propTypes from 'prop-types';

const Container = ({children}) => (
  <div className={styles.component}>
    {children}
  </div>
);

Container.propTypes = {
  children: propTypes.node,
};

export default Container;