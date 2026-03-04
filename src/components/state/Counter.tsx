import { useReducer } from "react"

type CounterState = {
    count : number
}

type CounterWithPayload = {
    type : 'Increment' | 'Decrement'
    payload : number
}
type CounterWithOutPayload = {
    type : 'Reset'
}

type CounterAction = CounterWithPayload | CounterWithOutPayload

const initialState = { count : 0 }
const reducer = (state : CounterState, action : CounterAction)=>{
    switch (action.type) {
        case 'Increment':
            return { count : state.count + action.payload }
        case 'Decrement':
            return { count : state.count - action.payload }
        case 'Reset':
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Count : {state.count}</h1>
        <button onClick={()=> dispatch({type : 'Increment' , payload : 10})}>Increment</button>
        <button onClick={()=> dispatch({type : 'Decrement', payload : 12})}>Decrement</button>
        <button onClick={()=> dispatch({type : 'Reset'})}>Reset</button>
    </div>
  )
}

export default Counter