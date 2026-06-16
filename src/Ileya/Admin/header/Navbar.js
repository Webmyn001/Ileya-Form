import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";
import image1 from "../Images/img1.jpg"

import Navlinks from "./Navlinks"
import {FaBars,FaTimes} from "react-icons/fa"

 function Header () {

    const  [open, setOpen] = useState(false)
     const handleClick = () => { setOpen(!open)}
    return(
        <div>
          <div className="bg-white/80 backdrop-blur-xl border-b border-[#1a2744]/10 flex items-center h-16 px-4 sm:px-6">
            <Link to="/ileya/admin">
              <img src={image1} alt="logo" className="h-10 w-10 object-cover rounded-lg border border-[#1a2744]/20" />
            </Link>

            <ul className="hidden md:flex md:w-full md:px-4 md:gap-x-6 md:justify-end md:items-center">
              <Navlinks />
            </ul>

            <ul className={`md:hidden fixed top-0 z-30 bg-white/95 backdrop-blur-xl w-[55%] max-w-xs h-auto right-0 shadow-2xl
              flex flex-col gap-4 p-6 pt-20 rounded-bl-2xl ease-in-out duration-300 border-l border-b border-[#1a2744]/10
              ${open ? "top-0" : "top-[-150%]"}`}>
              <Navlinks alternative={true} handleClick={handleClick} />
            </ul>

            <div className="z-50 md:hidden text-[#1a2744] cursor-pointer ml-auto flex items-center"
              onClick={handleClick}>
              {open ? <FaTimes className="text-lg"/> : <FaBars className="text-lg"/>}
            </div>
          </div>
        </div>
    )
 }

  export default Header
