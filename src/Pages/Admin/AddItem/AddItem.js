import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddItem.css'


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://polar-stream-41574.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className='add-service my-md-5 mt-3 mb-5'>
            <h2 className='py-3'>Add Product</h2>
            <form className='box p-md-5 col-12 col-md-7 mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true, maxLength: 20 })} placeholder='Service Name' />
            <textarea {...register("description")} placeholder='Service Title' />
            <input type="number" {...register("price")} placeholder='Price' />
            <input type="text" {...register("icon")} placeholder='Icon (Only paste fontawesome class value)' />
            <input className='btn btn-danger m-0 py-2' type="submit" />
            </form>
        </div>

    );
};

export default AddItem;