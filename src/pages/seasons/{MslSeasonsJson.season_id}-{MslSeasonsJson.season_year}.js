import React from "react"
import { graphql } from "gatsby"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "../../data/fragments"

function Season(props) {
  const { season } = props.data
  return <div>Season {season.season_id}-{season.season_year}</div>
}

export const query = graphql`
  query($id: String) {
    season: mslSeasonsJson(id: { eq: $id }) {
      ...MslSeasonsJsonFragment
    }
  }
`

export default Season
