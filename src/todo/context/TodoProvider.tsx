import { ReactNode, useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoState } from '../interface/interfaces';
import { todoReducer } from "./TodoReducer";





const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '666',
            desc: 'Comprar pan y leche',
            completed: false
        },
        {
            id: '661',
            desc: 'jugar con el perro',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface Props {
    children: ReactNode;
}


export const TodoProvider = ({children}:Props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toogleTodo = (id:string) => {
        dispatch({
            type: 'toogleTodo',
            payload: {id}
        })
    }   

    return (
        <TodoContext.Provider value={{
            todoState,
            toogleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )

}