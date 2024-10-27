import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path:"/",
            element:<h1>HOME</h1>
        },
        {
            path:"/orders",
            element:<div>orders</div>
        },
        {
            path:"/about",
            element:<div>about</div>
        }
    ]
  },
]);

export default router;