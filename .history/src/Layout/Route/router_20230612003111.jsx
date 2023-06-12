import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home";
import Register from "../../User/Register";
import Login from "../../User/Login";
import Errorpage from "../../Pages/Shared/Errorpage/Errorpage";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../DashboardLayout";
import Instructors from "../../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../../Pages/Dashboard/AllUsers/Allusers";
import AllClasses from "../../Pages/Classes/AllClasses";
import SelectedClass from "../../Pages/Dashboard/SelectedClass/SelectedClass";
import Payments from "../../Pages/Dashboard/Payments/Payments";
import MyPaymentsHistory from "../../Pages/Dashboard/MyPaymentsHistory/MyPaymentsHistory";
import AddClasses from "../../Pages/Dashboard/AddClasses/AddClasses";


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
        { path: '/classes', element: <PrivateRoute><AllClasses /></PrivateRoute> },
    ]
},
{
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <Errorpage />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/dashboard/allUsers', element: <AllUsers /> },
        { path: '/dashboard/selectClass', element: <SelectedClass /> },
        { path: '/dashboard/myPaymentHistory', element: <MyPaymentsHistory /> },
        { path: '/dashboard/addClasses', element: <AddClasses /> },
        { path: '/dashboard/payments/:id', element: <Payments/> ,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
    },
    ]
}
]);
export default router;