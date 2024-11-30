import './App.css'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Dashboard from './Components/Dashboard'
import Cookies from 'js-cookie'
import { createBrowserRouter,createRoutesFromChildren,Route,RouterProvider,Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Authenticate from './Components/Athenticate'
import CreateNote from './Components/CreateNote'
function App() {
 
  const [token,setToken] = useState()
  useEffect(()=>{
    let tok = Cookies.get('jwtToken')
    setToken(tok)
  },[])

  let router = createBrowserRouter(
    createRoutesFromChildren(
      <Route>
        <Route path='/' element={!token?<Signup/>:<Dashboard/>}></Route>
        <Route path='signin' element={!token?<Signin/>:<Dashboard/> }></Route>
        <Route path='dashboard' element={ token?<Dashboard/>:<Signin/>}></Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
