import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'recompose';
import App, { Container } from 'next/app';

// Actions
import { fetchShows } from '../ducks/shows';

// Components
import NavBar from '../components/navbar';
import MetaTags from '../components/metatags';

// Utils
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { reduxStore } = ctx;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    await reduxStore.dispatch(fetchShows('superman'));

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <MetaTags title="Base title" description="Base desc" />
            <NavBar />
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    );
  }
}

export { MyApp as Component };
export default compose(withReduxStore)(MyApp);
