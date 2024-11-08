import React, { useState } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  const handleSearch = () => {
    if (!cocktailName) {
      alert('Please enter a cocktail name.');
      return;
    }

    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks && data.drinks.length > 0) {
          setCocktailDetails(data.drinks[0]);
          setSuggestions(data.drinks);
        } else {
          setCocktailDetails(null);
          setSuggestions([]);
          alert('Cocktail not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="landing">
      <div className="header">
        <h1>
          Cocktail Details <span>Finder</span>
        </h1>
        <div className="nav">
          <ul>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="left_side">
        <label htmlFor="cocktail">Enter Your Desired Cocktail :</label>
        <div className="search-container">
          <input
            placeholder="Cocktail..."
            type="text"
            id="cocktail"
            value={cocktailName}
            onChange={(e) => setCocktailName(e.target.value)}
          />
          <button type="button" onClick={handleSearch} className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
        {suggestions && (
          <ul className="suggestions">
            {suggestions.map((drink) => (
              <li key={drink.idDrink}>
                <Link to="/Details" state={{ cocktailDetails: drink, suggestions }}>
                  {drink.strDrink}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Landing;
