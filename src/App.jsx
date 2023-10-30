import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./components/appLayout/appLayout";
import Home from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Explore from "./pages/explore";
import Lists from "./pages/lists";
import Join from "./pages/Join";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/notFound";
import Profile from "./pages/profile";
import Notification from "./pages/Notifications/notification";
import Mentions from "./pages/Notifications/mentions";
import Verified from "./pages/Notifications/verified";
import Communities from "./pages/communities";
import Followings from "./pages/home/followings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Join /> },
        { path: "home", element: <Home /> },
        { path: "followings", element: <Followings /> },
        { path: "explore", element: <Explore /> },
        { path: "lists", element: <Lists /> },
        { path: "notifications", element: <Notification /> },
        { path: "mentions", element: <Mentions /> },
        { path: "verified", element: <Verified /> },
        { path: "join", element: <Join /> },
        { path: "signUp", element: <SignUp /> },
        { path: "signIn", element: <SignIn /> },
        { path: "profile", element: <Profile /> },
        {path:'communities' , element : <Communities/>},
        { path: "*", element: <NotFound /> }, //wildCard
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
