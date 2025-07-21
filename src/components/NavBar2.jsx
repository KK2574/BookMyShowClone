import React from 'react'
import './NavBar2.css'
const NavBar2 = () => {
    return (
        <>
            <div className='NavBar2 overflow-hidden'>
                <div className="content-type">
                    <button className='btn'>Movies</button>
                    <button className='btn'>Stream</button>
                    <button className='btn'>Events</button>
                    <button className='btn'>Plays</button>
                    <button className='btn'>Sports</button>
                    <button className='btn'>Activies</button>
                </div>
                <div className="Extras">
                    <button className='btn2'>ListYourShow</button>
                    <button className='btn2'>Corporates</button>
                    <button className='btn2'>Offers</button>
                    <button className='btn2'>Gift Cards</button>
                </div>
            </div>
        </>
    )
}

export default NavBar2