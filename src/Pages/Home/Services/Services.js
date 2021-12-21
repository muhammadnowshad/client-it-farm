import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [datas, setDatas] = useState([]);
    useEffect (() => {
        fetch("https://polar-stream-41574.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setDatas(data))
    },[]);

    return (
        <div className='bg py-5'>
            <div className='container'>
                <h2 className='mb-3'>Our Services</h2>
                <p className='my-4 fs-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>

                <Row className="g-4">
                
                    {   
                        datas.map(datum => <Service key={datum.id} datum={datum}></Service>)
                        
                    }

                </Row>
            </div>
        </div>
    );
};

export default Services;