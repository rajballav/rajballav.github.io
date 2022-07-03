import React from 'react'
import Card from './Card'
import data from './data'
import { useState } from 'react'

export default function Cards() {
  const [index, setindex] = useState(0)
  
  function prev() {
    console.log("prev")

    if(index>0){
    setindex(index-1)
    }
    if(index===0)
      setindex(data.length-1)
    }
    
  
  function next() {
    console.log(next)
    
    if (index>=0 && index<data.length-1){
      setindex(index+1)

    }
    if(index===data.length-1){
      setindex(0)
      position="next-slide"
    

    }
  }
  let position
  return (
    <>
      <img onClick={prev} className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJqFKPpDHkiuPet3m0mF5-FOsyjrG-bMCDQ&usqp=CAU" alt="" />

      <div className='container'>
        {data.map((element, elementindex) => {
          
          if (elementindex>index){
            position="next-slide"
          }
          if (elementindex===index){
            position="active-slide"
  
          }
          if(elementindex<index ){
            position="last-slide"
          }
          if(elementindex===data.length-1){
            console.log("raj")
            position="next-slide"
          }
          return <Card className={position} key={element.id} image={element.image} name={element.name} title={element.title} quote={element.quote} />
      })}



      </div>
      <img onClick={next} className='img2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3ryA7INAspVLSMVfemaZnqc7-WgHjVgGCw&usqp=CAU" alt="" />
     
    </>
  )
}
