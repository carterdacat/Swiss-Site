import React from 'react';
import './header.css';
import '../global.css'
import image from './logo.png'


class Header extends React.Component {
render() {
   return(
       <div>
        <header className="top-header">
            <a className="logo" href="/"><img src={image} width="50px" height="50px" alt={'Discord'} />
                <p>Swiss MC Server</p>
            </a>
            <nav>
                <ul className="nav-links">
                    <li><a>text 1, will scroll to apply screen or goto a new page with that</a></li>
                    {/* to add a item, just do another <li></li> tag */}
                </ul>
            </nav>
        </header>
    </div>
   );
};
}

export default Header;
