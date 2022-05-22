import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">     
      <nav>
      <ul>
        <li>{/* Link Github, but for now it doesn't work */}
          <a href="./https://github.com/glauciabierwagen" target="_blank" rel="noopener noreferrer" className="links">
            Bierwagen <i class="fa fa-github"></i>
          </a>
        </li>     
        <li>{/* Link to HomePage */}
          <Link className="links" to="/"> 
            Home
          </Link>
        </li>
        <li>{/* Link to AboutPage */}
          <Link className="links" to="/about">
            About
          </Link>
        </li>
        <li>{/* Link to ContacttPage */}
          <Link className="links" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>  
  </footer>
  );
};

export default Footer;

