import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx"
import Register from "../components/Register.jsx";
import CartPage from "../pages/game/cartPage.jsx";
import CheckoutPage from "../pages/game/CheckoutPage.jsx";
import SingleGame from "../pages/game/SingleGame.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import OrderPage from "../pages/game/orderPage.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../pages/dashboard/DashBoardLayout.jsx";
import ManageGames from "../pages/dashboard/manageGames/ManageGames.jsx";
import UpdateGame from "../pages/dashboard/EditGame/UpdateGame.jsx";
import AddGame from "../pages/dashboard/addGame/AddGame.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import UserDashboard from "../pages/dashboard/users/UserDashboard.jsx";

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
            element:<PrivateRoute><OrderPage/></PrivateRoute>
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
        {
            path: "/cart",
          element: <CartPage/>
        },
        {
            path: "/checkout",
          element: <PrivateRoute><CheckoutPage/></PrivateRoute>
        },
        {
            path: "/games/:id",
          element: <SingleGame/>
        },
        {
          path: "/user-dashboard",
          element: <PrivateRoute><UserDashboard/></PrivateRoute>
        }
    ]
  },
  {
    path: "/admin",
    element: <AdminLogin/>
  },
  {
    path: "/dashboard",
    element: <AdminRoute>
      <DashboardLayout/>
    </AdminRoute>,
    children:[
      {
        path: "",
        element: <AdminRoute><Dashboard/></AdminRoute>
      },
      {
        path: "add-new-game",
        element: <AdminRoute>
          <AddGame/>
        </AdminRoute>
      },
      {
        path: "edit-game/:id",
        element: <AdminRoute>
          <UpdateGame/>
        </AdminRoute>
      },
      {
        path: "manage-games",
        element: <AdminRoute>
          <ManageGames/>
        </AdminRoute>
      }
    ]
  }
]);

export default router;

