import { useReducer, useEffect, useRef } from 'react';
import React from 'react'

export default function Counter() {
  const initialState = {
    isRunning: false,
    time: 0
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'start':
        return { ...state, isRunning: true };
      case 'stop':
        return { ...state, isRunning: false };
      case 'reset':
        return { isRunning: false, time: 0 };
      case 'tick':
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  // const idRef = useRef(0);
  useEffect(() => {
    console.log(state.isRunning)
    if (state.isRunning===true) {
       setInterval(() => dispatch({ type: 'tick' }), 1000)
       return ()=>clearInterval()

    }

  }, [state.isRunning]);

  return (
    <>
      <div>
        {state.time}s
        <button onClick={() => dispatch({ type: 'start' })}>
          Start
        </button>
        <button onClick={() => dispatch({ type: 'stop' })}>
          Stop
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>
    </>
  )
}
