const signale = require('signale');

const getAllReservationsResolverLogger = signale.scope('getAllReservationsResolver()');

const getAllReservationsResolver = async (_root, _args, context) => {
  try {
    const { reservations } = context;
    const data = await reservations.getReservations();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      getReservationsResolverLogger.debug('error  :', err);
    }
  }
};

module.exports = { getAllReservationsResolver };
