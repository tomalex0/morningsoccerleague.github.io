'use strict';

/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLObjectType,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const PlayerType = new GraphQLObjectType({
        name: "Player",
        description: "This represent a player",
        fields: () => ({
            id: {type: new GraphQLNonNull(GraphQLInt)},
            name: {type: new GraphQLNonNull(GraphQLString)}
        })
});

module.exports = PlayerType;