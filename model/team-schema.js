
const Players    = require('../data/players');
const PlayerType = require('./player-schema');
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

const TeamType = new GraphQLObjectType({
        name: "Team",
        description: "This represent a team",
        fields: () => ({
            id: {type: new GraphQLNonNull(GraphQLString)},
            teamName: {type: new GraphQLNonNull(GraphQLString)},
            teamCls: {type: GraphQLString}
        })
});

module.exports = TeamType;