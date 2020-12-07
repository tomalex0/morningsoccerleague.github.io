import React from "react"
import { graphql } from "gatsby"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "../../data/fragments"

function Player(props) {
  const { player } = props.data
  return <div>Player {player.name}</div>
}

export const query = graphql`
  query($id: String) {
    player: mslPlayersJson(id: { eq: $id }) {
      ...MslPlayersJsonFragment
    }
  }
`

export default Player
