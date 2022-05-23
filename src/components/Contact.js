import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import ButtonComponent from "./reusablecomponents/ButtonComponent";


function Contact() {
    const [firstName, setFirstName] = useState(""); {/* Use state() is a hook that allows you to have state variables in functional components.*/}

    {/* handdleSubmi is a function that will receive the form data if form validation is successful.*/}
    const { register, 
        handleSubmit = (e) => {
            e.preventDefault();
            console.log(firstName, reply, textarea);
            setFirstName("");
            setReply("");
            setTextarea("");}
 } = useForm(); {/* useForm() is custom hook for managing forms with ease. It takes optional arguments*/}
 
    const [inputdata, setData] = useState("");
    const [reply, setReply] = useState("");
    const [textarea, setTextarea] = useState(
        "Your message"
      );
    
    {/* The handleChange function simply takes an event as a parameter, whereby we get the current value of the input*/}
    const handleChange = (event) => {
        setTextarea(event.target.value)
    };
     {/* Attempting to apply form deletion after submission of data*/}
    const handleReset = () => {
        document.querySelectorAll('input');
        this.setData({inputdata});
        this.setFirsName({firstName});
        this.setReply({reply});
        this.setTextarea({textarea});
    };

  return (
    <main className='contact'> 
       <div className="contact"> 
       <h2 style={{color: "#1abc9c", font: "Poppins", weight: "lighter" }}>Leave a message!</h2>
            <form onSubmit={handleSubmit((inputdata) => setData(JSON.stringify(inputdata)))}>  {/* Form*/}
                <div className="label_name row">  {/* Item Name*/}
                    <label htmlFor="firstName"> Name </label>
                        <input {...register(`Message sent! Name:`)} placeholder="Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                        /> 
                </div>
                <div className="label_name row"> {/* Item Email*/} 
                    <label htmlFor="reply"> Email </label>
                        <input {...register("Email:")} placeholder="Email"
                            type='email'
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                         />
                </div>
                <div className="label_name row"> {/* Item Message*/} 
                    <label htmlFor="textarea"> Message </label>
                        <textarea {...register("Text:")}
                            value={textarea} autoComplete="off" 
                            onChange={handleChange} 
                        />
                </div>
                {/*<div> <ButtonComponent  children="About me " onClick={handleSubmit} /> </div> Button reusable is not working*/} 
                <div> <Button variant="danger" type="submit" onClick={handleSubmit}> Submit</Button></div>
                <p style={{top: "70px", color: "#1abc9c", font: "Poppins", weight: "lighter" }}>{inputdata}</p>
                <div> <Button variant="warning" onClick={handleReset} value="Reset">Reset</Button></div>
            </form>                  
        </div>         
    </main>
  );
}

export default Contact;