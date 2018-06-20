require('isomorphic-unfetch');

class ReservationsModel {}

// function createReservation({ arrivalDate, departureDate, hotelName, name }) {
//   return fetch(PROCESS.ENV.RESERVATIONS_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       'Cache-Control': 'no-cache',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ arrivalDate, departureDate, hotelName, name })
//   }).then(res => res.json());
// }

// function getAllReservations() {
//   return fetch(PROCESS.ENV.RESERVATIONS_ENDPOINT, {
//     method: 'GET',
//     headers: {
//       'Cache-Control': 'no-cache',
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json());
// }

// function getReservationById({ id }) {
//   const baseUri = PROCESS.ENV.RESERVATIONS_BY_ID_ENDPOINT;
//   const parameterizedUrl = baseUri + `/${id}`;
//   return fetch(parameterizedUrl, {
//     method: 'GET',
//     headers: {
//       'Cache-Control': 'no-cache',
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json());
// }

Object.assign(
  ReservationsModel.prototype,
  {
    createReservation({ arrivalDate, departureDate, hotelName, name }) {
      return fetch(PROCESS.ENV.RESERVATIONS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ arrivalDate, departureDate, hotelName, name })
      }).then(res => res.json());
    }
  },
  {
    getAllReservations() {
      return fetch(PROCESS.ENV.RESERVATIONS_ENDPOINT, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
    }
  },
  {
    getReservationById({ id }) {
      const baseUri = PROCESS.ENV.RESERVATIONS_BY_ID_ENDPOINT;
      const parameterizedUrl = baseUri + `/${id}`;
      return fetch(parameterizedUrl, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
    }
  }
);
module.exports = { ReservationsModel };
