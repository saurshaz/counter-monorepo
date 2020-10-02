import React from "react";
// import { Button } from "@nighttrax/components";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'mono-app-common';

export default function () {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Next App 2</h1>
            Count is {count}
            <button onClick={() => dispatch(increment())}>INC</button>
            <button onClick={() => dispatch(decrement())}>DEC</button>
        </div>
    )
}
