import React, {useState} from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'

const AdminEntryForm = () => {
    const[adminName, setAdminName] = useState('');

    const navigate = useNavigate();

    const handleSubmit =  (event) =>  {
        event.preventDefault();
        if(adminName.trim()) {
            navigate(`/admin/${adminName}`);
        }else {
            console.log('the admin doesnot exits');

        }
    }
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <label htmlFor="">Enter Admin Name for Entry</label>
            <input type="text" placeholder='enter name of Admin' value={adminName} onChange={(e) => setAdminName(e.target.value)}/>

            {/* click to see the list of all admins */}
            <button>submit</button>
            {/* <Link to='adminsList'>Submit</Link> */}
        </Form>
    </>
  )
}

export default AdminEntryForm