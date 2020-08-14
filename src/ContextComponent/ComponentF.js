import React, { useContext } from 'react'
import {UserContext} from '../ContextComponent/UserContext';

function ComponentF() {
    const data = useContext(UserContext);
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default ComponentF
