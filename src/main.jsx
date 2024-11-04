import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@smastrom/react-rating/style.css'
import {
  createBrowserRouter,
  RouterProvider,

 
  
} from "react-router-dom";
import Banner from './components/Banner/Banner.jsx';
import ErrorElement from './components/ErrorElement/ErrorElement.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';


const router = createBrowserRouter([

  
  {
      path: '/',
      element: <App></App>,
      errorElement: <ErrorElement></ErrorElement>,
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
        {
          path: '/Statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/Dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/productDetails/:pId',
          element: <ProductDetails></ProductDetails>,
          loader: () => fetch('/gadgets.json'),

        }
       
      ],

    },
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
