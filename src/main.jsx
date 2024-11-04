import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,

 
  
} from "react-router-dom";
import Banner from './components/Banner/Banner.jsx';
import ErrorElement from './components/ErrorElement/ErrorElement.jsx';


const router = createBrowserRouter([

  
  {
      path: '/',
      element: <App></App>,
      children: [
        {
          path: '/',
          element: <Banner></Banner> ,
          loader: () => fetch('/gadgets.json')
          
        },
        {
          path: '/:id',
          element: <Banner></Banner>,
          loader: () => fetch('/gadgets.json'),
          
        },
       
      ],
    errorElement: <ErrorElement></ErrorElement>,

    },
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
