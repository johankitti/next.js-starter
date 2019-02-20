import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'recompose';
import App, { Container } from 'next/app';
import Head from 'next/head';

// Components
import NavBar from '../components/navbar';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <Head>
              <title>Some shiiit</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
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
