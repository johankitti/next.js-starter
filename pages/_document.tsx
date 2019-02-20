import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public static async getInitialProps(ctx): any {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  public render(): React.ReactNode {
    return (
      <html lang="en">
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
