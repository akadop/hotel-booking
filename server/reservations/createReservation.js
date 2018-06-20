const { v4 } = require('uuid');
const signale = require('signale');

const { getMockData, setMockData } = require('./cache');
const createReservationLogger = signale.scope('createReservation()');

const createReservation = (req, res) => {
  try {
    // get the cached data
    let data = getMockData();

    const reservation = req.body;
    // generate a random id for each req.

    const id = v4();
    const newReservation = { id, ...reservation };

    // add the new reservation to the list, write the list
    setMockData(newReservation);
    return res
      .status(200)
      .send(newReservation)
      .end();
  } catch (err) {
    createReservationLogger.debug(err);
    res.status(500).end();
  }
};

module.exports = { createReservation };
