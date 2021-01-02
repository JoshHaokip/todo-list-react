import React, {useState} from 'react';
import DateSection from './Date/DateSection';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import uuid from 'react-uuid';
import './Styles/TodoApp.css'


function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [item, setItem] = useState('');

    function handleItemChange(e) {
        setItem(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!item || /^\s*$/.test(item)) {
            return;
          }

        setTodos([...todos, {
            id: uuid(),
            item: item,
            
        }]);

        setItem('');

    }

    function handleToggleComplete(id) {
        const completedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(completedTodos);
      };

    function handleDeleteClick(id) {
       setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className='todoFormContainer'>

            <DateSection />
            <div className='title'>
                <h2>Today's List</h2>
            </div>
            <TodoForm item={item} onItemChange={handleItemChange} onFormSubmit={handleFormSubmit}/>
            <TodoList todos={todos} onDeleteClick={handleDeleteClick} onToggleClick={handleToggleComplete}/>
    
        </div>

    )
}

export default TodoApp;
