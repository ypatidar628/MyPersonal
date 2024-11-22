import { useEffect, useState } from "react"
import Webservice from "../service/Webservice.jsx"
import WebAIP from "../service/WebAIP.jsx"
import { useDispatch } from "react-redux"
import { addCartData } from "../redux/Slice.jsx"
// import { useSelector } from "react-redux"

function Home() {
  
    const [product, setProduct] = useState([])
   const dispacth  = useDispatch()
    useEffect(()=>
    {
        LoadProductData()
    })

    var LoadProductData = async ()=>
    {
        const response = await Webservice.GetAPICall(WebAIP.ProductAPI)
            setProduct(response.data);
            
            
    }
  return<div className="container">

      <div className="row">
    {product.length==0?(<h1 style={{textAlign:'center'}}>Loading page...</h1>):
    ( product.products.map((pdata,index)=>
    {
        return<div className="col-md-3 well" key={index} style={{marginLeft:'80px'}}>
            <p> <img src={pdata.thumbnail} height={100} width={100}/></p><br /><br />
            <b>{pdata.title}</b><br /><br />
            <b>Discount : {pdata.discountPercentage}</b><br /><br />
            <b>Category : {pdata.category}</b><br /><br />
            <b>Price : {pdata.price}</b><br /><br />
            <b>Rating : {pdata.rating}</b><br /><br />
            <button className="btn btn-success" onClick={()=>dispacth(addCartData(pdata,pdata.id))} >Add to Cart</button>
        </div>
    })

    )}
      </div>
    </div>
}

export default Home
