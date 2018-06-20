import ContentLoader from 'react-content-loader';
import styled from 'react-emotion';

const PlaceholderWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.white};
  align-items: stretch;
  justify-content: center;
  border-radius: 8px;
  > svg {
    width: 100%;
  }
`;

export const TextPlaceholder = () => (
  <PlaceholderWrapper>
    <ContentLoader
      height={100}
      width={380}
      speed={2}
      primaryColor={'#f3f3f3'}
      secondaryColor={'#ecebeb'}
    >
      <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
      <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
      <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
      <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
    </ContentLoader>
  </PlaceholderWrapper>
);
