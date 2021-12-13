import React, { useEffect, useState } from 'react';
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
                        <Navbar.Brand href="/home">QuadShow</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/shows">Shows</Nav.Link>
                                <Nav.Link href="/">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;