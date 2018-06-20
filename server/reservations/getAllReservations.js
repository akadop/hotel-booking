const fs = require('fs');

const getAllReservations = (req, res) => {
  let data = fs.readFileSync(process.env.MOCK_DATA_LOCATION);
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
