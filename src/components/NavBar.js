import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/nav.css'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#5D2F9D !important', paddingLeft: '20px', paddingRight: '20px', }}>
            <a class="navbar-brand" href="#">Health recipes</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav pl-4 pr-40">
                <li class="nav-item active">
                    <a class="nav-link" href="http://localhost:3000/">Home <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2 additional-class" type="search" placeholder="Search Title..." aria-label="Search"></input>
                </form >
            </div>
            

            <div>
            <Link to="/login" className="btn btn-outline-primary">
                <FontAwesomeIcon icon={["fa-solid", "fa-right-to-bracket"]} />
                <FontAwesomeIcon icon={["fa-thin", "fa-right-to-bracket"]} />
                Sign In
            </Link>
            </div>
        </nav>
    );
}

export default NavBar; 