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
                Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. 
                Donec viverra eleifend lacus, vitae ullamcor.
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
