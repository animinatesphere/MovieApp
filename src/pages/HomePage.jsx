import React, { useState, useEffect } from "react";
import NavBar from "../component/NavBar";
import HeroSection from "../component/HeroSection";
import NowPlayingSection from "../component/NowPlayingSection";
import "../css-component/homepage.css";
import TopRatedMovies from "../component/TopRatedMovies";
// import AiringToday from "../component/AiringToday";
import OnAir from "../component/OnAir";
import RealFooter from "../component/RealFooter";
import "../css-component/homepage.css";
import TopRatedTV from "../component/TopRatedTV";
import AuthForm from "../component/AuthForm";
import KoreanMoviesSection from "../component/KoreanMoviesSection";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API delay before showing content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change this to match actual API load time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Movies...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <NavBar />
      <HeroSection />
      <NowPlayingSection />
      <TopRatedMovies />
      <HeroSection />
      <TopRatedTV />
      <KoreanMoviesSection />
      <OnAir />
      <AuthForm />
      <RealFooter />
    </div>
  );
};

export default HomePage;
