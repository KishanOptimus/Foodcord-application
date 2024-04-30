import { useState } from "react";
import { Link } from "react-router-dom";
import './Css files/Register.css'

function Registration(){
    const[name, setName] =  useState('');
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[confrompassword , setConfrompassword]= useState('');
    const[mobileNumber, setMobileNumber] =useState('');
    const [dateOfBirth , setDateOfBirth] = useState('');
    const[gender , setGender] = useState('');
    const[errorMessage , setErrorMessage] = useState('');

    const handleSubmit = async (event) =>{
        event.prventDefault();
        if(password !== confrompassword){
            console.log('Password is not matched');
            return;
        }
            try {
                const response = await fetch('/api/register', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    mobileNumber,
                    dateOfBirth,
                    gender,
                    password,
                  }),
                });
          
                if (response.ok) {
                  // Registration successful, redirect or display success message
                  console.log('Registration successful!');
                  // ... handle successful registration (e.g., redirect to login page)
                } else {
                  const errorData = await response.json();
                  setErrorMessage(errorData.message); // Set error message
                }
        }
        catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
          }
    }
     return(
     <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"value={name} onChange={(event) => setName(event.target.value)}  />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  value={email}  onChange={(event) => setEmail(event.target.value)}/>
        <label htmlFor="mobileNum">Mobile Number:</label>
        <input type="tel"id="mobileNum"  value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)}/>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input type="date" id="dateOfBirth"value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <label htmlFor="conformPassword">Confirm Password:</label>
        <input type="password" id="confromPassword"value={confrompassword} onChange={(event) => setConfrompassword(event.target.value)} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
     );

};

export default Registration;