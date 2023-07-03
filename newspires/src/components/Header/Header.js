import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaNewspaper, FaUser } from 'react-icons/fa6';
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';


const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const handleSignOut = () => {
        logout()
            .then(() => console.log("logged out successfully!"))
            .catch ((error) => console.error(error));
    }

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
                        <Link className='text-decoration-none my-auto m-2 text-black' to={'/category/0'}>Categories</Link>
                        <Link className='text-decoration-none my-auto m-2 text-black' to={'/'}>News</Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            
                            {user ?
                                <>
                                    <small>{user.displayName}{" "}</small>
                                    {user.photoURL ?
                                        <Image className='me-2' style={{ width: "30px" }} roundedCircle src={user.photoURL}></Image>
                                        :
                                        <FaUser></FaUser>
                                    }
                                    <button onClick={handleSignOut} className='btn btn-danger'>
                                        <FaSignOutAlt></FaSignOutAlt>{" Logout"}
                                    </button>

                                </>
                                :
                                <>
                                    <button className='me-2 text-white btn btn-info' ><Link className='text-decoration-none' to={'/login'}>Login</Link></button>
                                    <button className='me-2 text-white btn btn-info'><Link className='text-decoration-none' to={'/register'}>SignUp</Link></button>
                                </>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
            </Container>
            </Navbar>
            

        </div>
    );
};

export default Header;