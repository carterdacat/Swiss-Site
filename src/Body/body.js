import React from 'react';
import './body.css';
import img from './placeholder.png';
import '../global.css'

class Body extends React.Component {
    render() {
        return (
            <div>
            <img src={img} alt="Our Minecraft world" width={window.innerWidth} height={window.innerHeight} />
             <p className='biggerText'>Text 4</p>
                <embed
                    src="https://docs.google.com/forms/d/e/1FAIpQLScbA0DTIN_hCeRkn4HDhw2I4pAfjjbEJQce_5PaRxNtjS2_rw/viewform?embedded=true"
                    width={window.innerWidth} height={window.innerHeight} frameBorder="0" marginHeight="0" marginWidth="0">
                </embed>
            </div>
        );
    }
}

export default Body;