import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import InputField from "./pages/InputField"
import LifeCycle from "./pages/LifeCycle"
import Theme from "./pages/Theme"
import TodoApi from "./pages/TodoApi"
import TodoState from "./pages/TodoState"
import ProductApi from "./pages/ProductApi"

const App = () => {
    return (
        <>
          
           {/* <BrowserRouter> */}
           <Link to="/todos">Go to todos</Link>
           <Link to="/lifecycle" style={{marginLeft : "1rem"}}>Go to lifecycle</Link>
           <Link to="/products" style={{marginLeft : "1rem"}}>product api</Link>
           <Routes>
            <Route path="todos" element={<TodoApi />}/>
            <Route path="lifecycle" element={<LifeCycle />}/>
            <Route path="products" element={<ProductApi />}/>
           </Routes>
           {/* </BrowserRouter> */}
            {/* <TodoState /> */}
            {/* <TodoApi />
            <LifeCycle /> */}
        </>
    )
}

export default App
