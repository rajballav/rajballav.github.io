import React from 'react'
import Notes from './Notes'
import { useState } from 'react'
import Newnote from './Newnote'
import { v4 as uuid } from 'uuid';
import Search from './Search';

import usercontext from '../context/context'
import { useContext } from 'react'




export default function Notelist() {


  const dataofuser = useContext(usercontext)
  console.log(dataofuser.note)

  
  

  

  const [search, setsearch] = useState("")
  const handlesearch = (e) => {
    const searchtext = e.target.value
    setsearch(searchtext)
  }

  // const [note, setnote] = useState([])
  // console.log(note)
  // const sendUserdata = (allnote) => {
  //   set(ref(database, `users/${dataofuser.uid}`), allnote)
  // }



  // if (dataofuser.islogin===false ) {


  //   senddata(note)
  // }
  let totalentry = []


  const [text, settext] = useState("")
  let newtext

  const textchange = (e) => {
    newtext = e.target.value
    if (e.target.value.length <= 200) {

      settext(newtext)
    }


  }
  const max_length = 200
  const character = text.length
  const character_remaining = max_length - character

  let newentry
  const save = () => {
    newentry = {
      uid: uuid(),
      text: text,
      date: new Date().toLocaleDateString()
    }


    totalentry = [...dataofuser.note, newentry]
    // console.log(search)

    if (text) {
      dataofuser.setnote(totalentry)
    }
    settext("")
  }

  // const find =()=>{
  //   totalentry=note.filter((itm)=>{
  //     return itm.text.toLowerCase().includes(search)
  //   })
  //   setnote(totalentry)

  // }




  return (
    <div className="total">
      <Search search={handlesearch} />
      <div className='notelist'>
        {dataofuser.note.filter((i) => { return i.text.toLowerCase().includes(search) }).map((element) => {
          const deletenote = () => {
            const checker = (item) => {
              return item.uid !== element.uid
            }
            totalentry = dataofuser.note.filter(checker)



            // console.log(totalentry)
            dataofuser.setnote(totalentry)
          }


          return <Notes notes={element} delete={deletenote} key={element.uid} />
        })}
        <Newnote text={text} textchange={textchange} save={save} character_remaining={character_remaining} />


      </div>
    </div>
  )

}


