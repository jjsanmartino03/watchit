import {createBrowserRouter} from "react-router-dom";
import Welcome from "@/app/welcome";
import Dashboard from "@/app/dashboard";
import Home from "@/app/dashboard/home";
import Search from "@/app/dashboard/search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard",
                element: <Home/>
            },
            {
                path: "/dashboard/search",
                element: <Search/>
            }
        ]
    }
])

export default router