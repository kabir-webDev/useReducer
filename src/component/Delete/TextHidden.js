import React from 'react'
import { useState } from 'react'
import './TextHidden.css'

function TextHidden({text, maxlength}) {
    const [del, setDel] = useState(false);

    return (
        <div>
            <h2>{del? <del className="kata">{text}</del> : text}</h2> <br/>
            <button onClick={() => setDel(true)}>Let's Cut this</button>
        </div>
    )
}

export default TextHidden
