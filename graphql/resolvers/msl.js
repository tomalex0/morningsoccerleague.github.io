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
  MslSchedulesJson: {
    stats: {
      resolve(source, args, context, info) {
        return source.gamestats.find(item => item.team_type == args.stats_type)
      },
    },
  },
}
