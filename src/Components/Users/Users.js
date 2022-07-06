import React, {useEffect, useState} from 'react';
import {getUsers} from "../Services/user.api.service";

const Users = () => {

    let {users, setUsers} = useState([])

    useEffect(() => {
        getUsers().then(({data})=> setUsers([...data]))

        
        
    }, [])


    return (
        <div>
            {
                users.map()
            }
        </div>
    );
};

export default Users;