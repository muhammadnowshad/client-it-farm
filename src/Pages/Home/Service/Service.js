import React from 'react';
import './Service.css'
import { Card, Col } from 'react-bootstrap';


const Service = (props) => {

    const {title, description, icon} = props.datum || {};

    return (

        <Col lg={4} md={6} sm={12}>
            <Card>
                <i id='my-icon' className={icon} ></i>
                <Card.Body>
                <Card.Title className='text-center'>{title}</Card.Title>
                <Card.Text className='text-center'>
                    {description}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>            
   
    );
};

export default Service;