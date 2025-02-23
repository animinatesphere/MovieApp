import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css-component/hero-section.css";
import frame from "../assets/Frame 54.png";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        `${Api_Url}/movie/popular?language=en-US&page=1`,
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

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [movies]);

  if (movies.length === 0) return <p>Loading...</p>;

  const currentMovie = movies[currentIndex];

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie.poster_path})`,
      }}
    >
      <div className="hero-overlay">
        <h1 className="current-title">{currentMovie.title}</h1>
        <p className="over">{currentMovie.overview}</p>

        <button>View and download in all qualities</button>
      </div>
    </div>
  );
};

export default HeroSection;
