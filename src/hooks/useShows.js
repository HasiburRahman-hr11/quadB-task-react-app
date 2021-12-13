import { useEffect, useState } from "react";
import axios from 'axios';


const useShows = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAllShows = async () => {
            try {
                const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                setShows(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getAllShows();
    }, []);

    return {
        shows,
        setShows,
        loading,
        setLoading
    }
}

export default useShows;