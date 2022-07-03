import React from 'react'
import {MdSearch} from 'react-icons/md'



export default function Search(props) {


  return (
    <div className='search'>
        <MdSearch className='search-icon' size="40px"/>
        <input type="text" placeholder='SEARCH NOTE HERE. . .' onChange={props.search} />
        <button onClick={props.find}>Search</button>
      
    </div>
  )
}
