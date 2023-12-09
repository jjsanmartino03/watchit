import {createBrowserRouter} from "react-router-dom";
import Welcome from "../app/welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>,
    }
])

export default router