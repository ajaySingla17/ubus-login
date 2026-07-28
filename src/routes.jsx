import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import PaymentReceipt from "./pages/PaymentReceipt.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Notifications from "./pages/Notifications.jsx";
import PlaceholderPage from "./pages/PlaceholderPage.jsx";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/payment-receipt", element: <PaymentReceipt /> },
      { path: "/change-password", element: <ChangePassword /> },
      { path: "/notifications", element: <Notifications /> },
      {
        path: "/non-disciplinary-action",
        element: <PlaceholderPage title="Non Disciplinary Action" />,
      },
      {
        path: "/transport-allotment",
        element: <PlaceholderPage title="Transport Allotment" />,
      },
      {
        path: "/transport-routes",
        element: <PlaceholderPage title="Transport Routes" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
