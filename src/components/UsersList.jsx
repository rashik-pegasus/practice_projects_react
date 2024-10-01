import React from 'react'
import {UsersData} from '../data/UsersData'
import { Link } from 'react-router-dom'
import './general.scss'

const UsersList = () => {
    
  return (
    <>
        <div>
            {UsersData.map((user) => (
                <li key={user.id} className='list__users'>
                    <div className="username__title">
                        <p>{user.name}</p> 
                        <p>{user.post}</p> 
                    </div>
                   {/* <p>{user.heroMessage}</p> */}
                   <Link to={`/user/${user.name}`} className="link__btns">See Details</Link>
                </li>
            ))}
        </div>
    </>
  )
}

export default UsersList 