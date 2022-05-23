import { Link } from "react-router-dom";
import Logo from "./Logo";

{/* Header Settings*/}  

const Header = () => {
  return (
    <header className="header">
      <div> <Logo /> </div> {/* Component Logo*/}
      <nav>
        <ul>
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
          <li>{/* Link to ContactPage */}
            <Link className="links" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
