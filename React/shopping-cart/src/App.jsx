import { Route, Routes } from "react-router-dom";
import MyMenu from "../components/MyMenu";
import Home from "../components/Home";
import Cart from "../components/Cart";

function App()
{
  return<>
   <MyMenu/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
  </>
}
export default App;