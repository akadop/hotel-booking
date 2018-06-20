import { gql } from 'apollo-boost';

export default gql`
  query getAllReservations($cursor: Int) {
    getAllReservations(cursor: $cursor) {
      id
      reservations {
        departureDate
        id
        arrivalDate
        name
        hotelName
      }
    }
  }
`;
