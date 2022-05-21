import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import ModalComponent from "./Modal";


function Contact() {
    const [firstName, setFirstName] = useState("");

    const { register, 
        handleSubmit = (e) => {
            e.preventDefault();
            console.log(firstName, reply, textarea);
            setFirstName("");
            setReply("");
            setTextarea("");}
 } = useForm();
 
    const [data, setData] = useState("");
    const [reply, setReply] = useState("");
    const [textarea, setTextarea] = useState(
        "The content of a textarea is about you"
      );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    };



  return (
    <main className='contact'> 
       <div className="contact"> 
       <h2 style={{color: "#1abc9c", font: "Poppins", weight: "lighter" }}>Leave a message!</h2>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div style={{top: "40px", color: "#1abc9c", font: "Poppins", weight: "lighter" }}> 
                    <label htmlFor="firstName"> Name </label>
                        <input {...register("firstName")} placeholder="Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                           
                        /> 
                </div>
                <div style={{top: "40px", color: "#1abc9c", font: "Poppins", weight: "lighter" }}> 
                    <label htmlFor="reply"> Email </label>
                        <input {...register("reply")} placeholder="Email"

                            type='email'
                            name='reply'
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                         />
                </div>
                <div style={{color: "#1abc9c", font: "Poppins, Sans Pro", weight: "lighter" }}> 
                    <label htmlFor="reply"> Message </label>
                        <textarea 
                             {...register("aboutYou")}
                            value={textarea} autoComplete="off" onChange={handleChange} />
                </div>
                <Button variant="info" type="submit" onClick={handleSubmit}> Submit</Button>
            </form>
                <p style={{top: "40px", color: "#1abc9c", font: "Poppins", weight: "lighter" }}>{data}</p>
                <div> <ModalComponent/></div>
        </div> 
      
    </main>
  );
}

export default Contact;