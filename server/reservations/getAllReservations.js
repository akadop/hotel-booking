const fs = require('fs');

const getAllReservations = (req, res) => {
  let data = fs.readFileSync(process.env.MOCK_DATA_LOCATION);
  let reservationsList = JSON.parse(data);
  return res
    .status(200)
    .send(reservationsList)
    .end();
};

module.exports = { getAllReservations };
