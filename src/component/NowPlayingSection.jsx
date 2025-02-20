import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css-component/now-playing.css";
import frame6 from "../assets/Frame 352.png";
import "../css-component/now-playing.css";
import frame352 from "../assets/cib_imdb.png";
import frame35 from "../assets/zondicons_time.png";
import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const NowPlayingSection = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await axios.get(
          `${Api_Url}/movie/now_playing?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${Api_Key}`,
            },
          }
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchNowPlaying();
  }, []);

  return (
    <>
      <div className="now-playing-container">
        <div className="play-he">
          <img src={frame6} alt="" />
          <h2>Now Playing</h2>
        </div>
        <div className="movies-carousel">
          {movies.slice(0, 5).map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="frame-65">
                <div className="frame-left">
                  <img src={frame352} alt="" />
                  <p>{movie.vote_average}</p>
                </div>
                <div className="frame-right">
                  <img src={frame35} alt="" />
                  <p>{movie.runtime}</p>
                </div>
              </div>
              <p className="now">{movie.title}</p>
            </div>
          ))}
        </div>

        <button onClick={() => navigate("/now-playing")} className="view">
          {" "}
          View More
        </button>
      </div>
    </>
  );
};

export default NowPlayingSection;
