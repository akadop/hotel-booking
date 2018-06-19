import { Main, Wrapper } from '../../components/layout';

import { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { getDisplayName } from '../utils';
import { hydrate } from 'react-emotion';
import { theme } from '../styles';

const withEmotion = ComposedComponent => {
  class HOC extends Component {
    static displayName = `WithEmotion(${getDisplayName(ComposedComponent)})`;

    componentWillMount() {
      if (typeof window !== 'undefined') {
        hydrate(window.__NEXT_DATA__.ids);
      }
    }

    render() {
      return (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Main>
              <ComposedComponent {...this.props} />
            </Main>
          </Wrapper>
        </ThemeProvider>
      );
    }
  }

  return HOC;
};

export default withEmotion;
