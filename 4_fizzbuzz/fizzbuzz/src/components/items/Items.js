import React from 'react';

// Create a table row and add table data
const Items = (props) =>{
    return(
        <tr>
            <td colSpan="2">{props.number}</td>
        </tr>
    )
}

export default Items;

