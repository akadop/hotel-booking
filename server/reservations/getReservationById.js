const reservationsList = require('./mock.json');

const getReservationById = (req, res) => {
  const { id } = req.params;
  const findReservation = reservationsList.find(reservation => reservation.id === id);
  if (findReservation.length > 0) {
    return res
      .status(200)
      .send(findReservation[0])
      .end();
  }
  // choosing to throw the error in the resolver that will use this endpoint
  return res.send(findReservation).end();
};

module.exports = {
  getReservationById
};
