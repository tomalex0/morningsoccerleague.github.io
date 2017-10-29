'use strict';

// server.js
/*
 Required modules {express and express-graphql}
 will be imported along with the schema object
 from the schema.js file in src/schema.js
 */

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const connectMongo = require('./lib/mongo-connector');
const start = async () => {
    const mongo = await connectMongo();

    const PORT = process.env.PORT || 4000;
    const app = express();
    app.use('/', graphqlHTTP({
        context: mongo,
        schema: schema,
        graphiql: true //set to false if you don't want graphiql enabled
    }));

    app.listen(PORT);
    console.log(`GraphQL API server running at localhost:${PORT}`);
};

start();