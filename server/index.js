require('dotenv').config();

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { graphqlConfig } = require('./schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const next = require('next');
const signale = require('signale');

const { createReservation } = require('./reservations/createReservation');
const { getAllReservations } = require('./reservations/getAllReservations');
const { getReservationById } = require('./reservations/getReservationById');
const { setInitialMockData } = require('./reservations/cache');

const dev = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.PORT, 10) || 4000;
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHIQL_ENDPOINT = process.env.GRAPHIQL_ENDPOINT;
const RESERVATIONS_ENDPOINT = process.env.RESERVATIONS_ENDPOINT;
const RESERVATIONS_BY_ID_ENDPOINT = process.env.RESERVATIONS_BY_ID_ENDPOINT;

const app = next({ dev });
const handle = app.getRequestHandler();
const serverLogger = signale.scope('server()');

app.prepare().then(() => {
  const server = express();

  server
    .use(bodyParser.json())
    .use(cors())
    .options('*', cors())
    .disable('x-powered-by')

    .post(RESERVATIONS_ENDPOINT, createReservation)
    .get(RESERVATIONS_ENDPOINT, getAllReservations)
    .get(RESERVATIONS_BY_ID_ENDPOINT, getReservationById)

    // graphql middleware -- usually disable graphiql in prod but not for the assignment
    .use(GRAPHQL_ENDPOINT, graphqlExpress(graphqlConfig))
    .get(GRAPHIQL_ENDPOINT, graphiqlExpress({ endpointURL: GRAPHQL_ENDPOINT }))

    .get('*', (req, res) => handle(req, res))

    .listen(PORT, err => {
      serverLogger.success(`>> Express listening to port ${PORT}`);
      serverLogger.success(`>> Serving App on http://localhost:${PORT}`);

      // set the initial mock data in the cache
      setInitialMockData();

      if (err instanceof Error) {
        serverLogger.fatal(new Error('Error starting the server:', err));
        process.exit(1);
      }
    });
});
