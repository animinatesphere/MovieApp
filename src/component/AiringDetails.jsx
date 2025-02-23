import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css-component/movie-details.css";
import NavBar from "./NavBar";
import like from "../assets/likes.png";
// import Suggestion from "./Suggestion";
// import card1 from "../assets/coment inputs.png";
// import card2 from "../assets/2.png";
// import card3 from "../assets/3.png";
// import card4 from "../assets/4.png";
// import FooterDetails from "./FooterDetails";
import SuggestionTop from "./SuggestionTop";
import RealFooter from "./RealFooter";

const Api_Key = import.meta.env.VITE_App_Base_Api_key;
const Api_Url = import.meta.env.VITE_App_Base_Url;

const AiringDetails = () => {
  const { id } = useParams(); // Get TV show ID from URL
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const res = await axios.get(`${Api_Url}/tv/${id}?language=en-US`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Api_Key}`,
          },
        });
        setShow(res.data);
      } catch (error) {
        console.error("Error fetching TV show details:", error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!show) return <p>Loading show details...</p>;

  // 🔹 Convert rating to stars
  const starCount = Math.round(show.vote_average);
  const stars = Array(starCount).fill("⭐");

  return (
    <>
      <NavBar />
      <div className="movie-details-container">
        <div
          className="movie-banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${show.backdrop_path})`,
            height: "809px",
            width: "100%",
          }}
        >
          <div className="banner-de">
            <h1 className="detaails-ti">{show.name}</h1>
            <p className="date">
              {show.first_air_date} - {show.number_of_seasons} Seasons,{" "}
              {show.number_of_episodes} Episodes
            </p>
            <p className="vote">
              {stars.map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </p>
            <img src={like} alt="like button" className="like" />
          </div>
          <div className="play-sect">
            <button className="play1">Watch Now</button>
            <button className="play2">Preview</button>
          </div>
        </div>
        <div className="movie-info">
          <div className="details">
            <h2>About {show.name}</h2>
            <p>{show.overview}</p>
            <div className="genre">
              <h1>Genres</h1>
              <div className="gen-bu">
                {show.genres.map((genre) => (
                  <button key={genre.id}>{genre.name}</button>
                ))}
              </div>
            </div>
            <div className="pro">
              <h1>Production Company</h1>
            </div>
            <div className="chractor">
              {show.production_companies &&
              show.production_companies.length > 0 ? (
                show.production_companies.map((company) =>
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
      <SuggestionTop />
      {/* <div className="comment">
        <div className="comment-head">
          <h1>Comments</h1>
          <p> See More</p>
        </div>
        <div className="cards">
          <img src={card1} alt="comment 1" />
          <img src={card2} alt="comment 2" />
          <img src={card3} alt="comment 3" />
          <img src={card4} alt="comment 4" />
        </div>
      </div> */}
      <RealFooter />
    </>
  );
};

export default AiringDetails;
