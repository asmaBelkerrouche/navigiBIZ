// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import './App.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import SignUp from './pages/Account/SignUp.jsx'
// import SignUpUser from './pages/Account/SignUpUser.jsx'
// import SignUpCompany from './pages/Account/SignUpCompany.jsx'
// import SignUpCompany2 from './pages/Account/SignUpCompany2.jsx'
// import SignUpCompany3 from './pages/Account/SignUpCompany3.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   // {
//   //   path: "/signUp",
//   //   element: <SignUp/>,
//   // },
//   // {
//   //   path: "/signUpUser",
//   //   element: <SignUpUser/>,
//   // },
//   // {
//   //   path: "/SignUpCompany",
//   //   element: <SignUpCompany/>,
//   // },
//   // {
//   //   path: "/SignUpCompany2",
//   //   element: <SignUpCompany2/>,
//   // },
//   // {
//   //   path: "/SignUpCompany3",
//   //   element: <SignUpCompany3/>,
//   // },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)