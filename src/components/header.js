import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "./layout"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      color: "white",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to="/page-2/">Page2</Link> <br />
      <Link to="/gmm/">GMM</Link> <br />
      <Link to="/rules/">Rules</Link> <br />
      <Link to="/schedule/">Schedule</Link> <br />
      <Link to="/stats/">Stats</Link> <br />
      <Link to="/teams/">Teams</Link> <br />
      <Link to="/players/">Teams</Link> <br />
      <Link to="/using-typescript/">Using TypeScript</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
