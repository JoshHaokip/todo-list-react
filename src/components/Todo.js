import React from 'react';
import './Styles/todo.css'


function Todo({details}) {

    // const itemStyle = {

    //     fontSize: '15px',
    //     fontWeight: '400',
    //     fontStyle: 'italic',
    //     letterSpacing: '3px',
    //     opacity: '0.8',
    // }

    return (


            <p className='itemStyle'>{details.item}</p>

    )
}

export default Todo;
