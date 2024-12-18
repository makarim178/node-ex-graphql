const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

process.loadEnvFile('.env');

const app = express();

app.use(cors());

const { MONGO_USER, MONGO_PASS, MONGO_DB } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_DB}-mongodb.ecc2n.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority&appName=${MONGO_DB}-mongodb`;
mongoose
  .connect(uri)
  .then(() => {
    console.log('connected to DB');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`Listening for requests on port 4000`);
});
