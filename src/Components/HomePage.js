import React, { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
import "./HomePage.css"
import { Link } from "react-router-dom";
import LoadingIcons from 'react-loading-icons'
function HomePage() {
    const baseURL = "https://api.tvmaze.com/search/shows?q=all";
    const [show, setShowBase] = useState([]);
    const [isLoaded, setloaded] = useState(false);

    const getShowsData = async () => {
        try {
            const data = await
                axios
                    .get(baseURL)
                    .then(response =>
                        setShowBase(response.data))
            setloaded(true)
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getShowsData();
    }, []);

    return (
        <>
            {
                isLoaded ?

                    <div className="show-list">
                        {
                            show.map(item => <div className="show-item">
                                <img src={item.show.image.original} alt={item.show.name} />
                                <div className="info-flex">
                                    <div className="show-title">{item.show.name} ({item.show.premiered.slice(0, 4)}) </div>

                                    <div className="rating"><i className="fas fa-star"></i> : {item.show.rating.average ? item.show.rating.average : "N/A "}  | {item.show.language} |  {item.show.runtime ? item.show.runtime + " mins" : "N/A "} </div>

                                    <div className="show-btn"><button><Link to={`/show/${item.show.id}`}>Show Details <i className="fas fa-arrow-right"></i></Link></button> </div>
                                </div>
                            </div>
                            )
                        }
                    </div> : <div className="loader"><LoadingIcons.ThreeDots /></div>}
        </>
    )
}



export default HomePage;
