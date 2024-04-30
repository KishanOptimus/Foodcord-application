import React, {useState
} from 'react';
import {Link} from 'react-router-dom';
import './Css files/Login.css';
function Login(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [errorMessage , setErrorMessage] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const respons = await fetch('/api/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json', 
                },
                body: JSON.stringify({ email, password }),
            });
            if (respons.ok) {
                // Login successful, redirect or display success message
                console.log('Login successful!');
                // ... handle successful login (e.g., redirect to home page)
              } else {
                const errorData = await respons.json();
                setErrorMessage(errorData.message); // Set error message
              }
        }
        catch(error){
            console.error(error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };
    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               <label htmlFor="email">Email:</label>
                <input type="email" id="email"  value={email}onChange={(event) => setEmail(event.target.value)}/>
                <label htmlFor="password">Password:</label>
                   <input type="password"id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                     {errorMessage && <p className="error-message">{errorMessage}</p>}
                      <button type="submit">Login</button>
            </form>
                 <p>
                   Don't have an account? <Link to="/register">Register</Link>
                </p>
       </div>
    ); 
}
export default Login;