import Link from 'next/link';
import styled from 'react-emotion';

const Footer = styled.footer`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width: calc(100% - 2em);
`;

const PageLink = styled.a`
  flex: 1 0 30%;
  padding: 0.25em;
`;

export default () => {
  return (
    <Footer>
      <Link prefetch href="/">
        <PageLink>Book Reservation > </PageLink>
      </Link>
      <Link prefetch href="/reservation">
        <PageLink>Find Reservation ></PageLink>
      </Link>
      <Link prefetch href="/all">
        <PageLink>All reservations ></PageLink>
      </Link>
    </Footer>
  );
};
