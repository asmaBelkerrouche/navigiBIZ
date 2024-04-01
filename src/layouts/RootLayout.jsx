import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div className='root-layout'>
    {/* <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
        </nav>
    </header> */}
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default RootLayout