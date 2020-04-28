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
                 <ol>
                 <li className='mediumcenteredText'>1. No grieving</li>
                 <li className='mediumcenteredText'>2. No toxicity</li>
                 <li className='mediumcenteredText'>3. No stealing</li>
                 <li className='mediumcenteredText'>4. No pvp, unless agreed to</li>
                 </ol>
             </div>
            </div>
        );
    }
}

export default Body;