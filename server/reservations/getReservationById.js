const { getMockData } = require('./cache');

const getReservationById = (req, res, next) => {
  let data = getMockData();

  const { id } = req.params;
  const reservationExists = data.find(reservation => reservation.id === id);

  if (reservationExists) {
    const locatedReservation = reservationExists[0];
    return res
      .status(200)
      .send(reservationExists)
      .end();
  } else {
    res.status(500);
    throw new Error('No reservation with that ID found');
  }
};

module.exports = {
  getReservationById
};
