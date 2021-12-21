import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './OrderPlace.css'

const OrderPlace = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    useEffect( () => {
        fetch(`https://polar-stream-41574.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
    
        axios.post('https://polar-stream-41574.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order processed Successfully');
                reset();
            }
        });
    }

    return ( 
        <div className='bg'>
            <div className='container pt-4 pb-5'>
            <h2 className='mb-4'>Place Your Order</h2>
            <div className='row g-5'>
                <div className="col-12 col-md-6">
                    <div className='form-card p-5'>
                        <div className='d-flex justify-content-center align-items-center pb-4'>
                            <i id='my-icon' className={service.icon} ></i>
                        </div>
                        <div>
                            <h5>Order ID: {serviceId}</h5>
                            <h3>{service.title}</h3>
                            <h3>Price ${service.price}</h3>
                        </div>
                    </div>
                    <Link to='/services'><button className='btn btn-danger mb-0 mt-4 px-5 py-1 fs-5'>Back</button></Link>
                </div>
                <div className="col-12 col-md-6 "> 
                    <form className="row box p-5" onSubmit={handleSubmit(onSubmit)}>
                        <input className='col-12 form-input mb-3 py-2' defaultValue={user.displayName} {...register("name")} />
                        <input className='col-12 form-input mb-3 py-2' defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input className='col-12 form-input mb-3 py-2' placeholder="Address" defaultValue="" {...register("address")} />
                        <input className='col-12 form-input mb-3 py-2' placeholder="City" defaultValue="" {...register("city")} />
                        <input className='col-12 form-input mb-3 py-2' placeholder="Phone" defaultValue='' {...register("phone")} />
                        <input className='d-none col-12 form-input mb-3 py-2' defaultValue='pending' {...register("status")} />
                        <input className='col-12  btn btn-danger py-1 fs-5' type="submit" value='Order Place' />
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderPlace;