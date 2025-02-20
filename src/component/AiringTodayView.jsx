import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css-component/now-playing.css";
import NavBar from "./NavBar";
import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const AiringTodayView = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAiringToday = async () => {
      try {
        const res = await axios.get(
          `${Api_Url}/tv/airing_today?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${Api_Key}`,
            },
          }
        );
        setShows(res.data.results);
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      }
    };

    fetchAiringToday();
  }, []);

  return (
    <>
      <NavBar />
      <div className="now-playing-page">
        <h1 className="now-playing">TV Shows Airing Today</h1>
        <div className="movies-grid2">
          {shows.map((show) => (
            <div
              key={show.id}
              className="movie-card"
              onClick={() => navigate(`/tv/${show.id}`)} // Navigate to TV show details
            >
              <img
                src={
                  show.poster_path
                    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                    : "fallback-image-url"
                } // Fallback for missing images
                alt={show.name}
              />
              <h3 className="now-title">{show.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <RealFooter />
    </>
  );
};

export default AiringTodayView;
