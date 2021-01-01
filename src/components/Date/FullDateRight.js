import React from 'react';
import moment from 'moment';

function FullDateRight() {

    
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[new Date().getDay()];

    const hoursLeft = moment().endOf('day').fromNow();



    const fullDateRightContainer = {
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'right',
        height: '100%',
        width: '50%',
       
    }

    const fullDateRight = {
        display: 'flex',
        alignItems: 'right', 
        flexDirection: 'column',
        justifyContent: 'center', 
        paddingLeft: '0px'
    }

    const dayStyles = {margin: '5px', fontSize: '17px', fontWeight: '600'}

    const timeRemainingStyles = {margin: '5px', fontSize: '12px', fontWeight: '900', color: '#6EE7B7'}

    return (
        <div style={fullDateRightContainer}>
            
            <div style={fullDateRight}>
                <h3 style={dayStyles}>{day}</h3>  
                <h3 style={timeRemainingStyles}>Complete {hoursLeft}</h3>      
            </div>
        </div>
    )
}

export default FullDateRight;
