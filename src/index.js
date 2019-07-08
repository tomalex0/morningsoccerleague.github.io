import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/bootstrap/bootstrap-base.scss';


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import  HeaderComponent from './components/header'
//const HeaderComponent = lazy(() => import('./header'));

import * as serviceWorker from './serviceWorker';



const Teams = lazy(() => import(/* webpackChunkName: "teams" */ './teams'));
const Schedule = lazy(() => import(/* webpackChunkName: "schedule" */'./schedule'));
const Stats = lazy(() => import(/* webpackChunkName: "stats" */'./stats'));



const routing = (
    <Router>
        <div>
            <HeaderComponent></HeaderComponent>
            <div className="container">
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/schedule" component={Schedule} />
                        <Route path="/stats" component={Stats} />
                        <Route path="/teams" component={Teams} />
                    </Switch>
                </Suspense>
            </div>
            <div>
                Footer
            </div>
        </div>
    </Router>
)



ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
