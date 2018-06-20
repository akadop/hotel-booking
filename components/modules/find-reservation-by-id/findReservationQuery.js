import { gql } from 'apollo-boost';

export default gql`
  query findReservationById($id: String!) {
    getReservationById(id: $id) {
      name
      id
      hotelName
      arrivalDate
      departureDate
    }
  }
`;
