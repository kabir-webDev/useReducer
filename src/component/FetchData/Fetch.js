import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import SingleItem from '../Single/SingleItem';

function Fetch() {
    const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(BASE_URL)
        .then(res => res.json())
        .then(items => setData(items.splice(0,11)))
        console.log(data);
    },[])

    return (
        <div>
            {
              data.map((info)=>{
                  return <SingleItem datas={info} key={info.id}/>
              })
            }
        </div>
    )
}

export default Fetch
