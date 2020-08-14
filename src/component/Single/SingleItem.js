import React from 'react'
import './SingleItem.css'

function SingleItem(props) {
    return (
        <div>
            <ul className="single_item">
                {props.datas.id} <br/>{props.datas.title}
            </ul>
        </div>
    )
}

export default SingleItem
