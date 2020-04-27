import React from 'react';
import './header.css';
import '../global.css'


class Header extends React.Component {
render() {
   return(
       <div>
        <header className="top-header">
            <p className="bigText">text 2</p>
            <nav>
                <ul className="nav-links">
                    <li><a>text 1, will scroll to apply screen</a></li>
                    <li><a href={'https://www.discord.gg/swiss001'}>Join Our Discord!</a></li>
                </ul>
            </nav>
        </header>
    </div>
   );
};
}

export default Header;
