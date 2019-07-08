import React, { Component } from 'react';
import (/* webpackChunkName: "button" */ '../scss/bootstrap/button.scss');

class Schedule extends Component {
    render() {
        return <div>
            <h1>Schedule</h1>
            <button type="button" className="btn btn-primary">Primary</button>
         </div>
    }
}
export default Schedule