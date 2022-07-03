import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export default function Notes(props) {
    

    
    
    return (

        <div className='note'>
            <div className="notetext">
                {props.notes.text}
            </div>
            <div className="notefooter">
                <small className="notedate">{props.notes.date}</small>
                <MdDeleteForever className='notedelete' onClick={props.delete} />
            </div>
        </div>
    )
}
