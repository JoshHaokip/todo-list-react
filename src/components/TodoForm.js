import React from 'react';
import './Styles/TodoForm.css'

function TodoForm(props) {

    const {onFormSubmit, item, onItemChange} = props;


    return (
        <form className='formStyles' onSubmit={onFormSubmit}>
            <input className='inputStyles' type='text' value={item} onChange={onItemChange} placeholder="What's your plans today?"/>
            <button className='btnStyles'>Add</button>
        </form>
    )
}

export default TodoForm;


