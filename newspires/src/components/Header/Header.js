import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#">Newspires</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                            <Link class="nav-link" href="/catagories">Catagories</Link>
                            <Link class="nav-link" href="/about">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Navbar  className='mb-2 navbar px-4' data-bs-theme="light">
                <Container>
                <Navbar.Brand className='text-white' href="/">NEWSPIRES</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='text-white' href="/">Home</Nav.Link>
                    <Nav.Link className='text-white' href="#features">Categories</Nav.Link>
                    <Nav.Link className='text-white' href="/about">About</Nav.Link>
                </Nav>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;