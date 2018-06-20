const { v4 } = require('uuid');
const fs = require('fs');
const signale = require('signale');

const createReservationLogger = signale.scope('createReservation()');

const createReservation = (req, res) => {
  try {
    const dataLocation =
      process.env.NODE_ENV === 'production'
        ? process.env.MOCK_DATA_LOCATION_PROD
        : process.env.MOCK_DATA_LOCATION;

    let data = fs.readFileSync(dataLocation);
    let parsedData = JSON.parse(data);

    const reservation = req.body;

    // generate a random id for each req.
    const id = v4();

    // add the new reservation to the list, write the list
    const newReservation = { id, ...reservation };
    parsedData.push(newReservation);

    fs.writeFileSync(dataLocation, JSON.stringify(parsedData, null, 2));
    createReservationLogger.success('Added new reservation to list');
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
