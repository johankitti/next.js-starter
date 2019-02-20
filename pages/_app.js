import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'recompose';
import App, { Container } from 'next/app';

// Components
import NavBar from '../components/navbar';
import MetaTags from '../components/metatags';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
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
