import React from "react"
import ReactDOM  from "react-dom/client"
import { appRouter } from "./componetns/App"
import { RouterProvider } from "react-router-dom"
import { store } from "./utils/store"
import { Provider } from "react-redux"
import Counter from "./componetns/Counter"
let ele = document.getElementById('root')

let root = ReactDOM.createRoot(ele)
root.render(
    <div><Provider store={store}>
 <RouterProvider router={appRouter}/>
<Counter/>
    </Provider>


    </div>

)



