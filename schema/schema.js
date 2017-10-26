'use strict';

const MorninigSoccerQueryRootType = require('./root-query-type');
const MorninigSoccerMutation = require('./mutation-type');

let {
    GraphQLSchema,
    } = require('graphql');

// This is the schema declaration
const MorningSoccerAppSchema = new GraphQLSchema({
    query: MorninigSoccerQueryRootType,
    // If you need to create or updata a datasource,
    // you use mutations. Note:
    // mutations will not be explored in this post.
    mutation: MorninigSoccerMutation
});

module.exports = MorningSoccerAppSchema;