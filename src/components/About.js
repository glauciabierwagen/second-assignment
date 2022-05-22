import { Link } from "react-router-dom";
import AboutImageDisplay from "./images/ProgrImage";
import AboutImageLanguage from "./images/LangImage";
import AppTest from "./Modal/ModalText";


const About = () => {
  return (
    <main> 
      <div className="layout_about">
        <div className="home_about1">
          <div className="card">
            <div>
              <h2 className="card__title">Programming skills</h2>
              <p className="card__info">
                <li> Learning Manage Systems: Canva, Moodle.  </li>
                <li> HTML, CSS, Sass, Bootstrap and Git/ GitHub. </li>
              </p>
              <div> <AppTest/>  </div>
            </div>
          </div>
          <div className="card"> 
            <div> 
              <div className="card__img">
                <div> <AboutImageDisplay/></div>
              </div>
            </div>
          </div>
        </div>     
        <div className="home_about2">
          <div className="card"> 
            <div> 
              <div className="card__img">
                <div> <AboutImageLanguage/></div>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <h2 className="card__title">Language skills</h2>
                <p className="card__info">  
                  - Portuguese: native. <br />
                  - Spanish: advanced. <br />
                  - English: advanced. <br />
                  - Swedish: beginner.  
                </p>
            </div>
          </div>  
      </div>   
    </div>          
  </main>    
  );
};

export default About;
