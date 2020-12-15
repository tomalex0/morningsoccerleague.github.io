import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslSeasonStatsItem from "components/msl/season-stats-item"

import { getSeasonStats } from "graphql/lib/helpers"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

function Season({ data, path }) {
  const { season } = data
  const seasonItem = getSeasonStats([season])[0]
  const title = `${season.season_id}-${season.season_year}`
  const seasonStats = seasonItem.seasonStats

  return (
    <Layout>
      <SEO title={title} path={path} />
      <h1>
        Hi Season {season.season_id}-{season.season_year}
      </h1>
      <ul>
        <MslSeasonStatsItem season={seasonItem} />
      </ul>
      <div>
        <ul>
          {seasonStats.scorers.map(stats => (
            <li>
              <Link to={stats.playerPath}>
                {stats.name} - {stats.goals}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <div>
          <Link to={season.fixturePath}>See Fixtures</Link>
        </div>
        <div>
          <Link to={season.statsPath}>See Stats</Link>
        </div>
        <div>
          <Link to={season.standingPath}>See Standings</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    season: mslSeasonsJson(id: { eq: $id }) {
      ...MslSeasonsJsonFragment
      schedules {
        id
        gamestats {
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
          fouls
          cautions {
            minute
            caution_id
          }
        }
      }
      mos {
        ...MslPlayersJsonFragment
        seasons {
          season_id
        }
      }
      teams {
        players {
          id
        }
      }
    }
  }
`

export default Season
