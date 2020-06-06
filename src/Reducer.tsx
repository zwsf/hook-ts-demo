import React, {FC, useReducer} from 'react'

interface ICounter {
    initialCount: number
}

const Counter: FC<ICounter> = ({initialCount = 0}) => {
    const [state, dispatch] = useReducer(reducer, {count: initialCount})

    defaultCount = initialCount

    const add = () => dispatch({type: ActionType.INCREMENT, num: 2})
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

            <Son initialCount={state.count} />
        </div>
    )
}

// 层层传递的方案
const Son: FC<ICounter> = ({initialCount = 0}) => {
    return (
        <div>
            Son counter：{initialCount}
            <Child initialCount={initialCount} />
        </div>
    )
}

const Child: FC<ICounter> = ({initialCount = 0}) => {
    return (
        <div>
            child counter：{initialCount}
        </div>
    )
}

export default Counter

interface IState {
    count: number
}

enum ActionType {INCREMENT, DECREMENT, RESET}

interface IAction {
    type: ActionType,
    [propName: string]: any
}

let defaultCount = 0

function reducer(state: IState, action: IAction): any {
    switch (action.type) {
        case ActionType.INCREMENT:
            return {count: state.count + action.num}
        case ActionType.DECREMENT:
            return {count: state.count - 1}
        case ActionType.RESET:
            return {count: defaultCount}
        default:
            break;
    }
}