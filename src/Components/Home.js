import React from 'react';
import './Css files/Home.css';
import SearchBar from './SearchBar';

function Home() {
  return (
    <div className="home-container">
       
      <div className="background-image">
      <p id='Info-text'>We Are Providing Seach Greate Food Till 15 Yraers
      </p>
      <br></br>
      <SearchBar/>
      </div>

      {/* Button */}
      <button className="home-button">Learn More</button>
    </div>
  );
}

export default Home;