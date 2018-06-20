const fs = require('fs');

const getAllReservations = (req, res) => {
  const dataLocation =
    process.env.NODE_ENV === 'production'
      ? process.env.MOCK_DATA_LOCATION_PROD
      : process.env.MOCK_DATA_LOCATION;

  let data = fs.readFileSync(dataLocation);
  let parsedData = JSON.parse(data);

  let startFrom;
  let endFrom;

  // cursor is going to be an index of an entry here
  startFrom = parseInt(req.query.cursor, 10);

  endFrom = startFrom + 39;

  const reservations = parsedData.slice(startFrom, endFrom);
  const id = 'RESERVATION_LIST_' + startFrom + '__' + endFrom;

  return res
    .status(200)
    .send({ id, reservations })
    .end();
};

module.exports = { getAllReservations };
