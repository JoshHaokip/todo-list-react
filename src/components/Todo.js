import React from 'react';
import './Styles/todo.css'


function Todo({details}) {

    return (

            <p className='itemStyle'>{details.item}</p>

    )
}

export default Todo;
