import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Menu() {
    const cartData = useSelector(state=>state.MyStoreData.value)
  return<div>
        <div className="container">
            <nav className="navbar navbar-inverse">
           <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand"> Shopping Cart App</Link>
                </div>
                         <ul className="navbar-nav navbar nav navbar-right ">
                    <li> <Link to={'/'} >Home</Link></li>
                    <li> <Link to={'/cart'} >Cart : {cartData.length}</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    </div>
}
export default Menu
