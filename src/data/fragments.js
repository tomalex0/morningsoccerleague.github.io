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

export const MslSeasonsJsonFragment = graphql`
  fragment MslSeasonsJsonFragment on MslSeasonsJson {
    season_year
    season_id
    season
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
