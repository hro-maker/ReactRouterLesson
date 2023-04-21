import React from 'react';
import './Person.css'
function Person(props) {
    return (
        <>
            <p>Name is: {props.name}. Lastname is: {props.lastName}</p>
        </>
    )
}

function Person2(props) {
    return (
        <>
            <p>2 Name is: {props.name}. Lastname is: {props.lastName}</p>
        </>
    )
}


export {
    Person,
    Person2
};