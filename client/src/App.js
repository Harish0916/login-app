import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/** Import all compnents */
import PageNotFound from "./components/PageNotFound.js"
import Password from "./components/Password.js"
import Profile from "./components/Profile.js"
import Recovery from "./components/Recovery.js"
import Register from "./components/Register.js"
import Reset from "./components/Reset.js"
import Username from "./components/Username.js"
/** Root Routes */
const router  = createBrowserRouter([
    {
        path: "/",
        element: <Username></Username>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/password",
        element: <Password></Password>
    },
    {
        path: "/profile",
        element: <Profile></Profile>
    },
    {
        path: "/recovery",
        element: <Recovery></Recovery>
    },
    {
        path: "/reset",
        element: <Reset></Reset>
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    },
])

const App = () => {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App