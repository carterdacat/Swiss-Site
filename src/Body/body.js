import React from 'react';
import './body.css';
import img from './unknown.png';
import '../global.css'

class Body extends React.Component {
    render() {
        return (
            <div>
            <img src={img} alt="Our Minecraft World" width={window.innerWidth} height={window.innerHeight} />
             <div id='embed'>
             <p className='mediumcsText'>Fill out this form to gain access to our server!</p>
             </div>
                <embed
                    src="https://docs.google.com/forms/d/e/1FAIpQLScEguSbiqdYYs0YG6gw4FP667mGsXwMPeuv-XDQzrB7hasUvA/viewform?embedded=true"
                    width={window.innerWidth} height="600" frameBorder="0" marginHeight="0" marginWidth="0">
                </embed>
            </div>
        );
    }
}

export default Body;