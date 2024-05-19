import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Environmental Conservation Foundation</h2>
      <div className="plant-gallery">
        <img src='./plant3.jpg' alt="Plant 1" className="plant-image-main" />
      </div>
      <p>
        The Environmental Conservation Foundation (ECF) is dedicated to promoting environmental conservation and sustainability initiatives worldwide. 
        Through research, education, and community engagement, we strive to protect natural ecosystems, preserve biodiversity, and combat climate change. 
        Our mission is to foster a culture of environmental stewardship and inspire individuals and communities to take action towards a greener and more sustainable future.
      </p>
      <div className="additional-content">
        <h3>Learn More</h3>
        <p>Explore our projects and initiatives...</p>
       <div className='all-pic'>
          <div>
            <img src='./e1.jpg' alt="Plant 1" className="plant-image" />
          </div>
          <div>
            <img src='./e2.jpg' alt="Plant 2" className="plant-image" />
          </div>
          <div>
            <img src='./e3.jpeg' alt="Plant 3" className="plant-image" />
          </div>
          <div>
            <img src='./e4.jpg' alt="Plant 4" className="plant-image" />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
