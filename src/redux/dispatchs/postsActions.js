export const DATA_LOADING="DATA_LOADING"
export  const SET_DATA="SET_DATA"
export  const SETERROR="SETERROR"

export const Getdata=()=>{
    return async (dispatch)=>{
            dispatch({
                type:DATA_LOADING,
                payload:true
            })
            try{
                const data= await fetch('https://jsonplaceholder.typicode.com/posts').then(data=>data.json())
            dispatch({
                type:SET_DATA,
                payload:data
            })
            }
            catch(e){
                console.log(e)
                // dispatch({
                //     type:DATA_LOADING,
                //     payload:data
                // })
            }
    }
}