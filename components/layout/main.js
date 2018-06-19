import styled from 'react-emotion';

export default styled.main`
  display: flex;
  background: ${props => props.theme.colors.white};
  flex: auto;
  flex-flow: row wrap;
  padding: 0 0 0;
  align-items: flex-start;
  justify-content: center;
`;
