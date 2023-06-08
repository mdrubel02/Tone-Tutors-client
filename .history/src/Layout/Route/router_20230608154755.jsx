import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home";
import Register from "../../User/Register";
import Login from "../../User/Login";


const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {path: '/', element: <Home />},
        {path: '/home', element: <Home />},
        {path: '/register', element: <Register />},
        {path: '/login', element: <Login />},
    ]
}]);
export default router;