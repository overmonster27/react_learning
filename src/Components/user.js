const User = ({userItem, button}) => {
    return (
        <div className='wraper'>
            <h3>{userItem.id}</h3>
            <h3>{userItem.name}</h3>
            <button onClick={() => button(userItem)}>Datails</button>
        </div>
    );
};

export default User;