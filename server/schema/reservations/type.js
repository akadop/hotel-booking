const { gql } = require('apollo-boost');

const reservationTypeDefs = gql`
  extend type Query {
    getReservationById(id: String!): ReservationDetails
    getAllReservations: [ReservationDetails]
  }

  extend type Mutation {
    createReservation(input: CreateReservationInput): ReservationDetails
  }

  input CreateReservationInput {
    hotelName: String!
    arrivalDate: String!
    departureDate: String!
    name: String!
  }

  type ReservationDetails {
    name: String!
    id: ID!
    hotelName: String!
    arrivalDate: String!
    departureDate: String!
  }
`;
