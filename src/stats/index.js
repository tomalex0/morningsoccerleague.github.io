import React from 'react';
import (/* webpackChunkName: "button" */ '../scss/bootstrap/button.scss');


class Stats extends React.Component {
    render() {
        return <div>
            <h1>Stats</h1>
            <button type="button" className="btn btn-danger">Primary</button>
        </div>
    }
}
export default Stats