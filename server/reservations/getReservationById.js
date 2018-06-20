const fs = require('fs');

const getReservationById = (req, res, next) => {
  let data = fs.readFileSync(process.env.MOCK_DATA_LOCATION);
  let reservationsList = JSON.parse(data);

  const { id } = req.params;
  const findReservation = reservationsList.find(reservation => reservation.id === id);

  if (findReservation) {
    const locatedReservation = findReservation[0];
    return res
      .status(200)
      .send(findReservation)
      .end();
  } else {
    res.status(500);
    throw new Error('No reservation with that ID found');
  }
};

module.exports = {
  getReservationById
};
