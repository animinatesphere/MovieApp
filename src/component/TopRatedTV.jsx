import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css-component/now-playing.css";
import frame6 from "../assets/Frame 352.png";
import frame352 from "../assets/cib_imdb.png";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const TopRatedTV = () => {
  const [shows, setShows] = useState([]);
  const [genres, setGenres] = useState({});
  const navigate = useNavigate();

  // Fetch Top Rated TV Shows
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

    const fetchGenres = async () => {
      try {
        const res = await axios.get(`${Api_Url}/genre/tv/list?language=en`, {
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

    fetchTopRatedTV();
    fetchGenres();
  }, []);

  return (
    <>
      <div className="now-playing-container">
        <div className="play-he">
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
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
              <div className="movie-info">
                <h3 className="movie-title">{show.name}</h3>
                <p className="movie-release">
                  <strong>First Air Date:</strong> {show.first_air_date}
                </p>
                <p className="movie-genres">
                  <strong>Genres:</strong>
                  {show.genre_ids.map((id) =>
                    genres[id] ? (
                      <button key={id} className="genre-btn">
                        {genres[id]}
                      </button>
                    ) : null
                  )}
                </p>

                <p className="movie-overview">
                  {show.overview.length > 100
                    ? show.overview.substring(0, 100) + "..."
                    : show.overview}
                </p>
              </div>
              <div className="frame-65">
                <div className="frame-left">
                  <img src={frame352} alt="IMDB" />
                  <p>{show.vote_average.toFixed(1)}</p>
                </div>
              </div>
              <h3 className="movie-title">{show.name}</h3>
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
