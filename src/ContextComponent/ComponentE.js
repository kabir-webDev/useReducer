import React from 'react'
import { useStateValue } from '../StateProvider.js';

function ComponentE() {
    const [ { basket } , dispatch] = useStateValue();
    return (
        <div>
            <h1>Total Product: {basket.length}</h1>
        </div>
    )
}

export default ComponentE
