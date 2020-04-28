import './header.css';
import '../global.css'
import image from './logo.png'
import React from 'react';
import '../index.css';
import Rules from '../Rules/rules'
import Body from '../Body/body';
import Apply from '../Apply/apply';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


class Header extends React.Component {
render() {
   return(
       <Router>
       <div>
        <header className="top-header">
        <p>Swiss MC Server</p>
            <a className="logo" href="https://discord.gg/swiss001"><img src={image} width="50px" height="50px" alt={'Discord'} />
            </a>
            <nav>
                <ul className="nav-links">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/rules"}>Rules</Link></li>
                    <li><Link to={"/apply"}>Apply</Link></li>
                    {/* to add a item, just do another <li></li> tag */}
                </ul>
            </nav>
        </header>
    </div>
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
   );
};
}

export default Header;
