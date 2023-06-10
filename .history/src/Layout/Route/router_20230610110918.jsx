import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home";
import Register from "../../User/Register";
import Login from "../../User/Login";
import Errorpage from "../../Pages/Shared/Errorpage/Errorpage";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../DashboardLayout";
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../../Pages/Dashboard/AllUsers/Allusers";
import Class from "../../Pages/Dashboard/SelectedClass/Class";


const router = createBrowserRouter([{
    path: '/',
    errorElement: <Errorpage />,
    element: <Main />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
        { path: '/instructors', element: <Instructors /> },
        { path: '/classes', element: <Classes /> },
    ]
},
{
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <Errorpage />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/dashboard/allUsers', element: <AllUsers /> },
        { path: '/dashboard/selectClass', element: <Class /> },
    ]
}
]);
export default router;