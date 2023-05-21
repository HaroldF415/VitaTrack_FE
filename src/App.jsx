import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
