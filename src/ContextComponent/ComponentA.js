import React from 'react'
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

function ComponentA() {
    return (
        <div>
            <ComponentC/>
            <ComponentD/>
        </div>
    )
}

export default ComponentA;
