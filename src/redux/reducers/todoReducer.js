import {CREATE_TODO} from '../dispatchs/todosActions'


const initialSTate={
    todos:[],
}

export const  TodosReducer=(state=initialSTate,action)=>{
        switch (action.type) {
            case CREATE_TODO:
                    return {
                        ...state,
                        todos:[...state.todos,action.payload]
                    }
            default:
                return state
                break;
        }
}