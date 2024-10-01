import React from 'react'
import { adminsList } from '../data/UsersData'
import { useParams } from 'react-router-dom';

const AdminPanel = () => {

    //extract the admin names from url
    const {adminName} = useParams();

    //check if admin exists in the list
    const isAdmin = adminsList.find(
        (admin) => admin.name.toLowerCase() === adminName.toLowerCase()
    );


  return (
    <>
        <div>Welcome to Admin Panel</div>

        {isAdmin ? (
            <h1>welcomE, {adminName}!</h1>
            ): (<h1>Admin {adminName} not found</h1>)
        
        }

    </>
  )
}

export default AdminPanel