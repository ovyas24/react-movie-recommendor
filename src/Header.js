import React from 'react'


function Header() {
    return (
        <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item has-text-light" href="/">
                    <h1 className="h1">Welcome to Movie Recommender</h1>
                </a>
                <a className="navbar-item has-text-light" href="https://github.com/ovyas24/recommendation-ML">Github Code</a>
            </div>
        </nav>
    )
}

export default Header
