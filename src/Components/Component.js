import React from "react";

function Carekter(Props) {
    let {id, name, status, species, gender, image} = Props;
    return (
        <div className='innerDiv'>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt={name}/>
        </div>
    );
}

export default Carekter;