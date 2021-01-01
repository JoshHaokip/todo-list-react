import React from 'react';
import FullDateLeft from './FullDateLeft';
import FullDateRight from './FullDateRight';


function DateSection() {

    // STYLES
    const dateSectionContainer = {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '25%', 
        width: '100%', 
        backgroundColor: 'white',
        marginTop: '5%',
    }; 


    return (
        <div style={dateSectionContainer}>

            <FullDateLeft />
            <FullDateRight />
            
        </div>
    )


}

export default DateSection;
