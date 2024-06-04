import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home'
import Login from '../pages/login'
import SignUp from '../pages/signup'
import {Layout} from "../layout";


const routes = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            
            {
                path: '/aboutme',
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Home/>
            },
           
        ]
    },
])



export default routes