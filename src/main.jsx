import React from 'react'
import ReactDOM from 'react-dom/client'
import Contact from './Pages/Contact.jsx'
import App from './Pages/App.jsx'
import About from './Pages/About.jsx'
import CharacterDetails from './Pages/CharacterDetails.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const paths= createBrowserRouter (
  [{
    path: '/',
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path: 'search',
    element: <CharacterDetails/>
  }
  
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
