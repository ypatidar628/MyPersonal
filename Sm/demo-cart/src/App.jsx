import { Route, Routes } from "react-router-dom"
import Menu from "./component/Menu"
import Home from "./component/Home"
import Cart from "./component/Cart"
import Mens from "./component/Mens"
import ModernChair from "./component/ModernChair"

function App() {
  
  return (
    <div>
        <Menu/>

        <Routes>
              <Route path="/" element={<Home/>}>Home</Route>
              <Route path="/mens" element={<Mens/>}>Men`s</Route>
              <Route path="/chair" element={<ModernChair/>}>Modern chair</Route>
              <Route path="/cart" element={<Cart/>}>Cart</Route>
        </Routes>       
   </div>
  )
}

export default App
