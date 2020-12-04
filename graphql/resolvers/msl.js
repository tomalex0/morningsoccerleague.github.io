module.exports = {
  MslTeamsJson: {
    seasons: {
      type: ["MslSeasonsJson"],
      resolve(source, args, context, info) {
        return context.nodeModel.runQuery({
          query: {
            filter: {
              teams: {
                elemMatch: { team: { team_id: { eq: source.team_id } } },
              },
            },
          },
          type: "MslSeasonsJson",
          firstOnly: false,
        })
      },
    },
  },
  Query: {
    team_type: {
      type: ["MslSchedulesJsonGamestats"],
      args: {
        typeval: "String!",
      },
      resolve(source, args, context, info) {
        console.log(source, "000df0000")
        return context.nodeModel.runQuery({
          query: {
            filter: {
              type: { eq: args.typeval },
            },
          },
          type: "MslSchedulesJsonGamestats",
          firstOnly: false,
        })
      },
    },
    contributors: {
      type: ["MslSchedulesJson"],
      args: {
        receivedSwag: "String!",
      },
      resolve(source, args, context, info) {
        return context.nodeModel.runQuery({
          query: {
            filter: {
              schedule_id: { eq: args.receivedSwag },
            },
          },
          type: "MslSchedulesJson",
          firstOnly: false,
        })
      },
    },
  },
}
