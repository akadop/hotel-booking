const reservationsList = require('./mock.json');

const getAllReservations = (req, res) => {
  return res
    .status(200)
    .send(reservationsList)
    .end();
};

module.exports = { getAllReservations };
