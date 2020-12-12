import { graphql } from "gatsby"

export const MslPlayersJsonFragment = graphql`
  fragment MslPlayersJsonFragment on MslPlayersJson {
    name
    player_id
    teamPath: gatsbyPath(filePath: "/players/{MslPlayersJson.name}")
  }
`

export const MslTeamsJsonFragment = graphql`
  fragment MslTeamsJsonFragment on MslTeamsJson {
    team_id
    teamName
    teamCls
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

export const MslPlayerStatsFragment = graphql`
  fragment MslPlayerStatsFragment on MslPlayerStats {
    allseasonStats {
      goals
      assists
    }
    seasonStats {
      isOwner
      goals
      assists
      season_id
      team {
        team_id
        teamName
      }
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
    statsPath: gatsbyPath(
      filePath: "/seasons/{MslSeasonsJson.season_id}-{MslSeasonsJson.season_year}/statistics"
    )
    standingPath: gatsbyPath(
      filePath: "/seasons/{MslSeasonsJson.season_id}-{MslSeasonsJson.season_year}/standings"
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
