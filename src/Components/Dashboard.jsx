import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import CreateNote from "./CreateNote";

function Dashboard() {

  let navigate = useNavigate();

  let reload = () => {
    Cookies.remove("jwtToken");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    navigate("/");
  };

  const [show, setShow] = useState("none");
  const [noteData, setNoteData] = useState([]);


  let getDataHandler = (data) => {
    noteData.push({ note: data });
    setNoteData(noteData);
    localStorage.setItem("Notes",JSON.stringify(noteData))
  };

  let deleteHandler = (idx)=>{
     let deletedData = noteData.filter((del,index)=>index!==idx)
     setNoteData(deletedData)
    localStorage.setItem("Notes",JSON.stringify(deletedData))

  }

  
  useEffect(()=>{
   let localdata =  localStorage.getItem("Notes")
   setNoteData(JSON.parse(localdata))
  })

  return (
    <div className="Dash-board">
      <nav>
        <div className="logo">
          {" "}
          <img src="/logo.png" alt="" />
          Dashboard
        </div>
        <div className="logout">
          <button onClick={() => reload()}>Sign Out</button>
        </div>
      </nav>

      {/* <div className="userinfo">
        <h1>Welcome, vijay randhave !</h1>
        <p>Email : "vijayrandhave77@gmail.com"</p>
      </div> */}

      <div className="create-note">
        <button onClick={() => setShow("block")}>Create Note</button>
      </div>

      <div className="notes-container">
        <h2>Notes</h2>
        {
          noteData==null?"":<div>
                  {noteData.map((item,index) => (
          <div className="notes-item" key={index}>
            <p>{item.note}</p> <MdOutlineDeleteForever className="delete" onClick={()=>deleteHandler(index)}/>
          </div>
        ))}
        </div>
        }
      

      </div>

      <CreateNote
        show={show}
        setShow={setShow}
        getDataHandler={getDataHandler}
      ></CreateNote>
    </div>
  );
}

export default Dashboard;
