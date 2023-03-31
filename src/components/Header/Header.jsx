import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
            <h1>hello Food</h1>
            <div className='list-service'>
                <a href="">Home</a>
                <a href="">Service</a>
                <a href="">Map</a>
            </div>
        </div>
    );
};

export default Header;