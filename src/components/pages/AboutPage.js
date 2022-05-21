import { useParams } from "react-router-dom";

const AboutPage = () => {
const params = useParams();
 return (
  <div>{params.pageId}</div>
   
  );
};

export default AboutPage;
