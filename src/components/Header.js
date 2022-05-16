import ImageDisplay from "./MeImage";

const Header = () => {
    return ( 
        <header class="masthead bg-primary text-white text-center"> 
        <div class="container d-flex align-items-center flex-column">        
          <div> <ImageDisplay/></div>
            <h1 className="masthead-heading text-uppercase mb-0">Portfolio</h1>
              <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
              </div>
            <h2 class="masthead-subheading font-weight-light mb-4">Educator - Web Designer </h2>
        </div>
     <div className="user">
      <nav className="navbar">
        <ul>
          <li><a href="#home" class="btn"> Home </a></li>
          <li><a href="#about" class="btn">about</a></li>
          <li><a href="#education" class="btn">education</a></li>
          <li><a href="#portfolio" class="btn">portfolio</a></li>
          <li><a href="#contact" class="btn">contact </a></li>
        </ul>
      </nav>
    </div>
    </header>
    
    );  
};

export default Header;