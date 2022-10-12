import React, { forwardRef } from "react";

function User(props) {
    return (
        <>
            <td> {props.name} </td>
            <td> {props.email} </td>
            <td> {props.city} </td>
            <td>
                <button onClick={() => props.showData(props.index)}>show data</button>
            </td>
        </>
    );
}

export default forwardRef(User);
