import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Loading from '../../components/Loading/Loading';
import Shows from '../../components/Shows/Shows';
import useShows from '../../hooks/useShows';


const Home = () => {
    const {shows , loading} = useShows();
    if(loading){
        return <Loading />
    }
    return (
        <>
           <HeroBanner/>
           <Shows shows={shows}/>
        </>
    );
};

export default Home;