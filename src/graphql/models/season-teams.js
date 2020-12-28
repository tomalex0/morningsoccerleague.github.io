const { predicate } = require("../lib/utility")
function getSeasonTeams(seasonItem) {
  const teams = seasonItem.teams
    .map(item => {
      item.teamName = item.team.teamName
      item.players.map(newitem => {
        newitem.isOwner = +!!item.owners.find(
          owner => owner.player_id == newitem.player_id
        )
        newitem.isMos = +!!seasonItem.mos.find(
          mos => mos.player_id == newitem.player_id
        )
        return newitem
      })
      item.players = item.players.sort(
        predicate(
          {
            name: "isOwner",
            reverse: true,
          },
          {
            name: "isMos",
            reverse: true,
          },
          {
            name: "name",
            reverse: false,
          }
        )
      )
      return item
    })
    .sort(
      predicate({
        name: "teamName",
        reverse: false,
      })
    )
  return teams
}

exports.getSeasonTeams = getSeasonTeams
