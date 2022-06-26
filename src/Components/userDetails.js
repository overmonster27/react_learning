
const UserDetails = ({user}) => {
    return (
        <div>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <div>{user.address.street}</div>
            <div>{user.address.suite}</div>
            <div>{user.address.city}</div>
            <div>{user.address.zipcode}</div>
            <div>{user.address.geo.lat}</div>
            <div>{user.address.geo.lng}</div>
        </div>
    );
};

export default UserDetails;