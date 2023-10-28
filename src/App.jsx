import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import "./Global.css"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import Home from "./pages/home/Home"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Orders from "./pages/orders/Orders"
import Mygigs from "./pages/mygigs/Mygigs"
import Add from "./pages/add/Add"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
function App() {
  const Layout =()=>{
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>,
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mygigs",
          element:<Mygigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
