import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home'
import Login from '../pages/login'
import SignUp from '../pages/signup'

import About from '../pages/about'

import Contact from '../pages/contact'
import Baski3D from '../pages/3d-baski'
import Tarama3D from '../pages/3d-tarama'
import Fdm from '../pages/fdm'
import Sla from '../pages/sla'
import {Layout} from "../layout";
import Propose from "../pages/propose";


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
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/3d-baski',
                element: <Baski3D/>
            },
            {
                path: '/3d-tarama',
                element: <Tarama3D/>
            },
            {
                path: '/fdm',
                element: <Fdm/>
            },
            {
                path: '/sla',
                element: <Sla/>
            },
            {
                path: '/propose',
                element: <Propose/>
            },
           
        ]
    },
])



export default routes