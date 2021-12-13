import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const [sticky, setSticky] = useState(false);
    window.onscroll = (e) => {
        setSticky(window.pageYOffset > 10 ? true : false)
        return () => (window.onscroll = null)
    }
    return (
        <header id="header" className={sticky ? 'header sticky' : 'header'}>
            <div className="header__wrapper">
                <Container className="d-flex justify-content-between align-items-center">
                    <Link to="/" className='navbar-brand'>QuadShow</Link>
                    <nav className="ms-auto">
                        <ul className='main__menu d-flex mb-0'>
                            <li><Link to="/shows" className='nav-link'>All Shows</Link></li>
                        </ul>
                    </nav>
                </Container>
            </div>
        </header>
    );
};

export default Header;