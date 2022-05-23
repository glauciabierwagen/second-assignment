import { useParams } from "react-router-dom";

{/* ContactPage Settings*/}  

const ContactPage = () => {
const params = useParams();
 return (
  <div>{params.pageContactId}</div>
   
  );
};

export default ContactPage;
