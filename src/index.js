import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/about/About';

import Blog from './components/blog/Blog';
import Contact from './components/contacts/Contact';
import SignIn from './components/signin/SignIn';
import { SignUp } from './components/signup/SignUp';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path = '' element= {<Home/>} />
      <Route path = 'about' element= {<About/>} />
      <Route path = 'contact' element= {<Contact/>} />
      <Route path = 'blog' element= {<Blog/>} />
      <Route path = 'sign-in' element= {<SignIn/>} />
      <Route path = 'sign-up' element= {<SignUp/>} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
