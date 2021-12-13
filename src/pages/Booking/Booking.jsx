import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Booking.css';

// Components
import Loading from '../../components/Loading/Loading';
import { successNotify } from '../../utils/toastify';

const Booking = () => {
    const [show, setShow] = useState({});
    const [bookingData, setBookingData] = useState({
        show: '',
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    // Form Submit Controller
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            ...bookingData,
            bookingTime: new Date().toLocaleString()
        }
        // Set Booking to local storage
        const bookedShows = JSON.parse(localStorage.getItem('quad-booking')) || [];
        localStorage.setItem('quad-booking', JSON.stringify([...bookedShows, data]));

        // Success Notification
        successNotify('Booking Successful');

        // Clear the form
        setBookingData({
            show: '',
            name: '',
            email: '',
            phone: '',
            address: ''
        });
        navigate('/shows');
    }

    useEffect(() => {
        const getShow = async () => {
            try {
                const { data } = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
                setShow(data);
                setBookingData({ ...bookingData, show: data.name })
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getShow();
    }, [params.id]);



    if (loading) {
        return <Loading />
    }

    return (
        <div className='booking__page'>


            <Container>
                <h2 className='text-center mb-4 booking__title'>
                    Book ticket for <span>{show.name}</span>
                </h2>
                <Form className="booking__form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Show Name</Form.Label>
                        <Form.Control
                            type="text"
                            readOnly
                            value={show.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                            value={bookingData.name}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            value={bookingData.email}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Enter phone number"
                            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                            value={bookingData.phone}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your address"
                            onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                            value={bookingData.address}
                            required
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Booking;