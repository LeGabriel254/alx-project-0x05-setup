import { error } from "console";
import { useState,ReactNode, createContext,useContext } from "react";

interface CounterContextProps {
  count:number
  increment: () => void;
  decrement: () => void,
};

export const CountContext = createContext<CounterContextProps | undefined>  (undefined)

export const CountProvider =({children}: {children:ReactNode}) =>{
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1 )
  const decrement = () => setCount((count) => count > 0 ? count - 1: 0 )
  
  return (
    <CountContext.Provider value ={{ count, increment,decrement}}>
      {children}
    </CountContext.Provider>
  )
}




export const useCount = () => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be within a Count Provider")
  }

  return context
}