import React from 'react';
import { Card , Button} from 'react-bootstrap'

const Show = ({ show }) => {
    return (
        <Card >
            <Card.Img variant="top" src={show.image.original} />
            <Card.Body>
                <Card.Title>{show.name}</Card.Title>
                
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Show;