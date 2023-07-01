import React, { useContext } from 'react';
import { Carousel, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import brand1 from '../../assets/brand1.avif';
import brand2 from '../../assets/brand2.webp';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightNav = () => {

    const { googleProviderLogin } = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            
            <div className="login-btn">
                <h5>Login Here: </h5>
                <Button onClick={handleGoogleSignIn} className='mb-2 w-100' variant="outline-primary"><FaGoogle></FaGoogle>{' '}Login with Google</Button>
                <br></br>
                <Button className='w-100' variant="outline-dark"><FaGithub></FaGithub>{' '}Login with Github </Button>
            </div>

            <div className="social-links mt-5">
                <h5>Find us on: </h5>
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="http://facebook.com">
                        <FaFacebook/> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item action href="http://twitter.com">
                        <FaTwitter/> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item action href="http://whatsapp.com">
                        <FaWhatsapp/> Whatsapp
                    </ListGroup.Item>
                    <ListGroup.Item action href="http://twitch.com">
                        <FaTwitch/> Twitch
                    </ListGroup.Item>
                    <ListGroup.Item action href="http://instagram.com">
                        <FaInstagram/> Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <div className="brand-partners mt-5">
                <h5>Brand partners:</h5>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={brand1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>                                                                     
            </div>
        </div>
    );
};

export default RightNav;