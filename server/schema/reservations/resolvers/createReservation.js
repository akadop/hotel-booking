const signale = require('signale');

const createReservationsLogger = signale.scope('createReservationResolver()');

const createReservationResolver = async (_root, args, context) => {
  try {
    const { reservations } = context;
    const { input } = args;
    const data = await reservations.createReservation(input);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      createReservationResolver.debug('error  :', err);
    }
  }
};

module.exports = { createReservationResolver };
