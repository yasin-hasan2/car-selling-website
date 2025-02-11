import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container } from '@mui/material';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added a New Review Successfully!');
                    reset();
                }
            })
    }

    return (
        <Container sx={{ textAlign: 'center' }}>
            <h2>You Can Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ margin: '1px', padding: '15px 20px' }} placeholder="Your Name" {...register("name", { required: true })} /> <br /> <br />

                <input style={{ margin: '1px', padding: '15px 20px' }} placeholder="Your Title" {...register("title", { required: true })} /> <br /> <br />

                <input style={{ margin: '1px', padding: '15px 20px' }} placeholder="Place a rating number" type="text" {...register("rating", { required: true, valueAsNumber: true })} /> <br /><br />

                <input style={{ margin: '1px', padding: '15px 20px' }} placeholder="Your Photo url" {...register("img", { required: true })} /> <br /><br />

                <textarea style={{ margin: '1px', padding: '15px 20px' }} placeholder='Review Description' {...register("description", { required: true })} /> <br /><br />
                <input style={{ padding: '10px 35px', borderRadius: '25px', border: 'none', outline: 'none' }} type="submit" />
            </form>
        </Container>
    );
};

export default AddReview;