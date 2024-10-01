import React from 'react'
import { Link } from 'react-router-dom'

const TestLinks = () => {
  return (
    <>
        <ul>
            <li> <Link to="/user/john">John</Link> </li>
            <li> <Link to="/user/doe">doe</Link> </li>
            <li> <Link to="/user/kahn">kahn</Link> </li>
        </ul>
    </>
  )
}

export default TestLinks