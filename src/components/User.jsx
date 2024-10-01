import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { UsersData } from '../data/UsersData';

const User = () => {

    const {username} = useParams();
    
    return (
        <>
            <div>
                <p>Hello, {username}! </p>

                <p>Here are the details under the name John</p>

                {UsersData.filter(item => {
                    if(username === item.name) {
                        return true;
                    }else {
                        console.log('no match found');
                        return ;
                    }
                }).map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3> 
                        <p>{item.post}</p>
                        <p>{item.heroMessage}</p>
                    </div>
                ))} 


            </div>

            <Link to='/'>Return to previous</Link>
        </>
    )
}

export default User