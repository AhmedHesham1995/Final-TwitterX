
import './App.css'
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import AppLayout from "./components/appLayout/appLayout"
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/explore'
import Lists from './pages/lists'
import Join from './pages/Join'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import NotFound from './pages/notFound'
function App() {
  

  const router= createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {index:true, element: <Join/>},
        {path: 'home', element: <Home/>},
        {path: 'explore', element: <Explore/>},
        {path: 'lists', element: <Lists/>},
        {path: 'join', element: <Join/>},
        {path: 'signUp', element: <SignUp/>},
        {path: 'signIn', element: <SignIn/>},




        {path: '*', element: <NotFound/>},//wildCard
        

      ]
    }
])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
