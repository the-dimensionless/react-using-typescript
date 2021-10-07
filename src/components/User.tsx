import React from 'react';

interface IUser {
    name: string,
    age: number,
    isAdmin: boolean
};

const User = ({ name, age, isAdmin }: IUser) => {
    return (
        <>
            <p>User name: {name}</p>
            <p>User age: {age}</p>
            <p>privelege mode: {isAdmin ? 'admin': 'user'}</p>
        </>
    )
};

export default User;