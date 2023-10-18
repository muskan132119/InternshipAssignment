import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/homepage/home/Home";
import Details from "./pages/details/Details";
import Join from "./pages/homepage/join/Join.jsx";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Join />
              </>
            }
          />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
