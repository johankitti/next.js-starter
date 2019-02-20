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
    await reduxStore.dispatch(fetchShows('batman'));
    return {};
  }

  render() {
    const { shows } = this.props;
    console.log(shows);
    return (
      <div className={styles.test}>
        <MetaTags title="Some nice hooome pages bros" description="yo bro, this is THE page dude" />
        {Object.keys(shows).map(showKey => (
          <div key={showKey}>
            <h2>{showKey}</h2>
            {shows[showKey].map(({ show }) => (
              <div key={show.id} className={styles.show}>
                <div style={{ backgroundImage: `url(${show.image.medium})` }} className={styles.showImg} />
                {show.name}
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
