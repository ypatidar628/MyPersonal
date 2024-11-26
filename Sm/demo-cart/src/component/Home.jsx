import { useEffect, useState } from "react"
import Webservice from "../service/Webservice.jsx"
import WebAIP from "../service/WebAIP.jsx"
import { useDispatch } from "react-redux"
import { addCartData } from "../redux/Slice.jsx"
// import { useSelector } from "react-redux"
import './Home.css'

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
        return<div className="col-md-3 well productCard" key={index} style={{marginLeft:'80px'}}>
            <p className="img"> <img src={pdata.thumbnail} height={100} width={100}/></p><br /><br />
            <b className="pPrice"> {parseInt(pdata.price-pdata.discountPercentage)}&nbsp;$</b>&nbsp;&nbsp;&nbsp;
            <strike>{pdata.price}&nbsp;$</strike>
            <div className="discription">
                <b className="pname">{pdata.title}</b> |
                <b className="pDiscount">Discount : {pdata.discountPercentage}</b>|
                <b className="pCategory">Category : {pdata.category}</b>|
                <b className="pRating">Rating : {pdata.rating}⭐</b><br />
                <button className="btn btn-success" onClick={()=>dispacth(addCartData(pdata,pdata.id))} >Add to Cart</button>
            </div>
        </div>
    })

    )}
      </div>
    </div>
}

export default Home
