import React, { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
import "./Show.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Form.css"
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import { useForm } from "react-hook-form";
import LoadingIcons from 'react-loading-icons'
function Show() {
    const { id } = useParams()
    const baseURL = `https://api.tvmaze.com/shows/${id}`;
    const [show, setShowBase] = useState({});
    const [loaded, setloaded] = useState(false);
    const [bookClicked, setBookClicked] = useState(false);
    const [isbooked, setBooked] = useState(false);
    let goBack = useNavigate()
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
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        localStorage.setItem("ticketDetails", data)
        console.log(data)
        setTimeout(function () {

            goBack("/")
        }, 3000);

        setBooked(true)
    }

    return (
        <>
            {bookClicked ? <>
                <div className="form">
                    <div className="movie-poster">
                        <img src={show.image.original} alt={show.name} />

                    </div>
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <h1>Book Tickets</h1>
                        <p>
                            <label>
                                Show Name
                                <input
                                    required
                                    type="text"
                                    name="username"
                                    readOnly
                                    value={show.name}
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Show Time
                                <input
                                    required
                                    type="text"
                                    name="username"
                                    readOnly
                                    value={`${show.schedule.time} on ${show.schedule.days}`}
                                />
                            </label>
                        </p>

                        <p>
                            <label>
                                Show Duration
                                <input
                                    required
                                    type="text"
                                    name="username"
                                    readOnly
                                    value={`${show.runtime} mins`}
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Name *{" "}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    {...register("Name", {
                                        required: true,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i,
                                    })}
                                />
                                {errors.Name && <p>This field is required</p>}
                            </label>
                        </p>

                        <p>
                            <label>
                                Email *
                                <input
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "this is required",
                                        pattern: {
                                            value:
                                                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </label>
                        </p>

                        <div className="btn-flex">
                            <button onClick={() => setBookClicked(false)} className="cancel-btn">
                                Cancel
                            </button>

                            <button onClick={handleSubmit(onSubmit)} className="btn-form">
                                Book Tickets
                            </button>
                        </div>
                    </form>
                </div>
            </> :

                <>  {
                    loaded ?
                        <div className="show-container">
                            < div className="show-item-one">
                                <img src={show.image.original} alt={show.name} />
                                <div className="show-data">
                                    <div className="show-by">{show.network ? show.network.name : show.webChannel.name}  </div>
                                    <div className="show-title-one">{show.name} ({show.premiered.slice(0, 4)}) </div>
                                    <div className="fs20px">Premiered on :  {show.premiered} </div>
                                    <div className="fs20px">Run Time :  {show.runtime} mins </div>
                                    <div className="fs20px">Ratings : {show.rating.average ? show.rating.average : "N/A "}</div>
                                    <div className="fs20px">Language :  {show.language} </div>
                                    <div className="fs20px">Genre :  {show.genres[0]} | {show.genres[1]}</div>
                                    <div className="summary"> {parse(show.summary)} </div>
                                    <div className="show-btn btn-flex fs20px">
                                        <Link to="/">
                                            <button className="cancel-btn">
                                                GO Back
                                            </button>
                                        </Link>
                                        <button onClick={() => setBookClicked(true)}>Book Tickets</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                        : <div className="loader"><LoadingIcons.ThreeDots /></div>
                }</>


            }
            {isbooked ? <div className="success">Congratulatons! Ticket for "{show.name}"  is booked <br /> <br />Redirecting to Home 3...2...1</div> : null}
        </>
    )
}



export default Show;
