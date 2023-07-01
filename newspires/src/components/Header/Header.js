import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaNewspaper } from 'react-icons/fa6';


const Header = () => {
    return (
        <div className='mb-3'>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                    <Navbar.Brand href="/">
                        <FaNewspaper></FaNewspaper> {' '}
                        Newspires
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-decoration-none my-auto m-2 text-black' to={'/'}>Home</Link>        
                        <Link className='text-decoration-none my-auto m-2 text-black' to={'/categories'}>Categories</Link>
                        <Link className='text-decoration-none my-auto m-2 text-black' to={'/news'}>News</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            

        </div>
    );
};

export default Header;