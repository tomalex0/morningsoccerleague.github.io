const { getTotalChildArr } = require("../lib/utility")
const { grouByPlayerStats, grouByPlayerStatsSum } = require("./player-stats")
const { getTotalCautionType } = require("./caution-stats")
const { getAllGameStatsByType } = require("./stats-by-type")
const { getTeamSeasonFoulStats } = require("./foul-stats")
const { getTeamSeasonStats } = require("./team-season-stats")
const { Cautions } = require("../lib/enum")

function getSeasonStats(seasons) {
  const seasonArr = seasons.map(season => {
    const totalGoals = getAllGameStatsByType(season.schedules, "goals")
    const totalMom = getAllGameStatsByType(season.schedules, "mom")
    const totalPlayers = getTotalChildArr(season.teams, "players")
    const totalAssists = totalGoals.filter(item => item.assist)
    const totalOwnGoals = totalGoals.filter(item => item.owngoal)
    const totalValidGoals = totalGoals.filter(item => !item.owngoal)
    const totalFouls = getAllGameStatsByType(season.schedules, "fouls")

    const totalSaves = getAllGameStatsByType(season.schedules, "keeper")
    // console.log(season.schedules, "---season.schedules--")

    const momPlayers = grouByPlayerStats(totalMom)

    const playersSaves = grouByPlayerStatsSum(totalSaves, "saves")

    const totalUniquePlayerGoals = [
      ...new Set(totalValidGoals.map(item => item.player.player_id)),
    ]
    const totalYellowCards = getTotalCautionType(
      season.schedules,
      Cautions.YELLOW
    )
    const teamStandingStats = getTeamSeasonStats(season.schedules, season.teams)
    const teamFoulStats = getTeamSeasonFoulStats(season.schedules)

    const totalFoulsCount = totalFouls.reduce((a, b) => a + b, 0)
    const totalRedCards = getTotalCautionType(season.schedules, Cautions.RED)
    const playerYellowCards = grouByPlayerStats(totalYellowCards)
    const playerRedCards = grouByPlayerStats(totalRedCards)

    const playersScoredSort = grouByPlayerStats(totalValidGoals)
    season.seasonStats = {
      games: season.schedules.length,
      teams: season.teams.length,
      goals: totalGoals.length,
      assists: totalAssists.length,
      players: totalPlayers,
      owngoals: totalOwnGoals.length,
      yellow_cards: totalYellowCards.length,
      red_cards: totalRedCards.length,
      unique_players_goals: totalUniquePlayerGoals.length,
      unique_players_goals_list: totalUniquePlayerGoals,
      fouls: totalFoulsCount,
      scorers: playersScoredSort,
      moms: momPlayers,
      goalkeepers: playersSaves,
      yellow_card_holders: playerYellowCards,
      red_card_holders: playerRedCards,
      team_standing_stats: teamStandingStats,
      team_foul_stats: teamFoulStats,
    }
    return season
  })
  return seasonArr
}

exports.getSeasonStats = getSeasonStats
