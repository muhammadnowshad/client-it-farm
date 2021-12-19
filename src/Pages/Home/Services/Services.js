import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [datas, setDatas] = useState([]);
    useEffect (() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setDatas(data))
    },[]);

    return (
        <div className='container py-5'>
            <p>service</p>
            <h1>Our Services</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>

            <Row className="g-4">
            
                {   
                    datas.map(datum => <Service key={datum.id} datum={datum}></Service>)
                    
                }

            </Row>
        </div>
    );
};

export default Services;