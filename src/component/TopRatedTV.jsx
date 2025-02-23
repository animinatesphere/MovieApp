import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css-component/now-playing.css";
import frame6 from "../assets/Frame 352.png";
import frame352 from "../assets/cib_imdb.png";
import frame35 from "../assets/zondicons_time.png";
// import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const TopRatedTV = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopRatedTV = async () => {
      try {
        const res = await axios.get(
          `${Api_Url}/tv/top_rated?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${Api_Key}`,
            },
          }
        );
        setShows(res.data.results);
      } catch (error) {
        console.error("Error fetching Top Rated TV Shows:", error);
      }
    };

    fetchTopRatedTV();
  }, []);

  return (
    <>
      <div className="now-playing-container">
        <div className="play-he">
          <img src={frame6} alt="Top Rated Header" />
          <h2>Top Rated TV Shows</h2>
        </div>
        <div className="movies-carousel">
          {shows.slice(0, 5).map((show) => (
            <div
              key={show.id}
              className="movie-card"
              onClick={() => navigate(`/tv/${show.id}`)}
            >
              <img
                src={
                  show.poster_path
                    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                    : "fallback-image-url"
                }
                alt={show.name}
              />
              <div className="frame-65">
                <div className="frame-left">
                  <img src={frame352} alt="IMDB" />
                  <p>{show.vote_average?.toFixed(1) || "N/A"}</p>
                </div>
                <div className="frame-right">
                  <img src={frame35} alt="Runtime" />
                  <p>
                    {show.episode_run_time?.[0]
                      ? `${show.episode_run_time[0]} min`
                      : "N/A"}
                  </p>
                </div>
              </div>
              <p className="now">{show.name}</p>
            </div>
          ))}
        </div>

        <button onClick={() => navigate("/top-rated-tv")} className="view">
          View More
        </button>
      </div>
    </>
  );
};

export default TopRatedTV;
