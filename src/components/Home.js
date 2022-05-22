import { Link } from 'react-router-dom';
import ImageDisplay from "./images/MeImage";
import Button from 'react-bootstrap/Button';
import About from "./About";
import AboutPage from './pages/AboutPage';

const Home = () => {
  return (
  <main> 
  <div className="layout_main"> 
    <div className="home_cont">
    <div className="card">
      <div>
        <h2 className="card__title">My name is Gláucia</h2>
          <p className="card__info">
            "I believe that learning is the creation of possibilities, discovery, 
            the exercise of imagination and enchantment with the things of life." 
            </p>               
      </div>
    </div>
      <div className="card"> 
        <div> 
          <div className="card__img">
            <div> <ImageDisplay/></div>
          </div>
        </div>
      </div>
    </div>
    <div className="home_about2">
        <div> 
          <div> 
            <div>
              <div> <Button  href="./about" element={<About />} variant="danger light" size="lg" enabled> About me </Button>  </div>                   
            </div>
          </div>
        </div>
    </div>   
  </div>
                          
                         
                           
    

  
  </main>
  
 
  );
};

export default Home;
