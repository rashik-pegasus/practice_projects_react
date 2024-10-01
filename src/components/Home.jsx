import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>Home content</div>

        <div>
          <h2>Use the Form</h2>
          <Link to='/UsernameForm'>use Form</Link>

        </div>
        <Outlet/>
    </>
  )
}

export default Home