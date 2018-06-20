const signale = require('signale');

const getReservationByIdResolverLogger = signale.scope('getReservationByIdResolver()');

const getReservationByIdResolver = async (_root, _args, context) => {
  try {
    const { reservations } = context;
    const { id } = args;
    const data = await reservations.getReservationById({ id });
    return data;
  } catch (err) {
    if (err instanceof Error) {
      getReservationsResolverLogger.debug('error  :', err);
    }
  }
};

module.exports = { getReservationByIdResolver };
