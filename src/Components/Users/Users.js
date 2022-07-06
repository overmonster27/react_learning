import React, {useEffect, useState} from 'react';
import {getUsers} from "../Services/user.api.service";
import {User} from "../index";

const Users = () => {

    let {users, setUsers} = useState([])

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));


    }, []);


    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;