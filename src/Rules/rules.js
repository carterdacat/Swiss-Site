import React from 'react';
import './rules.css';
import '../global.css'

class Body extends React.Component {
    render() {
        return (
            <div>
             <div>
             <p className='largecenteredText'>Our Rules!</p>
             </div>
             <div id='rules'>
                 <p className='mediumcenteredText'>1. No griefing</p>
                 <p className='mediumcenteredText'>2. No toxicity</p>
             </div>
            </div>
        );
    }
}

export default Body;