import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css-component/movie-details.css";
import NavBar from "./NavBar";
import like from "../assets/likes.png";
import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const MovieDetailsPage = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [scenes, setScenes] = useState([]);
  const [cast, setCast] = useState([]); // ✅ State for storing cast

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const res = await axios.get(`${Api_Url}/movie/${id}?language=en-US`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setMovie(res.data);

        // Fetch scenes
        const imagesRes = await axios.get(`${Api_Url}/movie/${id}/images`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setScenes(imagesRes.data.backdrops.slice(0, 10)); // Get first 10 backdrops

        // Fetch cast ✅
        const creditsRes = await axios.get(`${Api_Url}/movie/${id}/credits`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setCast(creditsRes.data.cast.slice(0, 10)); // Get first 10 cast members
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Fetching Movie Details...</p>
      </div>
    );

  // Convert rating to stars
  const starCount = Math.round(movie.vote_average);
  const stars = Array(starCount).fill("⭐");

  return (
    <>
      <div className="movie-container">
        <NavBar />
        <div className="movie-details-container">
          <div
            className="movie-banner"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          >
            <div className="banner-de">
              <h1 className="details-title">{movie.title}</h1>
              <p className="date">
                {movie.release_date} - {movie.runtime} mins{" "}
                {movie.origin_country}
              </p>
              <p className="vote">
                {stars.map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </p>
              <img src={like} alt="Like" className="like" />
            </div>
            <div className="play-sect">
              <button className="play1">Watch Now</button>
              <button className="play2">Preview</button>
            </div>
          </div>

          <div className="movie-info2">
            {/* TV Show Scenes */}
            <h2 className="se">TV Scenes</h2>
            <div className="scene-gallery">
              {scenes.length > 0 ? (
                scenes.map((scene, index) => (
                  <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/w500${scene.file_path}`}
                    alt={`Scene ${index + 1}`}
                    className="scene-image"
                  />
                ))
              ) : (
                <p>No scenes available.</p>
              )}
            </div>

            {/* About Movie */}
            <div className="details">
              <h2>About {movie.title}</h2>
              <p>{movie.overview}</p>

              {/* Genres */}
              <div className="genre">
                <h1>Genres</h1>
                <div className="gen-bu">
                  {movie.genres.map((genre) => (
                    <button key={genre.id}>{genre.name}</button>
                  ))}
                </div>
              </div>

              {/* Cast Section ✅ */}

              <h1 className="se">Top Cast</h1>
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

              {/* Production Company */}
              <div className="pro">
                <h1>Production Company</h1>
              </div>
              <div className="chractor">
                {movie.production_companies?.length > 0 ? (
                  movie.production_companies.map((company) =>
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
        </div>

        <RealFooter />
      </div>
    </>
  );
};

export default MovieDetailsPage;
