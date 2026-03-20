import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Layout/RootLayout";
import Dashboard from "./Pages/Dashboard";
import Students from "./Pages/Students";
import AddStudent from "./Pages/AddStudent";
import Profile from "./Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/Students",
        element: <Students />,
      },
      {
        path: "/Addstudent",
        element: <AddStudent />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {

  return<RouterProvider router={router} />;
}

export default App
