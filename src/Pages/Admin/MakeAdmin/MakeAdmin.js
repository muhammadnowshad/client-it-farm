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
        fetch('http://localhost:5000/users/admin', {
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
        <div className='my-5'>
            <h2>Make an Admin</h2>
            <Form onSubmit={handleAdminSubmit} className="row mx-auto">
                <Form.Group className="col-4 mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleOnBlur}  type="email" placeholder="Enter email" />
                </Form.Group>
                <div className="col-2">
                    <Button className="w-100" variant="primary" type="submit">Make Admin</Button>
                </div>
            </Form>
            {success && <div className="alert alert-primary" role="alert">Admin Successfully!</div>}
        </div>
    );
};

export default MakeAdmin;