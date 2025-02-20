import React from "react";
import NavBar from "../component/NavBar";
import HeroSection from "../component/HeroSection";
import NowPlayingSection from "../component/NowPlayingSection";
import "../css-component/homepage.css";
import TopRatedMovies from "../component/TopRatedMovies";
import AiringToday from "../component/AiringToday";
import OnAir from "../component/OnAir";
import RealFooter from "../component/RealFooter";
const HomePage = () => {
  return (
    <div className="home-container">
      <NavBar />
      <HeroSection />
      <NowPlayingSection />
      <TopRatedMovies />
      <HeroSection />
      <AiringToday />
      <OnAir />
      <RealFooter />
    </div>
  );
};

export default HomePage;
