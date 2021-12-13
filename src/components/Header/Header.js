import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container, Nav, } from 'react-bootstrap';
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
                <Navbar expand="lg">
                    <Container>
                        <Link to="/" className='navbar-brand'>QuadShow</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to="/" className='nav-link' >Home</Link>
                                <Link to="/shows" className='nav-link'>Shows</Link>
                                <Link to="/" className='nav-link'>About</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;