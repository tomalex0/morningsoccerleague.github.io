'use strict';

const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql');
const PlayerType = require('./player-schema');

const PlayersController = require('../controllers/players');
const playersCtrl  = new PlayersController();

const MorninigSoccerMutation = new GraphQLObjectType({
    name : 'Mutation',
    fields: {
        addPlayer:{
            type: PlayerType,
            args:{
                name: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve : playersCtrl.addPlayer
        },
        updatePlayer: {
            type: PlayerType,
            args: {
                _id: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve : playersCtrl.updatePlayer
        }
    }
});

module.exports = MorninigSoccerMutation;