import React from "react"
import { graphql } from "gatsby"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "../../data/fragments"

function Team(props) {
  const { team } = props.data
  return <div>Team {team.teamName}</div>
}

export const query = graphql`
  query($id: String) {
    team: mslTeamsJson(id: { eq: $id }) {
      ...MslTeamsJsonFragment
    }
  }
`

export default Team
