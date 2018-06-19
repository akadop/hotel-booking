require('dotenv').config();

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const next = require('next');
const signale = require('signale');
const { schema } = require('./schema');

const PORT = parseInt(process.env.PORT, 10) || 4000;
const GRAPHQL_URI = process.env.GRAPHQL_URI;
const GRAPHIQL_URI = process.env.GRAPHIQL_URI;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const graphqlConfig = {
  schema,
  tracing: true,
  cacheControl: {
    defaultMaxAge: 2400
  }
};

app.prepare().then(() => {
  const server = express();

  // allow anything for the sake of the challenge
  server.use(cors()).options('*', cors());

  // graphql middleware -- usually disable graphiql in prod but not for the assignment
  server
    .use(GRAPHQL_URI, bodyParser.json(), graphqlExpress(graphqlConfig))
    .get(GRAPHIQL_URI, graphiqlExpress({ endpointURL: GRAPHQL_URI }));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // The app failed to start, we probably want to kill the server
  server.on('error', err => {
    err instanceof Error &&
      signale.fatal(new Error('Error starting the server:', err));
    process.exit(1);
  });

  server.listen(PORT, err => {
    signale.success(`>> Express listening to port ${PORT}`);
    signale.success(`>> Serving App on http://localhost:${PORT}`);
    if (err instanceof Error) {
      signale.fatal('error:', err);
    }
  });
});
