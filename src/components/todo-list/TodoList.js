import './TodoList.css';

const TodoList = (props) => {
    return (
        <ul>{
            props.dataTodos.map((todo) => {
                return (
                    <li>
                        <span key={todo.id}>{todo.title}</span>
                    </li>
                )
            })
        }</ul>
    )
}

export default TodoList;