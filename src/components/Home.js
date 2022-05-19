import Button from "./Button";
import ImageDisplay from "./MeImage";

const Home = () => {
  return (
    <main> 
  <div className="layout_main"> 
    <div className="home_cont">
    <div className="card">
          <div className="card__content">
            <h2 className="card__title">My name is Gláucia</h2>
              <p className="card__info">
                "I believe that learning is the creation of possibilities, discovery, 
                the exercise of imagination and enchantment with the things of life." 
              </p>
              
          </div>
        </div>
      <div className="card"> 
        <div className="card__content"> 
          <div className="card__img">
            <div> <ImageDisplay/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </main>
 
  );
};

export default Home;
