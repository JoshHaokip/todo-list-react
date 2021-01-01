import React from 'react';
import Todo from './Todo';
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import './TodoList.css'


function TodoList({todos, onDeleteClick, onToggleClick}) {

    const listContainer = {display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}

    const unorderedListStyles = {listStyle: 'none', marginTop: '30px', width: '85%', padding: '0'}

    const listStyles = {display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px'}

    const buttonStlyes = {height: '24px', width: '24px', color: '#6EE7B7', marginLeft: '15px'}
    
    return (

        <div style={listContainer}>

            <ul style={unorderedListStyles}>

                {todos.map(todo => 

                    <div className={todo.isComplete ? 'completionButtonStlyes complete' : 'completionButtonStlyes '}>
                        
                        <li style={listStyles} key={todo.id}>
                            <Todo details={todo} />
                            
                            <div>

                                <MdDone style={buttonStlyes} onClick={() => onToggleClick(todo.id)}/>
                                <MdDelete style={buttonStlyes} onClick={() => onDeleteClick(todo.id)}/>
                                

                            </div>
                        </li>

                    </div>

                )}


            </ul>

        </div>

    )
}

export default TodoList;


