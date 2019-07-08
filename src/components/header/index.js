import React, { Component } from 'react'
import {Link} from "react-router-dom";

import '../../scss/bootstrap/navbar.scss';

class HeaderComponent extends Component {
    render() {
        return <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/teams" className="nav-item nav-link">Teams</Link>
                        <Link to="/schedule" className="nav-item nav-link">Schedule</Link>
                        <Link to="/stats" className="nav-item nav-link">Stats</Link>
                    </div>
                </div>
            </nav>
        </header>

    }
}
export default HeaderComponent