import {COUNTER_DECREMENT,COUNTER_INCREMENT,COUNTER_CHANGEWITH_VALUE} from '../dispatchs/CounterActions'

const initialState={
      posts:[ ] ,
}
export const CounterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case COUNTER_INCREMENT:
                return{
                    ...state,
                    count:state.count+1
                }
            break;
        case COUNTER_DECREMENT:
                return{
                    ...state,
                    count:state.count-1
                }
            break;
        case COUNTER_CHANGEWITH_VALUE:
                return{
                    ...state,
                    count:state.count+action.payload
                }
            break;
        default:
            return state
            break;
    }
}