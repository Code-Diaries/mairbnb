import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { setBasketOpen } from '../../../features/basketSlice/basketSlice';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const style = {
    position: 'absolute',
    top: '40%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const BasketModal = () => {
    const { basketOpen, basketItem } = useSelector((state) => state.basket);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(setBasketOpen(!basketOpen));

    console.log(basketItem);

    return (
        <div>
            <Modal
                open={basketOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ border: "2px solid red" }}>
                    <div style={{ border: "2px solid red" }}>
                        {
                            basketItem?.map((item, index) => {
                                console.log(item);
                                return (<div style={{ display: "flex", border: "2px solid red" }} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt={item?.title}
                                            width="50"
                                            height="70"
                                            image={item?.image}
                                            style={{ objectFit: "contain", background: "white", border: "2px solid orange" }}
                                        />


                                    </Card>

                                    <Card sx={{
                                        width: 250,
                                        height: 70,
                                    }}
                                        style={{ border: "2px solid orange" }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                                                {item?.title}
                                            </Typography>

                                            <Typography sx={{ fontSize: 12, color: "red", fontWeight: "bold" }} >
                                                {item?.price} TL
                                            </Typography>


                                        </CardContent>

                                    </Card>



                                </div>)
                            })
                        }
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button size="small" style={{ background: "grey", color: "black" }}>ADD TO BASKET</Button>
                        <Button size="small" style={{ background: "orange", color: "white" }}>BUY NOW</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default BasketModal