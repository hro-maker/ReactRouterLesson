
import { DATA_LOADING,SETERROR,SET_DATA } from "../dispatchs/postsActions";
const initialState={
      data:[],
      loading:false,
      error:""
}
export const PostReducer=(state=initialState,action)=>{
    switch (action.type) {
        case DATA_LOADING:
                return{
                    ...state,
                    loading:true,
                    data:[],
                    error:""
                }
            break;
        case SET_DATA:
                return{
                    ...state,
                    loading:false,
                    error:"",
                    data:action.payload
                }
            break;
        case SETERROR:
                return{
                    ...state,
                    loading:false,
                    error:action.payload,
                    data:[]
                }
            break;
        default:
            return state
            break;
    }
}