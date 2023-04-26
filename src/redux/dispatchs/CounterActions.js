export const COUNTER_INCREMENT="COUNTER_INCREMENT"
export  const COUNTER_DECREMENT="COUNTER_DECREMENT"
export  const COUNTER_CHANGEWITH_VALUE="COUNTER_CHANGEWITH_VALUE"
export const Increment=()=>{
    return  {
        type:COUNTER_INCREMENT,
    }
}

export const Decrement=()=>{
    return  {
        type:COUNTER_DECREMENT,
    }
}

export const CHanegWithValue=(newNum)=>{
    return  {
        type:COUNTER_CHANGEWITH_VALUE,
        payload:newNum
    }
}