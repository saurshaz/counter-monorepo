import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'mono-app-common';

function Count() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>App 2</h1>
            Count is {count}
            <button onClick={() => dispatch(increment())}>INC</button>
            <button onClick={() => dispatch(decrement())}>DEC</button>
        </div>
    )
}

export default Count
