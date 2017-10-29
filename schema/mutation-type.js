'use strict';

const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql');
const PlayerType = require('./player-schema');


const MorninigSoccerMutation = new GraphQLObjectType({
    name : "Mutation",
    fields: {
        addPlayer:{
            type: PlayerType,
            args:{
                name: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(root, args){
                let newPlayer = {
                    name : args.name,
                    _id : 100
                };
                console.log(newPlayer);
                return newPlayer;
            }
        },
        updatePlayer: {
            type: PlayerType,
            args: {
                _id: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(root, args){
                let updatedPlayer = {
                    name: args.name,
                    _id: args._id
                };
                console.log(updatedPlayer);
                return updatedPlayer;

            }
        }
    }
});

module.exports = MorninigSoccerMutation;