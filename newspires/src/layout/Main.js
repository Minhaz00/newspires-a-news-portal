import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftNav from '../components/LeftNav/LeftNav';
import RightNav from '../components/RightNav/RightNav';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;