import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/registration_login/Login";
import Registration from "../pages/registration_login/Registration";
import ServicesDetails from "../pages/servicedDetails/ServicesDetails";
import axios from "axios";
import Services from "../pages/services/services";
import PrivateRoute from "../pages/privateRoute/PrivateRoute";
import AddServices from "../pages/addServices/AddServices";
import MySchedules from "../pages/mySchedules/mySchedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/api/v1/services/${params.id}`),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

export default router;
