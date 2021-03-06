import { graphql } from "gatsby"

export const MslPlayersJsonFragment = graphql`
  fragment MslPlayersJsonFragment on MslPlayersJson {
    name
    player_id
    playerPath: gatsbyPath(filePath: "/players/{MslPlayersJson.name}")
  }
`
export const MslTeamStatsFragment = graphql`
  fragment MslTeamStatsFragment on MslTeamStats {
    allseasonStats {
      assists
      goals
      mom
      mos
      players
      red_cards
      saves
      yellow_cards
      matches
      won
      lost
      draw
      goal_allowed
    }
    seasonStats {
      assists
      goals
      mom
      mos
      red_cards
      players
      saves
      season_id
      yellow_cards
      matches
      won
      lost
      draw
      goal_allowed
      season {
        ...MslSeasonsJsonFragment
      }
    }
  }
`
export const MslPlayerStatsFragment = graphql`
  fragment MslPlayerStatsFragment on MslPlayerStats {
    allseasonStats {
      goals
      assists
      yellow_cards
      red_cards
      mos
      mom
      saves
      referees
    }
    seasonStats {
      isOwner
      isMos
      goals
      assists
      yellow_cards
      red_cards
      referees
      mom
      saves
      season_id
      season {
        ...MslSeasonsJsonFragment
      }
      team {
        ...MslTeamsJsonFragment
      }
    }
  }
`

// imagedata: image {
//   childImageSharp {
//     gatsbyImageData(maxWidth: 100, layout: FLUID, placeholder: TRACED_SVG)
//   }
// }
export const MslTeamsJsonFragment = graphql`
  fragment MslTeamsJsonFragment on MslTeamsJson {
    team_id
    teamName
    teamCls
    image {
      name
      relativePath
      publicURL
    }
    teamPath: gatsbyPath(filePath: "/teams/{MslTeamsJson.teamName}")
  }
`
export const MslCautionJsonFragment = graphql`
  fragment MslCautionJsonFragment on MslCautionJson {
    name
    caution_id
    cls
  }
`

export const MslSchedulesJsonRefereesFragment = graphql`
  fragment MslSchedulesJsonRefereesFragment on MslSchedulesJsonReferees {
    player {
      ...MslPlayersJsonFragment
    }
    team {
      ...MslTeamsJsonFragment
    }
  }
`

export const MslSeasonsJsonFragment = graphql`
  fragment MslSeasonsJsonFragment on MslSeasonsJson {
    season_year
    season_id
    season
    seasonPath: gatsbyPath(
      filePath: "/seasons/{MslSeasonsJson.season_id}-{MslSeasonsJson.season_year}"
    )
    fixturePath: gatsbyPath(
      filePath: "/seasons/{MslSeasonsJson.season_id}-{MslSeasonsJson.season_year}/fixtures"
    )
  }
`
export const MslSchedulesJsonGamestatsFragment = graphql`
  fragment MslSchedulesJsonGamestatsFragment on MslSchedulesJsonGamestats {
    mom {
      player {
        ...MslPlayersJsonFragment
      }
    }
    team {
      ...MslTeamsJsonFragment
    }
    fouls
    goals {
      minute
      owngoal
      penalty
      extra_min
      player {
        ...MslPlayersJsonFragment
      }
      assist {
        ...MslPlayersJsonFragment
      }
    }
    keeper {
      saves
      player {
        ...MslPlayersJsonFragment
      }
    }
    cautions {
      player {
        ...MslPlayersJsonFragment
      }
      minute
      extra_min
      caution {
        ...MslCautionJsonFragment
      }
    }
  }
`

export const MslGameStatsFragment = graphql`
  fragment MslGameStatsFragment on MslSchedulesJsonGamestats {
    team_type
    goals {
      minute
      owngoal
      player {
        ...MslPlayersJsonFragment
      }
      assist {
        ...MslPlayersJsonFragment
      }
    }
    team {
      ...MslTeamsJsonFragment
    }
    fouls
    cautions {
      minute
      caution_id
      player {
        ...MslPlayersJsonFragment
      }
    }
    mom {
      player {
        ...MslPlayersJsonFragment
      }
    }
    keeper {
      saves
      player {
        ...MslPlayersJsonFragment
      }
    }
  }
`
export const MslSeasonsJsonStatsFragment = graphql`
  fragment MslSeasonsJsonStatsFragment on MslSeasonsJson {
    ...MslSeasonsJsonFragment
    schedules {
      id
      scheduled_date
      scheduled_time
      schedule_id
      completed
      referees {
        ...MslSchedulesJsonRefereesFragment
      }
      gamestats {
        ...MslGameStatsFragment
      }
      away: stats(stats_type: away) {
        ...MslGameStatsFragment
      }
      home: stats(stats_type: home) {
        ...MslGameStatsFragment
      }
    }
    moslist {
      player {
        ...MslPlayersJsonFragment
      }
      team {
        ...MslTeamsJsonFragment
      }
    }
    mos {
      ...MslPlayersJsonFragment
      seasons {
        ...MslSeasonsJsonFragment
      }
    }
    teams {
      players {
        ...MslPlayersJsonFragment
      }
      team {
        ...MslTeamsJsonFragment
      }
      owners {
        ...MslPlayersJsonFragment
      }
    }
  }
`
