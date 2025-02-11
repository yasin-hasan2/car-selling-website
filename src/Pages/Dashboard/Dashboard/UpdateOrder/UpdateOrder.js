import { useState } from 'react';

const UpdateOrder = () => {
    const [order, setOrder] = useState({});

    const handleShipped = id => {
        const url = `http://localhost:5000/allOrders/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert("Shipped successfully!");
                    setOrder({});
                }
            })
    }
    return {
        handleShipped
    };
};

export default UpdateOrder;