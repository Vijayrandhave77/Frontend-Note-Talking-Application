import React, { useRef } from 'react'

function CreateNote({show,setShow,getDataHandler}) {
 
  let note = useRef("")

  const createNoteHandle =()=>{
    getDataHandler(note.current.value)
    setShow("none")
    note.current.value=""
  }


  return (
    <div className='create-note-popup' style={{"display":show}}>
      <div className='cut'onClick={()=>setShow("none")}>X</div>
      <div>
        <input type="text" placeholder='Take a note....' ref={note}/>
        <button onClick={createNoteHandle}>Create</button>
      </div>
    </div>
  )
}

export default CreateNote
