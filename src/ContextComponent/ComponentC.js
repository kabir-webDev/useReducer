import React from 'react';
import {UserContext} from '../ContextComponent/UserContext';

function ComponentC() {
    return (
        <UserContext.Provider value="This is from Component C">
        <div>
            
        </div>
        </UserContext.Provider>
    )
}

export default ComponentC
