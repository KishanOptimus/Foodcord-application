import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className='App'>
          <Router>
            <Navigation/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='./login' element={<Login/>}/>

            </Routes>
          </Router>
    </div>
  );
;}

export default App;
