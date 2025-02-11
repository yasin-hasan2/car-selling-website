import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Car from '../Home/Products/Car/Car';

const CarExplore = () => {

    const url = 'http://localhost:5000/cars';

    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setCars(data);
            })
    }, [])
    if (isLoading) {
        return (
            <Container style={{ textAlign: 'center' }} sx={{ my: 5 }}>
                <Typography sx={{ fontWeight: 600 }} variant="h4" gutterBottom component="div">
                    Explore Your Car
                </Typography>
                <Grid container spacing={2}>
                    {(isLoading ? Array.from(new Array(6)) : url).map((item, index) => (
                        <Box key={index} sx={{ width: 380, marginRight: 0.5, my: 5 }}>
                            {item ? (
                                <img
                                    style={{ width: 380, height: 220 }}
                                    alt={item.title}
                                    src={item.src}
                                />
                            ) : (
                                <Skeleton variant="rectangular" width={380} height={220} />
                            )}

                            {item ? (
                                <Box sx={{ pr: 2 }}>
                                    <Typography gutterBottom variant="body2">
                                        {item.title}
                                    </Typography>
                                    <Typography display="block" variant="caption" color="text.secondary">
                                        {item.channel}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {`${item.views} • ${item.createdAt}`}
                                    </Typography>
                                </Box>
                            ) : (
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Box>
                            )}
                        </Box>
                    ))}
                </Grid>

            </Container>


        );
    }
    return (
        <Container style={{ textAlign: 'center' }} sx={{ my: 5 }}>
            <Typography sx={{ fontWeight: 600 }} variant="h4" gutterBottom component="div">
                Explore Your Car
            </Typography>
            <Grid container spacing={2}>
                {
                    cars.map(car => <Car key={car.id} car={car}></Car>)
                }
            </Grid>
        </Container>
    );
};

export default CarExplore;