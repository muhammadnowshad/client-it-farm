import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://polar-stream-41574.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
               
            })

        e.preventDefault()
    }
    return (
        <div className='bg py-5'>
            <div className="container">
                <h2 className="text-center">Make an Admin</h2>
                <div className="col-12 col-md-8 mx-auto">
                    <Form onSubmit={handleAdminSubmit} className="row g-4 mt-md-5 mt-2">
                        <Form.Group className="col-12 col-md-8" controlId="formBasicEmail">
                            <Form.Control className="py-2" onBlur={handleOnBlur}  type="email" placeholder="Enter email" />
                        </Form.Group>
                        <div className="col-12 col-md-4">
                            <Button className="w-100 my-btn" variant="primary" type="submit">Make Admin</Button>
                        </div>
                    </Form>
                    {success && <div className="alert alert-primary" role="alert">Admin Successfully!</div>}
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;