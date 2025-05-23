import { Todo, TodoState } from "../interface/interfaces";

type TodoActions =
    |{type:'addTodo', payload:Todo}
    |{type:'toogleTodo', payload: {id:string} }

export const todoReducer = (state:TodoState, action: TodoActions):TodoState => {
    

    console.log(action);

    switch (action.type) {
        case "addTodo":
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }

        case "toogleTodo":
            return {
                ...state,
                todos: state.todos.map(({...todo}) => {
                    if(todo.id === action.payload.id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
    
        default:
            return state;
    }
}