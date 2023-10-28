
import './App.css'
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import AppLayout from "./components/appLayout/appLayout"
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/explore'
import Lists from './pages/lists'
import NotFound from './pages/notFound'
function App() {
  

  const router= createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {index:true, element: <Home/>},
        {path: 'explore', element: <Explore/>},
        {path: 'lists', element: <Lists/>},




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
