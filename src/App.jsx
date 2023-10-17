import "./App.css";
import Header from "./components/header/Header";
import Banner from "./pages/homepage/banner/Home";
import Join from "./pages/homepage/join/Join.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Join/>
      {/* <Detail/> */}
      {/* <Footer/>       */}
    </div>
  );
}

export default App;
