import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaNewspaper } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {

    const { user, setUser, createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault(); 
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, name, password, confirm, photoURL);

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                user.displayName = name;
                user.photoURL = photoURL;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
        
    }

    return (
        <div className='login m-auto'>
            <div className='w-50 mt-3 m-auto text-center'>
                <h2><FaNewspaper></FaNewspaper>Newspires</h2>
                <h6>Please Register</h6>
            </div>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Username" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email"  required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm' type="password" placeholder="Password" required/>
                </Form.Group>

                <Button className='w-100' variant="outline-primary" type="submit">
                    Sign Up
                </Button>
                <br />
                <Form.Text className="">
                    Already have an account? <Link to={'/login'}>Please login</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default SignUp;