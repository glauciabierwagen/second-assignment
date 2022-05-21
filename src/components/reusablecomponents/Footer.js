import { Link } from "react-router-dom";
import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="header">
     
      <nav>
      <ul>
      <li>
            <a href className="links" to="https://github.com/glauciabierwagen">
           Bierwagen <i class="fa fa-github"></i>
            </a>
          </li>

     
        <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
          <li>
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

