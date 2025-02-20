import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css-component/now-playing.css";
import NavBar from "./NavBar";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const NowPlayingPage = () => {
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
      <NavBar />
      <div className="now-playing-page">
        <h1 className="now-playing">Now Playing Movies</h1>
        <div className="movies-grid2">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie/${movie.id}`)} // Navigate on click
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="now-title">{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NowPlayingPage;
