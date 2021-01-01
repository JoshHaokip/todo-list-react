import React from 'react';

function FullDateLeft() {

    //DATE MODIFY

    // Select month based on Abbreviation
    const monthNumber = (new Date().getMonth() + 1);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthName = monthNames[monthNumber - 1];

    //Date selector
    const dateNumber = (new Date().getDate());

    //Year selector
    const dateYear = (new Date().getFullYear())

    //STYLES

    const fullDateLeftContainer = {display: 'flex', textAlign: 'left', height: '100%', width: '50%',}

    const fullDateLeftDay = {display: 'flex',alignItems: 'center', float: 'right',height: '100%',/* width: '35%' */ width: '18%',}

    const fullDateLeftMY = {float: 'left', height: '100%', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '0px'}

    const monthNameStyle = {fontSize: '65px', margin: '0', fontWeight: '400'}

    const fullDateRight1 = {margin: '5px', fontWeight: '900', letterSpacing: '5.5px',}

    const fullDateRight2 = {margin: '5px', color: '#C0C0C0',fontWeight: '600',}
        
    return (

        <div style={fullDateLeftContainer}>

            <div style={fullDateLeftDay}>

                <h1 style={monthNameStyle}>{dateNumber}</h1>        
            </div>

            <div style={fullDateLeftMY}>
                <h4 style={fullDateRight1}>{monthName}</h4>
                <h4 style={fullDateRight2}>{dateYear}</h4>
            </div>

        </div>
    
    )
}

export default FullDateLeft
