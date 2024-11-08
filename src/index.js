import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Details from './components/CocktailDetals/Details'
import Landing from './components/LandingPage/landing';

const router = createBrowserRouter([
  {
    path:"/",
    element : <App />,
  },
  {
    path:"Details",
    element : <Details />,
  },
  {
    path:"landing",
    element : <Landing />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

