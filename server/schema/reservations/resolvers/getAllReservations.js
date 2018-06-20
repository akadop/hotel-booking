require('isomorphic-unfetch');
const signale = require('signale');

const getAllReservationsResolverLogger = signale.scope('getAllReservationsResolver()');

const getAllReservations = () => {
  const url = process.env.BASE_URL + process.env.RESERVATIONS_ENDPOINT;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};

const getAllReservationsResolver = async (_root, _args, _context) => {
  try {
    const data = await getAllReservations();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      process.env.NODE_ENV !== 'production' &&
        getAllReservationsResolverLogger.debug('error  :', JSON.stringify(err));
    }
  }
};

module.exports = { getAllReservationsResolver };
