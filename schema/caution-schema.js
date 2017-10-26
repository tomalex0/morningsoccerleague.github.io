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

const CautionType = new GraphQLObjectType({
        name: "Caution",
        description: "This represent a caution",
        fields: () => ({
            id: {type: new GraphQLNonNull(GraphQLInt)},
            name: {type: new GraphQLNonNull(GraphQLString)},
            cls: {type: new GraphQLNonNull(GraphQLString)}
        })
});

module.exports = CautionType;