import React from 'react';
import {Spinner} from 'react-bootstrap'

const Loading = () => {
    return (
        <div style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '999'
        }}>
           <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;