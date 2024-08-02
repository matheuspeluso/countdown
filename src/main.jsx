import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//PAGES

import Home from "./routes/Home/Home.jsx";
import Countdown from "./routes/Countdown/Countdown.jsx";

//CONTEXT
import { CountdownProvider } from './context/CountdownContext.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,

    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/countdown",
        element:<Countdown/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountdownProvider> 

      <RouterProvider router={router}/> 

    </CountdownProvider>
    
  </React.StrictMode>,
)
