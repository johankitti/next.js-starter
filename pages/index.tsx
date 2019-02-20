import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

// Components
import MetaTags from '../components/metatags';

import { fetchShows } from '../ducks/shows';

import styles from './index.scss';

class Home extends React.Component {
  static async getInitialProps({ reduxStore }) {
    // const isServer = !!req;
    await ['batman', 'aquaman', 'spiderman', 'x-men'].forEach(show => {
      reduxStore.dispatch(fetchShows(show));
    });
    return {};
  }

  render() {
    const { shows } = this.props;
    return (
      <div className={styles.test}>
        <MetaTags title="Some nice hooome pages bros" description="yo bro, this is THE page dude" />
        {Object.keys(shows)
          .sort()
          .map(showKey => (
            <div key={showKey}>
              <h1>{`${showKey[0].toUpperCase()}${showKey.slice(1)}`}</h1>
              {shows[showKey].map(({ show }) => (
                <div key={show.id} className={styles.show}>
                  <div style={{ backgroundImage: `url(${show.image.medium})` }} className={styles.showImg} />
                  <div className={styles.text}>
                    <span className={styles.title}>{show.name}</span>
                    <span className={styles.desc}>{show.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ showsReducer }) => ({
  shows: showsReducer.shows || [],
});

const enhanced = compose(connect(mapStateToProps))(Home);
export default enhanced;