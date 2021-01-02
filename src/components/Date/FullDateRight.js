import React from 'react';
import moment from 'moment';

function FullDateRight() {

    //DATE MODIFY

    // Day of the week selector

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[new Date().getDay()];

    // Moment.js - To determine how long till midnight

    const hoursLeft = moment().endOf('day').fromNow();

    // Styles for FullDateRight

    // const fullDateRightContainer = {display: 'flex',justifyContent: 'flex-end',textAlign: 'right',height: '100%',width: '50%',}

    // const fullDateRight = {display: 'flex',alignItems: 'right', flexDirection: 'column',justifyContent: 'center', paddingLeft: '0px'}

    // const dayStyles = {margin: '5px', fontSize: '20px', fontWeight: '600'}

    // const timeRemainingStyles = {margin: '5px', fontSize: '12px', fontWeight: '900', color: '#059669'}

    return (
        <div className='fullDateRightContainer'>
            
            <div className='fullDateRight'>
                <h3 className='dayStyles'>{day}</h3>  
                <h3 className='timeRemainingStyles'>Complete {hoursLeft}</h3>      
            </div>
        </div>
    )
}

export default FullDateRight;
