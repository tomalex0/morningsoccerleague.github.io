'use strict';

const CautionType = require('./caution-schema');
const CautionsController = require('../controllers/cautions');
const cautionsCtrl  = new CautionsController();

const PlayerType = require('./player-schema');
const PlayersController = require('../controllers/players');
const playersCtrl  = new PlayersController();

/* Here a simple schema is constructed without using the GraphQL query language.
 e.g. using 'new GraphQLObjectType' to create an object type
 */

let {
    // These are the basic GraphQL types need in this tutorial
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    // This is used to create required fileds and arguments
    GraphQLNonNull

    } = require('graphql');

const CautionStatsType = new GraphQLObjectType({
    name: "CautionStats",
    description: "This represent caution stats",
    fields: () => ({
        caution: {
            type: CautionType,
            description: "List of all Cautions",
            resolve: function(root, args) {
                let cautionId = root.caution_id;
                let cautionObj = cautionsCtrl.getDetails(cautionId);
                return cautionObj;
            }
        },
        player : {
            type: PlayerType,
            description: "List of all Player",
            resolve:  function(root, args) {
                return playersCtrl.playerSchemaResolve(root, args)
            }
        },
        minute: {
            type: GraphQLInt
        }
    })
});

module.exports = CautionStatsType;