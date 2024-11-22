// import { Link } from "react-router-dom"

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Menu() {
    const data = useSelector(state=>state.MyStoreData.value)
    // console.log(data);
    
  return<div>
           <div className="container">
            <nav className="navbar navbar-inverse">
                <div className="navbar-brand">
                    <Link to={'/'} style={{textTransform:'uppercase'}}>shopping Cart App</Link>
                </div>
                <ul className="nav navbar-nav ">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/cart'}>Cart: {data.length}</Link></li>
                </ul>
            </nav>
           </div>
      </div>
}

export default Menu
