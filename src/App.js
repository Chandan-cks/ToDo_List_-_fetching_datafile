import Img from './asset/img/IMG-20220411-WA0003.jpg';
import './App.css';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import { useEffect, useState } from "react";
function App() {
    // const rege="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/";
    const[name,setName]=useState(""); //write a empty string for name value 
    const handelNameChange = (event) => {  
      setName(event.target.value)
      // {localStorage.getItem('name')}
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        
    };

    const[error,seterror]=useState("");
    const[email,setEmail]=useState("");
    const[er, seter]=useState("")


    const emailChange = (el) => {
      setEmail(el.target.value)
      // {localStorage.getItem('email')}
    }

    const[submit, setsubmit]=useState("");
    const submited = (e) =>{
      console.log('ddd');
      e.preventDefault()
      if(name==""){
        seterror("Input First name");
      }else if(name.length<=4){
        seterror("atleast 4 charecter use");
      }
      else{
        seterror("");
      setsubmit("Thank you");
      }

      if(email==""){
        seter("Input email Id");
      }else if(!validateEmail(email)){
        seter("Write email id like *abc@gmail.com*");
      }
      else if(validateEmail(email)){
        seter("");
      }

      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    }
    // window.localStorage.getItem('name', name);
    // window.localStorage.getItem('email', email);

    useEffect(()=>{
     const localStorageName = localStorage.getItem("name"); // create a variable to store local storage data 
     setName(localStorageName); 
     const localStorageEmail = localStorage.getItem("email");// create a variable to store local storage data 
     setEmail(localStorageEmail);
    },[])
    


    return (
    <div className="App">
      <img src={Img} alt="my photo" width="100" height="100" border-radius="50"></img>
      <h2>Chandan kumar sahoo</h2>
      <h3>B.Tech Electronics and Telecommunication</h3>
      <h3>Contact No:-7438092177</h3>
      <address>
      Address:-A.M.patana,Banamalipur
      Po-Bhakarsahi
      Ps-Balipatana,
      Dist-Khordha, State-Odisha
      </address>
      <h2><u>CAREER OBJECTIVE</u></h2>
      <h3>
          I am a beginner software developer with problem-solving skills
          and experience in creating and designing software in a test-driven
          environment.
      </h3>
      <h2><u>BASIC ACADEMIC CREDENTIALS</u></h2>
      <table className=''>
        <thead>
            <tr>
              <th>Qualification</th>
              <th>Board/University</th>
              <th>Year</th>
              <th>Percentage/SGPA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>10th</td>
              <td>HSE</td>
              <td>2013-14</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>+2</td>
              <td>CHSE</td>
              <td>2014-16</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>B.Tech</td>
              <td>BPUT</td>
              <td>2016-20</td>
              <td>0%</td>
            </tr>
        </tbody>

      </table>

      <form className='my-form'>

          <label htmlFor='first_name'>
      
            Name:
            <input type="text" name="first_name" value={name} onChange={handelNameChange} />
            <p className='error' >{error}</p>
          </label>

          <label htmlFor='email_id'>
            {/* Email:{localStorage.getItem('email')} */}
            Email:
            <input type="email_id"  name="email_id" value={email} onChange={emailChange} />
            <p className='error' >{er}</p>
          </label>

          <label>
            What can do you you? <br></br>
            <textarea type="text"></textarea>
          </label>
          <button type='submit' value="submit" onClick={submited}>Submit</button>
          <h2>{submit}</h2>
          
      </form>



    </div>
  );
}

export default App;
