import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import Loading from '../../components/Loading/Loading';

const Booking = () => {
    const [show, setShow] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const getShow = async () => {
            try {
                const { data } = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
                setShow(data);
                console.log(data);
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
        <div className='booking__page' style={{
            paddingTop:'120px',
            paddingBottom:'50px'
        }}>
            <Container>
                <h2>{show.name}</h2>
            </Container>
        </div>
    );
};

export default Booking;