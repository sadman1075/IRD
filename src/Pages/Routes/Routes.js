import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import BookAndOddai from "../BookAndOddai/BookAndOddai";
import Leftsidenavbar from "../Shared/leftside navbar/Leftsidenavbar";
import Rightsidenav from "../Shared/Rightsidenav";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<BookAndOddai></BookAndOddai>
            },
          
        
        
        ]



    }
])