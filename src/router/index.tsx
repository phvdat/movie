import { Navigate, RouteObject } from "react-router-dom";
import App from "../App";
import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout";
import { RoutePath } from "../constants/routes";
import HomePage from "../page/Home";
import ProtectedRoute from "./protected";

const routesConfig: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <App />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: RoutePath.Index,
                element: <HomePage />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routesConfig;
