import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Navbar from './Ileya/Admin/header/Navbar'
import Admin from './Ileya/Admin/Admin';
import Details from './Ileya/Admin/Details';

import axios from 'axios'



function App() {

 
const [loading, setloading] =useState(false)
const [FormData, SetFormData] = useState([])



    const getFormData = async  () => {
        axios.get("https://ileya-backend.vercel.app/api/form/")
        .then(res => {
          console.log(res.data)
          SetFormData(res.data)
          setloading(true)
        }).catch(err => {
          console.log(err)
        })
       }

      

       useEffect(() => {
        getFormData()
       
        }, [])

  return (
    <div className='font-josefins bg-[#ddd0c8]'>
       <Router>
            <Navbar/>
       
         <Routes>
               {/* Admin */}
               <Route path = "/" exact element= {<Admin FormData={FormData} loading={loading}/>}></Route>
               <Route path = "/details/:id" exact element= {<Details/>}></Route>
         </Routes>
         </Router> 

    </div>
  )
}

export default App