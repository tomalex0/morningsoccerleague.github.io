'use strict';

const SeasonTeamType = require('./season-team-schema');
/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const SeasonType = new GraphQLObjectType({
        name: "Season",
        description: "This represent a season",
        fields: () => ({
            id: {type: new GraphQLNonNull(GraphQLString)},
            description: {type: GraphQLString},
            teams: { type: new GraphQLList(SeasonTeamType)}
        })
});

module.exports = SeasonType;