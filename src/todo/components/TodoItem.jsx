import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoItem = ({todo}) => {

    // const handleClick = () => {
    //     console.log('click en:', todo.desc);
    // }

    const {id, desc, completed} = todo;
    const {toogleTodo} = useContext(TodoContext);


    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: completed ? 'line-through' : ''
        }}
            onClick={() => toogleTodo(id)}>
                {desc}
        </li>
    )
}
