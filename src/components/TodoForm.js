import React from 'react';
import './Styles/TodoForm.css'

function TodoForm(props) {

    const {onFormSubmit, item, onItemChange} = props;

    //Styles 

    // const formStyles = {
    //     width: '100%',
    //     height: '45px',
    //     display: 'flex', 
    //     // alignItems: 'center', 
    //     justifyContent: 'center', 
    //     marginTop: '20px',
    
    // }

    // const inputStyles = {
    //     width: '70%',
    //     borderStyle: 'solid',
    //     borderWidth: 'thin',
    //     borderColor: 'lightgrey',
    //     borderRadius: '3px',
    //     fontSize: '12px',
    //     fontWeight: '200',
    //     fontStyle: 'italic',
    //     letterSpacing: '2.5px',
    //     paddingLeft: '10px',
    //     opacity: '0.7'
        

    // }

    // const btnStyles = {
    //     width: '14%',
    //     marginLeft: '5px',
    //     borderStyle: 'solid',
    //     borderWidth: 'thin',
    //     borderColor: '#6EE7B7',
    //     backgroundColor: '#6EE7B7',
    //     color: 'white',
    //     letterSpacing: '2px',
    //     fontSize: '15px',
    //     fontWeight: '900',
    //     borderRadius: '3px'
    // }


    return (
        <form className='formStyles' onSubmit={onFormSubmit}>
            <input className='inputStyles' type='text' value={item} onChange={onItemChange} placeholder="What's your plans today?"/>
            <button className='btnStyles'>Add</button>
        </form>
    )
}

export default TodoForm;
