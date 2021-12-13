import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleShow.css';
// Components
import Loading from '../../components/Loading/Loading';

const SingleShow = () => {
    const [show, setShow] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const getShow = async () => {
            try {
                const { data } = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
                setShow(data);
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
        <div className='single__show'>
            <Container>
                <Row>
                    <Col lg={6} xs={12}>
                        <div className="single__show_thumbnail pe-lg-5">
                            <img src={show.image.original} alt={show.name} />
                        </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <div className="single__show_details">
                            <h2 className="single__show_title">{show.name}</h2>
                            <div className="show__meta">
                                <p className='show__genres'>
                                    Genre :
                                    {show.genres.map((genre, index) => (
                                        <span key={index}>{genre}</span>
                                    ))}
                                </p>
                                <p>
                                    Language: <span>{show.language}</span>
                                </p>
                                {show.rating.average && (
                                    <p>
                                        Rating: <span style={{color:'#F4B602'}}>{show.rating.average}</span>
                                    </p>
                                )}

                            </div>

                            <div
                                dangerouslySetInnerHTML={{ __html: show.summary }}
                                className="single__show_description mt-3 mb-4">

                            </div>
                            <Link to={`/booking/show/${show.id}`} className='show__btn'>Book Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleShow;