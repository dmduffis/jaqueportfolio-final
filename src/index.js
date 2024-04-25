import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import pages 
import App from './App';
import PortfolioPage from './pages/PortolioPage';
import ContactPage from './pages/ContactPage';

// import Router to link pages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectSingleTheme from './components/ProjectSingleTheme';


// define routes for linked pages
const router = createBrowserRouter([
  {
    path: "/projects",
    element: <PortfolioPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/single/:ProjectId",
    element: <ProjectSingleTheme />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
