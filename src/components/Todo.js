import React from 'react'

function Todo({details}) {

    const itemStyle = {

        fontSize: '15px',
        fontWeight: '400',

    }


    return (


            <p style={itemStyle}>{details.item}</p>

    )
}

export default Todo;
