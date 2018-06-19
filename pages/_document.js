import Document, { Head, Main, NextScript } from 'next/document';

import Helmet from 'react-helmet';
import React from 'react';
import { extractCritical } from 'emotion-server';
import injectGlobalStyles from '../core/styles/global-style';

export default class PageDocument extends Document {
  static async getInitialProps({ renderPage }) {
    injectGlobalStyles();
    const page = await renderPage();
    const styles = extractCritical(page.html);
    return {
      ...page,
      ...styles,
      helmet: Helmet.renderStatic()
    };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    const { helmet, css } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="referrer" content="origin" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta httpEquiv="expires" content="10800" />
          {helmet.title.toComponent()}
          {helmet.link.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.script.toComponent()}
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
