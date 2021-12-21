import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageProduct = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://polar-stream-41574.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDeleteServices = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://polar-stream-41574.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remainingOrders = services.filter(service => service._id !== id);
                setServices(remainingOrders);
            }
        });
        }
    }

    return (
        <div className='bg'>
        <div className='container py-5'>
            <h2 className="mb-5">Manage Services</h2>
            <Row className="g-4">
                {
                    services.map(service => <Col className='' key={service._id} lg={4} md={6} sm={12}>
                        <Card className='rounded-0 border-1 pt-4 d-flex justify-content-center align-items-center'>
                            <i id='my-icon' className={service.icon} ></i>
                            <Card.Body>
                            <Card.Title className='text-center pt-2'>{service.title}</Card.Title>
                            <Card.Text className='text-center'>
                                {service.description}
                            </Card.Text>
                            <Card.Text className='fw-bold text-center'>
                                ${service.price}
                            </Card.Text>
                            </Card.Body>
                            <button className='w-100 my-btn' onClick={() => handleDeleteServices(service._id)}>Delete</button>
                        </Card> 
                </Col>)}
            </Row>
        </div>
    </div>
    );
};

export default ManageProduct;