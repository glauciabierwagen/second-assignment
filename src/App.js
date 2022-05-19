import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/about/:pageId" element={<AboutPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
