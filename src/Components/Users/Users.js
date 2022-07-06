import React, {useEffect, useState} from 'react';
import {takeUsers} from "../Services/user.api.service";
import {User} from "../index";

const Users = ({getPost}) => {

    let [users, setUsers] = useState([])

    useEffect(() => {
        takeUsers()
            .then(({data}) => setUsers([...data]));

    }, []);

    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id} getPost={getPost}/>)
            }
        </div>
    );
};

export default Users;