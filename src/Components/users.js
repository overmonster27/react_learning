import {useEffect, useState} from "react";
import User from "./user";
import UserDetails from "./userDetails";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(value => setUsers(value));
    }, [])

    let button = (item) => {
        setUser(item)
    }

    return (
        <div>
            {
                user && <UserDetails user={user}/>
            }
            {
                users.map(user => <User key={user.id} userItem={user} button={button}/>)
            }
        </div>
    );
};

export default Users;