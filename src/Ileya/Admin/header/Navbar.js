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
          <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#1a2744]/10 flex items-center h-16 px-4 sm:px-6">
            <Link to="/ileya/admin">
              <img src={image1} alt="logo" className="h-10 w-10 object-cover rounded-lg border border-[#1a2744]/20" />
            </Link>

            <ul className="hidden md:flex md:w-full md:px-4 md:gap-x-6 md:justify-end md:items-center">
              <Navlinks />
            </ul>

            {open && (
              <div
                className="fixed inset-0 bg-black/40 z-30 md:hidden"
                onClick={() => setOpen(false)}
              />
            )}

            <ul className={`md:hidden fixed top-0 z-40 bg-white/95 backdrop-blur-xl w-64 max-w-[75vw] h-full right-0 shadow-2xl
              flex flex-col gap-2 p-6 pt-20 ease-in-out duration-300 border-l border-[#1a2744]/10
              ${open ? "translate-x-0" : "translate-x-full"}`}>
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
