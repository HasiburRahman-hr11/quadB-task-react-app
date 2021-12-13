import React from 'react';
import './Show.css';
import { Card } from 'react-bootstrap';
import { FcRating } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Show = ({ show }) => {
    return (
        <Card className='border-0 show__item'>
            <Card.Img variant="top" src={show.image.original} />
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center show__title_wrapper mb-2">
                    <Card.Title>{show.name}</Card.Title>
                    {show.rating.average && (
                        <div className="show__rating d-flex align-items-center">
                            <FcRating />
                            <span style={{ color: '#F4B602', marginLeft: '5px' }}>{show.rating.average}</span>
                        </div>
                    )}
                </div>

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
                </div>

                <div className="d-flex align-items-center justify-content-center mt-4">
                    <Link to={`/shows/${show.id}`} className='show__btn'>View Details</Link>
                </div>

            </Card.Body>
        </Card>
    );
};

export default Show;