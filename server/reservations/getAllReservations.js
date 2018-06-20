const { getMockData } = require('./cache');

const getAllReservations = (req, res) => {
  let data = getMockData();
  let startFrom;
  let endFrom;

  // cursor is going to be an index of an entry here
  startFrom = parseInt(req.query.cursor, 10);
  endFrom = startFrom + 59;

  const reservations = data.slice(startFrom, endFrom);
  const id = 'RESERVATION_LIST_' + startFrom + '__' + endFrom;

  return res
    .status(200)
    .send({ id, reservations })
    .end();
};

module.exports = { getAllReservations };
