import './TodoCreate.css';
import { useState } from "react";

const TodoCreate = (props)  => {
    const [getInputTodo, setInputTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        props.onCreateTodo(newTodo);
        setInputTodo('');

    }
    
    const handleInputTodo = (e) => {
        setInputTodo(e.target.value);
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' value={getInputTodo} onChange={handleInputTodo} placeholder='What your gonna do..'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TodoCreate;