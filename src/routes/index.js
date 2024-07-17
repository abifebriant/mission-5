import { createBrowserRouter } from "react-router-dom";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import App from "../App";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Beranda/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            }
        ]
    }
])

export default router