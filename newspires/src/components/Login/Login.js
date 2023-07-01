import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle, FaNewspaper } from 'react-icons/fa6';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const { googleProviderLogin, signIn } = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='login m-auto'>
            <div className='w-50 mt-3 m-auto text-center'>
                <h2><FaNewspaper></FaNewspaper>Newspires</h2>
                <h6>Please Login</h6>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <Button className='w-100' variant="outline-primary" type="submit">
                    Login
                </Button>

                <br />
                <Form.Text>
                    New Here? <Link to={'/register'}>Please register</Link>
                </Form.Text>
                <br />

                <div className="d-lg-flex justify-content-center align-items-center">
                    <Button onClick={handleGoogleSignIn} className='me-2 mt-2' variant="outline-dark"><FaGoogle></FaGoogle>{' '}Login with Google</Button>
                    <Button className='mt-2' variant="outline-dark"><FaGithub></FaGithub>{' '}Login with Github </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;