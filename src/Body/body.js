import React from 'react';
import './body.css';
import img from './unknown.png';
import '../global.css'

class Body extends React.Component {
    render() {
        return (
            <div>
            <img src={img} alt="Our Minecraft World" width={window.innerWidth} height={window.innerHeight} />
            </div>
        );
    }
}

export default Body;