import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";


const route = createBrowserRouter([
    {
        path: '/',
        Element: <Main/>
    }
])

export default route;