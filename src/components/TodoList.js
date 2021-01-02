import React from 'react';
import Todo from './Todo';
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import './Styles/TodoList.css'


function TodoList({todos, onDeleteClick, onToggleClick}) {

    return (

        <div className='listContainer'>

            <ul className='unorderedListStyles'>

                {todos.map(todo => 

                    <div className={todo.isComplete ? 'completionButtonStlyes complete' : 'completionButtonStlyes'}>
                        
                        <li className='listStyles' key={todo.id}>
                            <Todo details={todo} />
                            
                            <div>

                                <MdDone className='buttonStlyes' onClick={() => onToggleClick(todo.id)}/>
                                <MdDelete className='buttonStlyes' onClick={() => onDeleteClick(todo.id)}/>
                                

                            </div>
                        </li>

                    </div>

                )}

            </ul>

        </div>

    )
}

export default TodoList;


