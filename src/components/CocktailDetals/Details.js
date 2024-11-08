import React, { } from 'react';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import './Details.css';
import Suggestions from '../suggestions/suggestions';

const Details = () => {
  // Get the current location from React Router
  const location = useLocation();

  // Extract cocktailDetails and suggestions from location state
  const cocktailDetails = location.state && location.state.cocktailDetails;
  const suggestions = location.state && location.state.suggestions;

 
  // Check if cocktailDetails and suggestions exist and have required properties
  if (!cocktailDetails || !suggestions) {
    return <div>Loading...</div>; // You can replace this with your loading logic
  }

  // Extract ingredients from cocktailDetails and filter out null values
  const Ingredients = [
    cocktailDetails.strIngredient1,
    cocktailDetails.strIngredient2,
    cocktailDetails.strIngredient3,
    cocktailDetails.strIngredient4,
    cocktailDetails.strIngredient5,
    cocktailDetails.strIngredient6,
    cocktailDetails.strIngredient7,
    cocktailDetails.strIngredient8,
    cocktailDetails.strIngredient9,
    cocktailDetails.strIngredient10
  ].filter(ingredient => ingredient !== null);








  
  return (
    <div>
      {/* Header Component */}
      <Header>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
          {/* SVG path here */}
        </svg>
      </Header>
      {/* Details Section */}
      <div className="Details">
        <h1>{cocktailDetails.strDrink}</h1>
        <img src={cocktailDetails.strDrinkThumb} alt="drink" />
        <p className='p1'>The {cocktailDetails.strDrink} is an {cocktailDetails.strAlcoholic} Drink  </p>
        <p className='p2'><span id='Ins'>Instructions :</span> {cocktailDetails.strInstructions}</p>
        <p className='p3'><span id='Ins'>Ingredients :</span></p>
        <ul>
          {Ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <Suggestions />

    </div>
  );
};

export default Details;
