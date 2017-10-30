'use strict';

const TeamType = require('./team-schema');
const PlayerType = require('./player-schema');


const PlayersController = require('../controllers/players');
const playersCtrl  = new PlayersController();

const TeamsController = require('../controllers/teams');
const teamsCtrl  = new TeamsController();

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

const RefereeType = new GraphQLObjectType({
        name: "Referee",
        description: "This represent a referee",
        fields: () => ({
            team: {
                type: TeamType,
                resolve : teamsCtrl.getDetails
            },
            player: {
                type: PlayerType,
                resolve:  playersCtrl.getDetails
            }
        })
});

module.exports = RefereeType;