import React, { useEffect, useState } from "react";
import "../css-component/hero-section.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

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
        setMovies(res.data.results);
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
            ? currentMovie.overview.substring(0, 150)
            : "No description available"}
          ...
        </p>
        <Link to={`/movie/${currentMovie.id}`}>
          <button className="watch-button">Watch Now</button>
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button className="nav-button prev-button" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className="nav-button next-button" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroSection;
