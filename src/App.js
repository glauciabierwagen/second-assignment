import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/reusablecomponents/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/reusablecomponents/Footer";
import Modal from "./components/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';



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
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/contact/:pageContactId" element={<ContactPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
     

    </BrowserRouter>
    
    
    
  );
}

export default App;
