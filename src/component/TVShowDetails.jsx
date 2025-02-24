import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css-component/tv-show-details.css";
import NavBar from "./NavBar";
import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const TVShowDetails = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      try {
        const res = await axios.get(`${Api_Url}/tv/${id}?language=en-US`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setTvShow(res.data);
        setSeasons(res.data.seasons);
      } catch (error) {
        console.error("Error fetching TV show details:", error);
      }
    };

    fetchTVShowDetails();
  }, [id]);

  if (!tvShow) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="tv-show-details">
        <div
          className="tv-header"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${tvShow.backdrop_path})`,
          }}
        >
          <h1>{tvShow.name}</h1>
          <p>{tvShow.overview}</p>
        </div>

        <div className="tv-info-container">
          <div className="tv-info-card">
            <h2>{tvShow.name}</h2>

            <div className="info-grid">
              <p>
                <strong>📺 Genres:</strong>{" "}
                {tvShow.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <strong>🎬 First Air Date:</strong> {tvShow.first_air_date}
              </p>
              <p>
                <strong>📆 Last Air Date:</strong> {tvShow.last_air_date}
              </p>
              <p>
                <strong>📅 Seasons:</strong> {tvShow.number_of_seasons}
              </p>
              <p>
                <strong>🎞️ Episodes:</strong> {tvShow.number_of_episodes}
              </p>
              <p>
                <strong>⭐ Rating:</strong> {tvShow.vote_average} / 10
              </p>
              <p>
                <strong>📡 Networks:</strong>{" "}
                {tvShow.networks.map((network) => network.name).join(", ")}
              </p>
              <p>
                <strong>📝 Created By:</strong>{" "}
                {tvShow.created_by.map((creator) => creator.name).join(", ")}
              </p>
            </div>

            <div className="btn-group">
              <button className="watch-btn">▶ Watch Now</button>
              <button className="watchlist-btn">+ Add to Watchlist</button>
            </div>
          </div>
        </div>

        <h2>Seasons</h2>
        <div className="seasons-list">
          {seasons.map((season) => (
            <div key={season.id} className="season-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                alt={season.name}
              />
              <div className="season-info">
                <h3>{season.name}</h3>
                <p>{season.episode_count} episodes</p>
                <p>
                  <strong>Air Date:</strong> {season.air_date || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RealFooter />
    </>
  );
};

export default TVShowDetails;
