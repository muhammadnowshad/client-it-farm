import React from 'react';
import './Service.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = (props) => {

    const {title, description, icon, _id, price} = props.datum || {};

    return (

        <Col className='' lg={4} md={6} sm={12}>
            <Card className='single-box d-flex justify-content-center align-items-center'>
                <i id='my-icon' className={icon} ></i>
                <Card.Body>
                <Card.Title className='text-center pt-2'>{title}</Card.Title>
                <Card.Text className='text-center'>
                    {description}
                </Card.Text>
                <Card.Text className='text-center'>
                    ${price}
                </Card.Text>
                <Link to={`/orderPlace/${_id}`}>
                    <Card.Text>Order Now</Card.Text>
                </Link>
                </Card.Body>
            </Card>
        </Col>            
   
    );
};

export default Service;