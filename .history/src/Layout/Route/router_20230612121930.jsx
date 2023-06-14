import { createBrowserRouter } from "react-router-dom";
import Main from '../Main';
import Errorpage from '../../Pages/Shared/Errorpage/Errorpage';
import Home from '../../Pages/Home/Home';
import Register from "../../User/Register";
import Login from "../../User/Login";
import Instructors from '../../Pages/Instructors/Instructors';
import PrivateRoute from "../Route/PrivateRoute";
import AddClasses from "../../Pages/Dashboard/Instructor/AddClasses/AddClasses";
import AllClasses from "../../Pages/Classes/AllClasses";
import DashboardLayout from "../DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AllUsers from "../../Pages/Dashboard/Admin/AllUsers/AllUsers";
import SelectedClass from "../../Pages/Dashboard/Students/SelectedClass/SelectedClass";
import MyPaymentsHistory from "../../Pages/Dashboard/Students/MyPaymentsHistory/MyPaymentsHistory";
import Payments from "../../Pages/Dashboard/Students/Payments/Payments"
import InstructorMyClass from "../../Pages/Dashboard/Instructor/InstructorMyClass/InstructorMyClass";

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
        {path: '/dashboard/InsMyClass', element: <InstructorMyClass />}
        { path: '/dashboard/payments/:id', element: <Payments/> ,
        loader: ({params}) => fetch(`https://tone-tuitors-server.vercel.app/bookings/${params.id}`)
    },
    ]
}
]);
export default router;