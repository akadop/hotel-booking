require('isomorphic-unfetch');
const signale = require('signale');

const getReservationsByIdResolverLogger = signale.scope('getReservationByIdResolver()');

const getReservationById = ({ id }) => {
  const url = process.env.BASE_URL + process.env.RESERVATIONS_ENDPOINT;
  const parameterizedUrl = url + `/${id}`;
  return fetch(parameterizedUrl, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};

const getReservationByIdResolver = async (_root, args, _context) => {
  try {
    const { id } = args;
    const data = await getReservationById({ id });
    return data;
  } catch (err) {
    if (err instanceof Error) {
      process.env.NODE_ENV !== 'production' &&
        getReservationsByIdResolverLogger.debug('error  :', JSON.stringify(err));
    }
  }
};

module.exports = { getReservationByIdResolver };
