import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css'


const Home = () => {

    const [services, setServices] = useState([]);
    useEffect (() => {
        fetch("https://polar-stream-41574.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div>
            {/* Top banner  */}
            <div className='top-banner d-flex align-items-center justify-content-center'>
                <div>
                <h2 className='banner-text text-white fs-1 p-4 rounded-3 '>Welcome to My IT Farm</h2>
                <div>
                <Link to='/services'><button className='btn btn-danger w-25 py-2'>Explore</button></Link>
                </div>
                </div>
            </div>

            {/* Home services  */}
            <div className='bg py-5'>
                <div className='container'>
                    <h2>Our Services</h2>
                <Row className="mt-3 g-4">
                    {
                        services.slice(0,6).map(service => <Col className='' key={service._id} lg={4} md={6} sm={12}>
                            <Card className='single-box d-flex justify-content-center align-items-center'>
                                <i id='my-icon' className={service.icon} ></i>
                                <Card.Body>
                                <Card.Title className='text-center pt-2'>{service.title}</Card.Title>
                                <Card.Text className='text-center'>
                                    {service.description}
                                </Card.Text>
                                <Card.Text className='text-center'>
                                    ${service.price}
                                </Card.Text>
                                <Link to={`/orderPlace/${service._id}`}>
                                    <Card.Text>Order Now</Card.Text>
                                </Link>
                                </Card.Body>
                            </Card> 
                    </Col>)}
                </Row>
                </div>
            </div>
            {/* about ourselves  */}
            <div className='container my-5'>
                <h1 className="text-danger mt-5">About Us</h1>
                <div className='bg-light py-5'>
                    <p className='pb-md-5 px-3'>ChooseMyBicycle.com is an e-commerce portal exclusive for buying bicycles, accessories and apparels. One can pick from our wide range of top Indian and international cycling brands with also kids and toddler specific range of bicycles. Book your bicycle and sit back and relax as your dream bicycle will be delivered at your door step in a unique ready to ride box. It is also an online knowledge portal built with the purpose of helping consumers, in the market to buy a cycle , pick the right cycle based on their needs. The portal offers various tools such as a "Help Me Choose" option for amateurs looking to start cycling. Besides this, there are event listings, expert reviews, knowledge articles, tips and advice. We at ChooseMyBicycle.com will also have our own cycling events across India for all types of cyclists from amateur short weekend rides to professional race for the experts.</p>
                    <div className='row g-4'>
                        <div className='col-12 col-md-4'>
                            <i className="text-danger fs-1 pb-2 fas fa-ambulance"></i><br/>
                            <h6>BICYCLE SERVICE<br/>AT HOME</h6>
                        </div>
                        <div className='col-12 col-md-4'>
                            <i className="text-danger fs-1 pb-2 fab fa-rocketchat">
                            </i><br/>
                            <h6>CHAT WITH <br/> OUR EXPERT</h6>
                        </div>
                        <div className='col-12 col-md-4'>
                            <i className="text-danger fs-1 pb-2 fas fa-headset"></i> <br/>
                            <h6>AFTER SALES <br/> SUPPORT</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;