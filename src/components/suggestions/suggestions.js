import React, { useRef } from 'react';
import './suggestions.css';
import { Link, useLocation } from 'react-router-dom';

const Suggestions = () => {
  const location = useLocation();
  const suggestions = location.state && location.state.suggestions; // get the suggestions from the api
  const suggs = suggestions.slice(1); //remove the main drink and keep the suggestions

  // Create a ref to the slider container
  const sliderRef = useRef(null);

  // Function to scroll the slider left
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
  };

  // Function to scroll the slider right
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="slider" ref={sliderRef}>
        {suggestions &&
          suggs.map((sugg, index) => (
            <div key={index} className="slide">
              <img src={sugg.strDrinkThumb} alt={sugg.strDrink} className='sugg-img' />
              <Link to="/"><div className="drink-name sugg-name">{sugg.strDrink}{
                
              }</div></Link>
            </div>
          ))}
      </div>
      <button className="slider-button" onClick={scrollRight}>
        &gt; 
      </button>
    </div>
  );
};

export default Suggestions;
