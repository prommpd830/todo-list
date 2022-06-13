import './Todo.css';
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {

    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Eat' },
        { id: 2, title: 'Sleep' },
        { id: 3, title: 'Code' },
    ]);

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo;