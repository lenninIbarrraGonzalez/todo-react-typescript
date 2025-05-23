import { createContext } from "react";
import { TodoState } from '../interface/interfaces';

export type TodoContextProps= {
    todoState: TodoState,
    toogleTodo: (id:string) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);