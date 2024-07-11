import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home'
import SignUp from '../pages/signup'
import About from '../pages/about'
import Contact from '../pages/contact'
import Blog from '../pages/blog'
import Fdm from '../pages/fdm'
import Sla from '../pages/sla'
import {Layout} from "../layout";
import Propose from "../pages/propose";
import PageNotFound from "../pages/404";
import Baski3D from "../pages/3d-baski";
import Order from "../pages/order";
import Login from "../pages/login";
import Admin from "../pages/admin";


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
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/admin',
                element: <Admin/>
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
                path: '/blog',
                element: <Blog/>
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
            {
                path: '/3d-baski',
                element: <Baski3D/>
            },
            {
                path: '/order',
                element: <Order/>
            },
            {
                path:'*',
                element: <PageNotFound/>
            },
           
        ]
    },
])



export default routes