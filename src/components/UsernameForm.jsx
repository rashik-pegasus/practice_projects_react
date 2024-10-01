import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UsernameForm = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit= (event) => {
        event.preventDefault();

        //removes whitespace
        if(username.trim()) {
            navigate(`/user/${username}`);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Your Name: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button>submit</button>
            </form>


            <Link to='/UsersList'>All User List</Link>
            <div>Click to see the list of all the users</div>
        </>
    )
}

export default UsernameForm