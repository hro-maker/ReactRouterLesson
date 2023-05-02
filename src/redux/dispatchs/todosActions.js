export const CREATE_TODO="CREATE_TODO"

export const CreateTodoActionCreator=(newTodo)=>{
    return {
        type:CREATE_TODO,
        payload:newTodo
    }
}