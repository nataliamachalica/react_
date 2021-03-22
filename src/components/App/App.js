import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.Component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>hello world</h2>
      <List />
      </main>
    )
  }
}

export default App;
