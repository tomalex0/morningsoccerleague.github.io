module.exports = {
  MslTeamsJson: {
    seasons: {
      type: ["MslSeasonsJson"],
      resolve(source, args, context, info) {
        console.log(source, "---seasons---")
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
}
