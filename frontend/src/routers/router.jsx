import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx"
import Register from "../components/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/orders",
            element:<div>orders</div>
        },
        {
            path:"/about",
            element:<div>about</div>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
    ]
  },
]);

export default router;