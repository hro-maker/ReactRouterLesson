import {createContext,useState} from "react";

export const LoadingContext=createContext()


const LoadingProvider=({children})=>{

    const [isLoading, setloading] = useState(false)
    const changeLoading=(bool)=>{
        setloading(bool)
    }
    return <LoadingContext.Provider value={{
        isLoading,
        changeLoading
    }}>

           {children}
    </LoadingContext.Provider>
}
export default LoadingProvider