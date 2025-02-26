import React, { useEffect, useState } from "react";
import "../css-component/hero-section.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_App_Base_Api_key;
const API_URL = import.meta.env.VITE_App_Base_Url;

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/movie/popular?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setMovies(res.data.results.slice(0, 6)); // Fetch only 6 movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentMovie = movies[currentIndex] || {};
  const bgImage = currentMovie.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`
    : "none";

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), ${bgImage}`,
      }}
    >
      <div className="hero-overlay">
        <h1 className="current-title">{currentMovie.title}</h1>
        <p className="movie-overview">
          {currentMovie.overview
            ? currentMovie.overview
            : "No description available"}
          ...
        </p>

        {/* Genre Buttons */}
        <div className="genres">
          {currentMovie.genre_ids?.length > 0 ? (
            <div className="gens-bus">
              {currentMovie.genre_ids.map((genreId) => (
                <button key={genreId} className="genresutton">
                  {getGenreName(genreId)}
                </button>
              ))}
            </div>
          ) : (
            <p>No genres available</p>
          )}
        </div>

        <Link to={`/movie/${currentMovie.id}`}>
          <button className="watch-button">View and Download</button>
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button className="nav-button prev-button" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className="nav-button next-button" onClick={handleNext}>
        <FaChevronRight />
      </button>

      {/* Dots for Slide Navigation */}
      <div className="dots-container">
        {movies.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// Helper function to get genre names
const getGenreName = (id) => {
  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  return genres[id] || "Unknown";
};

export default HeroSection;
