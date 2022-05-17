import ImageDisplay from "./MeImage";
import { Link } from 'react-router-dom';


const Header = () => {
  return ( 
    <header> 
      <div className="heading">        
        <div> <ImageDisplay/></div>
          <h2>Portfolio</h2>
          <div><i class="fas fa-star"></i></div>
        </div>
        <div className="user">
          <nav className="navbar">
            <ul className="btn">
              <li> <Link to="/home">Home</Link> </li>
              <li><a href="#about" className="btn">about</a></li>
              <li><a href="#contact" className="btn">contact </a></li>
          </ul>
                 
        </nav>
      </div>
  </header>    
  );  
};

export default Header;