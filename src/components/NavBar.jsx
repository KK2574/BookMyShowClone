import React from 'react'
import "./NavBar.css"
import { MdSearch } from 'react-icons/md';
import { IoChevronDownSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='overflow-hidden'>
            <div className="container">
                <div className="cont1"><img src="logo.png" alt="logo" />
                    <div className="input">
                         <MdSearch className='search' />
                        <input type="text" className='input input1' placeholder='Search for Movies' />
                    </div>
                </div>
                <div className="buttons">
                <button className='city'>Pune<IoChevronDownSharp className='down-arrow'/></button>
                <button className='Sign-in'>Sign in</button>
                <button className='three-lines'></button>
                </div>
            </div>
        </div>
    )
}


export default Navbar