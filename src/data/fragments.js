import { graphql } from "gatsby"

export const MslPlayersJsonFragment = graphql`
  fragment MslPlayersJsonFragment on MslPlayersJson {
    name
    player_id
  }
`

export const MslTeamsJsonFragment = graphql`
  fragment MslTeamsJsonFragment on MslTeamsJson {
    team_id
    teamName
    teamCls
  }
`
export const MslCautionJsonFragment = graphql`
  fragment MslCautionJsonFragment on MslCautionJson {
    name
    caution_id
    cls
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
