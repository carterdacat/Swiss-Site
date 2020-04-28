import './apply.css'
import React from 'react'
import "../global.css"

class Apply extends React.Component {
    render()
    {
        return(
            <div id={'apply'}>
        <div id='embed'>
            <p className='mediumcsText' >Fill out this form to gain access to our server!</p>
        </div>
        <embed
            src="https://docs.google.com/forms/d/e/1FAIpQLScEguSbiqdYYs0YG6gw4FP667mGsXwMPeuv-XDQzrB7hasUvA/viewform?embedded=true"
            width={window.innerWidth} height="600" frameBorder="0" marginHeight="0" marginWidth="0">
        </embed>
            </div>
    )
    }
}

export default Apply