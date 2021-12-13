import React from 'react';
import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className='footer' style={{
            padding:'30px 0',
            backgroundColor:'#0A1E5E',
            color:'#fff'
        }}>
            <Container>
                <div className="d-flex align-items-center justify-content-center text-center">
                    <p className='mb-0'>Copyright &copy; 2021 QuadShow all rights reserved</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;