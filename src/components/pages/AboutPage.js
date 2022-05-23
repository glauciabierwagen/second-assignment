import { useParams } from "react-router-dom";

{/* AboutPage Settings*/}  

const AboutPage = () => {
const params = useParams();
 return (
  <div>{params.pageId}</div>
   
  );
};

export default AboutPage;
