import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css-component/now-playing.css";
import NavBar from "./NavBar";
import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const KoreanMoviesMore = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKoreanMovies = async () => {
      try {
        const res = await axios.get(
          `${Api_Url}/discover/movie?language=en-US&with_original_language=ko&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${Api_Key}`,
            },
          }
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching Korean movies:", error);
      }
    };

    fetchKoreanMovies();
  }, []);

  return (
    <>
      <NavBar />
      <div className="now-playing-page">
        <h1 className="now-playing">Top Korean Movies</h1>
        <div className="movies-grid2">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title}
              />
              <h3 className="now-title">{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <RealFooter />
    </>
  );
};

export default KoreanMoviesMore;
