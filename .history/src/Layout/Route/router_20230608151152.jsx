import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home";
import Register from "../../User/Register";


const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {path: '/', element: <Home />},
        {path: '/home', element: <Home />},
        {path: '/register', element: <Register />},
    ]
}]);
export default router;