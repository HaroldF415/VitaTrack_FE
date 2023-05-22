import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home, Tracker, Metrics, Achievements, Community, Profile } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
