import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./component/NowPlayingPage";
import MovieDetailsPage from "./component/MovieDetailsPage";
import TopReatedSection from "./component/TopReatedSection";
import AiringTodayView from "./component/AiringTodayView";
import AiringDetails from "./component/AiringDetails";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/Top-rated" element={<TopReatedSection />} />
        <Route path="/airing-today" element={<AiringTodayView />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/tv/:id" element={<AiringDetails />} />
      </Routes>
    </>
  );
}

export default App;
