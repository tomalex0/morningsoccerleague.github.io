
const TeamType = require('./team-schema');
const PlayerType = require('./player-schema');

const Teams = require('../data/teams');
const Seasons = require('../data/season');
const Players = require('../data/players');

const _ = require('lodash');

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

const SeasonTeamType = new GraphQLObjectType({
        name: "SeasonTeam",
        description: "This represent a players and team belongs to the season",
        fields: () => ({
            team: {
                type: TeamType,
                resolve: function(root, team) {
                    let teamId = root.team;
                    return _.find(Teams, item => item.id == teamId);
                }
            },
            players: {
                type: new GraphQLList(PlayerType),
                resolve: function(root, team) {
                    let playersList = root.players;
                    return _.filter(Players, item => playersList.indexOf(item.id) > -1 );
                }
            },
            owners: {
                type: new GraphQLList(PlayerType),
                resolve: function(root, team) {
                    let playersList = root.owners;
                    return _.filter(Players, item => playersList.indexOf(item.id) > -1 );
                }
            }
        })
});

module.exports = SeasonTeamType;