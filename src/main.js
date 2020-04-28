import React from 'react';
import './index.css';
import Header from './Header/header';
import Rules from './Rules/rules'
import Body from './Body/body';
import Apply from './Apply/apply';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class Main extends React.Component {
    render(){
        return(
            <Router>
            <Header />
                <Header />
                <Switch>
                    <Route path="/apply">
                        <Apply />
                    </Route>
                    <Route path="/rules">
                        <Rules />
                    </Route>
                    <Route path="">
                        <Body />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Main;