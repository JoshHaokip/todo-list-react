import React from 'react';

function TodoForm(props) {

    const {onFormSubmit, item, onItemChange} = props;

    //Styles 

    const formStyles = {
        width: '100%',
        height: '45px',
        display: 'flex', 
        // alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '20px',
    
    }

    const inputStyles = {
        width: '65%',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: 'lightgrey',
        borderRadius: '3px',
        fontSize: '12px',
        fontWeight: '200',
        fontStyle: 'italic',
        letterSpacing: '3px',
        paddingLeft: '15px',
        opacity: '0.7'
        

    }

    const btnStyles = {
        width: '14%',
        marginLeft: '5px',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: '#6EE7B7',
        backgroundColor: 'red',
        color: 'white',
        letterSpacing: '2px',
        fontSize: '15px',
        fontWeight: '900',
        borderRadius: '3px'
    }


    return (
        <form style={formStyles} onSubmit={onFormSubmit}>
            <input style={inputStyles} type='text' value={item} onChange={onItemChange} placeholder='Keep it brief.'/>
            <button style={btnStyles}>Add</button>
        </form>
    )
}

export default TodoForm;
