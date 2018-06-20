import { gql } from 'apollo-boost';

export default gql`
  mutation bookRoom($input: CreateReservationInput) {
    createReservation(input: $input) {
      name
      id
      hotelName
      arrivalDate
      departureDate
    }
  }
`;
