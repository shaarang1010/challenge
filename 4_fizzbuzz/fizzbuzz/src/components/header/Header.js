import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <div className={props.className}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default Header;  
