import { Header } from "./Header"
import Body from "../Body"
import Cart from "./Cart"
import Error from "./Error"
import { createBrowserRouter,Outlet } from "react-router-dom"
import RestaurantsMenu from "./RestaurantsMenu"
import { lazy,Suspense } from "react"
import { createContext } from "react"


// import Offers from "./Offers"
// import Help from './Help'
const Offers = lazy(()=> import('./Offers'))
const Help = lazy(()=> import('./Help'))

export let context = createContext()
let Provider1 =context.Provider
let pName = 'Linitha'
 function App(){

return (
  
    <>
 <Provider1 value={pName}>

 <Header />
 <Outlet />

 </Provider1>
 




    </>
  
  )
}

export let appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/offers',
        element:<Suspense fallback={<h1>Loading...</h1>}> <Offers/> </Suspense>
      },
      {
        path:'/help',
        element:<Suspense fallback={<h1>Loading...</h1>}> <Help/> </Suspense>
        
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/restaurants/:restId',
        element:<RestaurantsMenu />
      }
     
    ],
    errorElement:<Error />
  }
])



  
  
  
  

export default App


