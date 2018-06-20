require('isomorphic-unfetch');
const signale = require('signale');

const getAllReservationsResolverLogger = signale.scope('getAllReservationsResolver()');

const getAllReservations = ({ cursor }) => {
  let url = process.env.BASE_URL + process.env.RESERVATIONS_ENDPOINT;

  if (cursor) {
    url = process.env.BASE_URL + process.env.RESERVATIONS_ENDPOINT + `?cursor=${cursor}`;
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};

const getAllReservationsResolver = async (_root, args, _context) => {
  try {
    const data = await getAllReservations({ cursor: args.cursor ? args.cursor : 1 });
    return data;
  } catch (err) {
    process.env.NODE_ENV !== 'production' &&
      getAllReservationsResolverLogger.debug('error  :', err);
  }
};

module.exports = { getAllReservationsResolver };
