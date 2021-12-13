import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useShows from '../../hooks/useShows';

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import Show from '../../components/Show/Show';
import Loading from '../../components/Loading/Loading'

const AllShows = () => {
    const { shows, loading } = useShows();

    if (loading) {
        return <Loading />
    }
    return (
        <div className='shows__section'>
            <PageBanner
                title="All Available Shows"
                image="https://images.pexels.com/photos/7234240/pexels-photo-7234240.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />

            <div className='all__shows pt-5 pb-4'>
                <Container>
                    <div className="shows__wrapper">
                        <Row>
                            {shows.map(item => (
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
            </div>
        </div>
    );
};

export default AllShows;