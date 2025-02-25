import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css-component/now-playing.css";
import frame6 from "../assets/Frame 352.png";
import frame352 from "../assets/cib_imdb.png";
import frame35 from "../assets/zondicons_time.png";
import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const NowPlayingSection = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const navigate = useNavigate();

  // Fetch Now Playing Movies
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

    const fetchGenres = async () => {
      try {
        const res = await axios.get(`${Api_Url}/genre/movie/list?language=en`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        const genreMap = res.data.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});
        setGenres(genreMap);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchNowPlaying();
    fetchGenres();
  }, []);

  return (
    <>
      <div className="now-playing-container">
        <div className="play-he">
          <h2>Now Playing</h2>
          <img src={frame6} alt="" />
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
              <div className="movie-info">
                <p className="movie-release">
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p className="movie-genres">
                  <strong>Genres:</strong>
                  {movie.genre_ids.map((id) =>
                    genres[id] ? (
                      <button key={id} className="genre-btn">
                        {genres[id]}
                      </button>
                    ) : null
                  )}
                </p>
                <p className="movie-overview">
                  {movie.overview.length > 100
                    ? movie.overview.substring(0, 100) + "..."
                    : movie.overview}
                </p>
              </div>
              <div className="frame-65">
                <div className="frame-left">
                  <img src={frame352} alt="IMDb" />
                  <p>{movie.vote_average.toFixed(1)}</p>
                </div>
                <div className="frame-right">
                  <img src={frame35} alt="Runtime" />
                  <p>{movie.runtime || "N/A"} mins</p>
                </div>
              </div>
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          ))}
        </div>

        <button onClick={() => navigate("/now-playing")} className="view">
          View More
        </button>
      </div>
    </>
  );
};

export default NowPlayingSection;
