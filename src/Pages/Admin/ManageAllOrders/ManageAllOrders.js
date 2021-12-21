import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://polar-stream-41574.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

   
    return (
        <div className='bg '>
            <div className='container-md px-0 py-5'>
                <div className=''>
                    <h2 className='mb-4'>Manage All Orders</h2>
                    <div  className='box col-12 col-md-12 col-lg-10 mx-auto py-2'>
                        {
                            orders.map(order => <div className='row align-items-center m-4 border-3 pt-2' key={order._id}>
                            <div className='col-12 col-md-6'>
                                <h5>{order.name}</h5>
                                <p className='mb-0 pb-1 text-center'>{order.email}</p>
                                <h6 className=''>Phone: {order.phone}</h6>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='d-flex  justify-content-center align-items-center'>
                                    <h4><span className='mx-3'>{order.status}</span></h4>
                                    <Link to={`/orders/update/${order._id}`}>
                                    <button className='btn btn-danger mb-2'>Update Status</button></Link>
                                </div> 
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;