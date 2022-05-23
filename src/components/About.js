import { Link } from "react-router-dom";
import AboutImageDisplay from "./images/ProgrImage";
import AboutImageLanguage from "./images/LangImage";
import ModalApp from "./Modal/ModalText";

{/* About Settings*/}
const About = () => {
  return (
    <main> 
      <div className="layout_about">
        <div className="home_about1">
          <div className="card">{/* First card*/}
            <div>
              <h2 className="card__title">Programming skills</h2>
              <p className="card__info">
                <li> Learning Manage Systems: Canva, Moodle.  </li>
                <li> HTML, CSS, Sass, Bootstrap and Git/ GitHub. </li>
              </p>
              <div> <ModalApp/>  </div>{/* Modal*/}  
            </div>
          </div>
          <div className="card">{/* Second card*/} 
            <div> 
              <div className="card__img">
                <div> <AboutImageDisplay/></div>{/* Image*/}
              </div>
            </div>
          </div>
        </div>     
        <div className="home_about2">
          <div className="card">{/* Third card*/}  
            <div> 
              <div className="card__img">
                <div> <AboutImageLanguage/></div>{/* Image*/}
              </div>
            </div>
          </div>
          <div className="card">{/* Fourth card*/}  
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
