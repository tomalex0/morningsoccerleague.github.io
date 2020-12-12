const playerField = `
   player: MslPlayersJson @link(by: "player_id")
`

const playersField = `
   players: [MslPlayersJson] @link(by: "player_id")
`

const schema = `
	type MslSeasonsJsonTeams implements Node {
		owners: [MslPlayersJson] @link(by: "player_id")
		${playersField}
		# Team details for each team in the season
		team: MslTeamsJson @link(by: "team_id")
	}
	
	type MslSchedulesJsonStatsHome implements Node {
    team: MslTeamsJson @link(by: "team_id")
	}
	
	type MslSchedulesJsonStatsAway implements Node {
    team: MslTeamsJson @link(by: "team_id")
	}
	
	type MslSchedulesJsonReferees implements Node {
    ${playerField}
		team: MslTeamsJson @link(by: "team_id")
	}
	
	type MslSchedulesJsonStatsHomeMom implements Node {
    player: [MslPlayersJson] @link(by: "player_id")
	}
	
	type MslSchedulesJsonStatsAwayMom implements Node {
    player: [MslPlayersJson] @link(by: "player_id")
	}
	
	type MslSchedulesJsonStatsHomePlayers implements Node {
    player: [MslPlayersJson] @link(by: "player_id")
	}
	
	type MslSchedulesJsonStatsAwayPlayers implements Node {
    player: [MslPlayersJson] @link(by: "player_id")
	}
	
	type MslSchedulesJsonStatsHomeKeeper implements Node {
    ${playerField}
	}
	
	type MslSchedulesJsonStatsAwayKeeper implements Node {
    ${playerField}
	}
	
	type MslSchedulesJsonStatsHomeCautions implements Node {
    ${playerField}
    caution: MslCautionJson @link(by: "caution_id", from: "caution_id")
	}
	
	type MslSchedulesJsonStatsAwayCautions implements Node {
    ${playerField}
    caution: MslCautionJson @link(by: "caution_id", from: "caution_id")
	}
	
	type MslSchedulesJsonStatsHomeGoals implements Node {
    ${playerField}
    assist: MslPlayersJson @link(by: "player_id")
	}
	
	type MslSchedulesJsonStatsAwayGoals implements Node {
    ${playerField}
    assist: MslPlayersJson @link(by: "player_id")
	}
	
	type MslTeamsJson implements Node {
		# List all seasons the team is part of
		seasons: [MslSeasonsJson] @link(by: "team.team_id", from: "team_id")
	}
	
	type MslSchedulesJson implements Node {
			# Schedule to Season Mapping
		season: MslSeasonsJson @link(by: "season")
	}
	
	type MslSeasonsJson implements Node {
		mos: [MslPlayersJson] @link(by: "player_id")
		# Link back to schedule from season
		schedules: [MslSchedulesJson] @link(by: "season.season_id", from: "season_id")
	}
`
module.exports = schema
