const { gql } = require('apollo-boost');
const { createReservationResolver } = require('./resolvers/createReservation');
const { getAllReservationsResolver } = require('./resolvers/getAllReservations');
const { getReservationByIdResolver } = require('./resolvers/getReservationById');

const reservationTypeDefs = gql`
  extend type Query {
    # retrieves reservation based on ID
    getReservationById(id: String!): ReservationDetails

    # retrieves all reservations
    getAllReservations: [ReservationDetails]
  }

  extend type Mutation {
    # creates a reservation, returns an id.
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

const reservationResolvers = {
  Query: {
    getAllReservations: getAllReservationsResolver,
    getReservationById: getReservationByIdResolver
  },
  Mutation: {
    createReservation: createReservationResolver
  }
};

module.exports = {
  reservationTypeDefs,
  reservationResolvers
};
