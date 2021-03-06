require('isomorphic-unfetch');
const signale = require('signale');

const createReservationsLogger = signale.scope('createReservationResolver()');

const createReservation = ({ arrivalDate, departureDate, hotelName, name }) => {
  const url = process.env.BASE_URL + process.env.RESERVATIONS_ENDPOINT;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      arrivalDate,
      departureDate,
      hotelName,
      name
    })
  }).then(res => res.json());
};

const createReservationResolver = async (_root, args, _context) => {
  try {
    const { input } = args;
    const data = await createReservation(input);
    console.log(data);
    return data;
  } catch (err) {
    process.env.NODE_ENV !== 'production' && createReservationsLogger.debug('error:', err);
  }
};

module.exports = { createReservationResolver };
