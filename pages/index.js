import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Head from 'next/head';

import { fetchShows } from '../ducks/shows';

import styles from './index.scss';

class Home extends React.Component {
  static async getInitialProps({ reduxStore }) {
    // const isServer = !!req;
    await reduxStore.dispatch(fetchShows());
    return {};
  }

  render() {
    const { shows } = this.props;
    return (
      <div className={styles.test}>
        <Head>
          <title>index page bro</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        {shows.map(({ show: { id, name } }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ showsReducer }) => ({
  shows: showsReducer.shows,
});

const enhanced = compose(connect(mapStateToProps))(Home);
export default enhanced;
