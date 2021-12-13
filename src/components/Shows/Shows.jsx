import React from 'react';
import './Shows.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Show from '../Show/Show';

const Shows = ({ shows }) => {
    return (
        <section className='shows__section py-5'>
            <Container>
                <div className="d-flex justify-content-between align-items-center shows__header mb-4">
                    <h2>Shows</h2>
                    <Link to="/shows">View All</Link>
                </div>

                <div className="shows__wrapper">
                    <Row>
                        {shows.slice(0, 6).map(item => (
                            <Col key={item.show.id}
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                            >
                                <Show show={item.show} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Shows;