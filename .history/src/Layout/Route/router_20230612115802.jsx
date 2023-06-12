import { createBrowserRouter } from "react-router-dom";

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