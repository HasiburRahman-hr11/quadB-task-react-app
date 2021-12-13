import React from 'react';
import './PageBanner.css';

const PageBanner = ({ title, image }) => {
    return (
        <div className='page__banner'>
            <img src={image} alt={title} className="page__banner_img" />
            <div className="page__banner_content d-flex align-items-center justify-content-center text-center">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default PageBanner;
