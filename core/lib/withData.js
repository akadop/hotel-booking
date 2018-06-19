import { ApolloProvider, getDataFromTree } from 'react-apollo';

import { Component } from 'react';
import Head from 'next/head';
import { getDisplayName } from '../utils';
import initApollo from './initApollo';

export default ComposedComponent => {
  return class WithData extends Component {
    static displayName = `WithApolloData(${getDisplayName(ComposedComponent)})`;

    static async getInitialProps(ctx) {
      let serverState;
      let composedInitialProps;

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }
      const apollo = initApollo();

      try {
        await getDataFromTree(
          <ComposedComponent ctx={ctx} {...composedInitialProps} />,
          { client: apollo }
        );
      } catch (error) {}

      if (!process.browser) {
        Head.rewind();
      }

      serverState = {
        apollo: {
          data: apollo.cache.extract()
        }
      };

      return {
        serverState,
        ...composedInitialProps
      };
    }

    constructor(props) {
      super(props);
      this.apollo = initApollo(this.props.serverState.apollo.data);
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };
};
