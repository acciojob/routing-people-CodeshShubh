import {BrowserRouter , Route , Routes} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import UserList from './UserList';
import UserDetails from './UserDetails';

const App = () => {


  const [users, setusers] = useState([])
const [isLoading, setisLoading] = useState(true)

useEffect(() => {
    setisLoading(true)
   fetch('../../Public/User.json').then((response)=> response.json())
   .then((data)=>{
      setusers(data);
      setisLoading(false)
   }).catch((error)=> console.log('Error while fetching data:', error))
}, [])

  return ( 
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList users={users} isLoading={isLoading} />}/>
        <Route path='/users/:id' element={<UserDetails users={users} isLoading={isLoading}  />}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
