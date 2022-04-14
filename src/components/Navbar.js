import React from 'react';

const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase " href="/"><h1>{brand}</h1></a>
            </div>
        </nav>
    )
}

export default Navbar;