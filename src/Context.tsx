import React, {FC, createContext, Dispatch, useReducer, useContext} from 'react'

interface ICounter {
    initialCount: number
}

interface IState {
    count: number
}

enum ActionType {INCREMENT, DECREMENT, RESET}

interface IAction {
    type: ActionType
}

let defaultCount = 0

function reducer(state: IState, action: IAction): any {
    switch (action.type) {
        case ActionType.INCREMENT:
            return {count: state.count + 1}
        case ActionType.DECREMENT:
            return {count: state.count - 1}
        case ActionType.RESET:
            return {count: defaultCount}
        default:
            break;
    }
}

interface IMixStateAndDispatch {
    state: IState,
    dispatch?: Dispatch<IAction>
}

const StateContext = createContext<IMixStateAndDispatch>({state: {count: defaultCount}})

const Counter: FC<ICounter> = ({initialCount = 0}) => {
    const [state, dispatch] = useReducer(reducer, {count: initialCount})

    defaultCount = initialCount

    const add = () => dispatch({type: ActionType.INCREMENT})
    const sub = () => dispatch({type: ActionType.DECREMENT})
    const reset = () => dispatch({type: ActionType.RESET})

    return (
        <div>
            <p>Counter: {state.count}</p>
            <button onClick={add}>增加</button>
            <div style={{marginBottom: 10}}></div>
            <button onClick={sub}>减少</button>
            <div style={{marginBottom: 10}}></div>
            <button onClick={reset}>复位</button>

            <StateContext.Provider value={{state, dispatch}}>
                <Son />
            </StateContext.Provider>
        </div>
    )
}

// FIXME 跨组件的数据透传 脱离了ts约束
const Son = () => {
    const {state, dispatch} = useContext(StateContext)

    const add = () => dispatch && dispatch({type: ActionType.INCREMENT})
    return (
        <div>
            Son counter：{state.count}
            <div style={{marginBottom: 10}}></div>
            <button onClick={add}>在son中增加</button>
            <Child />
        </div>
    )
}

const Child = () => {
    const {state, dispatch} = useContext(StateContext)
    const sub = () => dispatch && dispatch({type: ActionType.DECREMENT})

    return (
        <div>
            child counter：{state.count}
            <div style={{marginBottom: 10}}></div>
            <button onClick={sub}>在child中减少</button>
        </div>
    )
}

export default Counter