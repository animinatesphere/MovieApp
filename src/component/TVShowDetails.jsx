import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css-component/tv-show-details.css";
import NavBar from "./NavBar";
import RealFooter from "./RealFooter";
import like from "../assets/likes.png";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const TVShowDetails = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [scenes, setScenes] = useState([]); // TV Scenes (Backdrops)
  const [cast, setCast] = useState([]); // Character List (Cast)

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      try {
        // Fetch TV Show Details
        const res = await axios.get(`${Api_Url}/tv/${id}?language=en-US`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setTvShow(res.data);
        setSeasons(res.data.seasons);

        // Fetch TV Show Images (Scenes / Backdrops)
        const imagesRes = await axios.get(`${Api_Url}/tv/${id}/images`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setScenes(imagesRes.data.backdrops.slice(0, 10)); // Get first 10 backdrops

        // Fetch Cast (Characters)
        const creditsRes = await axios.get(`${Api_Url}/tv/${id}/credits`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setCast(creditsRes.data.cast.slice(0, 10)); // Get first 10 cast members
      } catch (error) {
        console.error("Error fetching TV show details:", error);
      }
    };

    fetchTVShowDetails();
  }, [id]);

  if (!tvShow) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Movies...</p>
      </div>
    );
  }

  // Convert rating to a star count
  const starCount = Math.round(tvShow.vote_average);
  const stars = Array(starCount).fill("⭐");

  return (
    <>
      <NavBar />
      <div className="movie-details-container">
        <div
          className="movie-banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${tvShow.backdrop_path})`,
          }}
        >
          <div className="banner-de">
            <h1 className="details-title">{tvShow.name}</h1>
            <p className="date">
              {tvShow.first_air_date} - {tvShow.runtime || "N/A"} mins
            </p>
            <p className="vote">
              {stars.map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </p>
            <img src={like} alt="like icon" className="like" />
          </div>
          <div className="play-sect">
            <button className="play1">Watch Now</button>
            <button className="play2">Preview</button>
          </div>
        </div>
        {/* TV Show Scenes */}
        <h2 className="se">TV Scenes</h2>
        <div className="scene-gallery">
          {scenes.map((scene, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${scene.file_path}`}
              alt="TV Scene"
              className="scene-image"
            />
          ))}
        </div>
        {/* TV Show Info */}
        <div className="movie-info">
          <div className="details">
            <h2>About {tvShow.name}</h2>
            <p>{tvShow.overview}</p>

            <div className="genre">
              <h1 className="se">Genres</h1>
              <div className="gen-bu">
                {tvShow.genres.map((genre) => (
                  <button key={genre.id}>{genre.name}</button>
                ))}
              </div>
            </div>
            <div className="pro">
              <h1>Production Company</h1>
            </div>
            <div className="chractor">
              {tvShow.production_companies.length > 0 ? (
                tvShow.production_companies.map((company) =>
                  company.logo_path ? (
                    <div key={company.id} className="company-logo">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                        alt={company.name}
                      />
                    </div>
                  ) : null
                )
              ) : (
                <p>No production companies found</p>
              )}
            </div>
          </div>
        </div>

        {/* Cast (Characters) */}
        <h2 className="se">Characters</h2>
        <div className="cast-list">
          {cast.map((actor) => (
            <div key={actor.id} className="cast-card">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200" // Fallback image
                }
                alt={actor.name}
              />
              <h3>{actor.name}</h3>
              <p>as {actor.character}</p>
            </div>
          ))}
        </div>

        {/* Seasons */}
        <h2 className="se">Seasons</h2>
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
