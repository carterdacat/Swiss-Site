import React from 'react';
import './header.css';
import '../global.css'
import image from './logo.png'


class Header extends React.Component {
render() {
   return(
       <div>
        <header className="top-header">
        <p>Swiss MC Server</p>
            <a className="logo" href="https://discord.gg/swiss001"><img src={image} width="50px" height="50px" alt={'Discord'} />
            </a>
            <nav>
                <ul className="nav-links">
                    <li><a href="#rules">Rules</a></li>
                    {/* to add a item, just do another <li></li> tag */}
                </ul>
            </nav>
        </header>
    </div>
   );
};
}

export default Header;
