const { v4 } = require('uuid');
const fs = require('fs');
const signale = require('signale');
const reservationsList = require('./mock.json');

const createReservationLogger = signale.scope('createReservation()');

const createReservation = (req, res) => {
  try {
    const reservation = req.body;

    // generate a random id for each req.
    const id = v4();

    // add the new reservation to the list, write the list
    const newReservation = { id, ...reservation };
    reservationsList.push(newReservation);

    fs.writeFileSync(process.env.MOCK_DATA_LOCATION, JSON.stringify(reservationsList, null, 2));
    createReservationLogger.success('Added new reservation to list ("./mock.json")');
    return res
      .status(200)
      .send({ id })
      .end();
  } catch (err) {
    if (err instanceof Error) {
      createReservationLogger.debug(err);
      res.status(500).end();
    }
  }
};

module.exports = { createReservation };
