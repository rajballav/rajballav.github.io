import React from 'react'

export default function Card(props) {
    return (
        <div className={props.className} >
            <img src={props.image} alt="" />
            <h1 className='name item'>{props.name}</h1>
            <p className='item'>{props.title}</p>
            <p className='item'>{props.quote}</p>


        </div>
    )
}
