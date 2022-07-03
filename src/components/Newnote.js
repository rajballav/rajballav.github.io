import React from 'react'



export default function Newnote(props) {
  
  
  return (
    <div className='note new-note'>
       <textarea  
        placeholder='ENTER TEXT...'
        id=""
        cols="30"
        rows="10"
        value={props.text}
        onChange={props.textchange}></textarea>
        <div className="newfooter">
        <div className="characters"> character remaining  {props.character_remaining}</div>
        <div className="save">
            <button onClick={props.save}>save</button>
        </div>
        </div>   
    </div>
  )
}
