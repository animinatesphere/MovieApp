// import React, { useEffect, useState } from "react";
// import axios from "axios"; // ✅ Import axios
// import "../component/movie.css";

// const Api_Key = import.meta.env.VITE_App_Base_Api_key;
// const Api_Url = import.meta.env.VITE_App_Base_Url;

// const MoviePage = () => {
// const [movies, setMovies] = useState([]);
//   const [tv, setTv] = useState([]);

//   // FETCHING FOR MOVIE
//   const moviepage = async () => {
//     try {
//       const res = await axios.get(
//         `${Api_Url}/movie/popular?language=en-US&page=1`,
//         {
//           headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${Api_Key}`,
//           },
//         }
//       );
//       setMovies(res.data.results);
//       console.log("Fetched Movies:", res.data.results);
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//     }
//   };
//   const tvPage = async () => {
//     try {
//       const res = await axios.get(`${Api_Url}/trending/tv/day?language=en-US`, {
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer ${Api_Key}`,
//         },
//       });
//       setTv(res.data.results);
//       console.log("Fetched tv:", res.data.results);
//     } catch (error) {
//       console.error("Error fetching tv:", error);
//     }
//   };

//   useEffect(() => {
//     moviepage();
//     tvPage();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="tv-head">Movie series</h2>
//       <div className="movie-container">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-grid">
//             {" "}
//             <img
//               src={`https://tmdb.org/t/p/original${movie.poster_path}`}
//               alt=""
//               style={{
//                 width: "250px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//               }}
//             />
//             <p className="move-title">{movie.original_title}</p>
//             <p className="over">{movie.overview}</p>
//           </div>
//         ))}
//       </div>
//       <h2 className="tv-head">Tv series</h2>
//       <div className="tv-container">
//         {tv.map((tvs) => (
//           <div key={tvs.id} className="movie-grid">
//             <img
//               src={`https://tmdb.org/t/p/original${tvs.poster_path}`}
//               alt=""
//               style={{
//                 width: "250px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//               }}
//             />
//             <p className="move-title">{tvs.name}</p>
//             <p className="over">{tvs.overview}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoviePage;
