import axios from "axios"
import { useEffect, useState } from "react"

function Mens() {
const [product, setProduct] = useState([])
    useEffect(()=>
    {
        loadproducts()
    },[])
    const loadproducts= async()=>
    {
        const resp =  await axios.get('https://api.escuelajs.co/api/v1/categories/')
        console.log(resp.data);   
        setProduct(resp.data)
    }
  return (
    <div className="container">
        <h1 style={{textAlign:'center', fontWeight:'700' ,textTransform:'uppercase'}}> Men`s wear  </h1>
                <br />
                
                <div className="row" style={{alignItems:'center'}}>
                        <div className="mens-card ">
                            {product.length == 0  ? <h1 style={{textAlign:'center',fontWeight:700}}> Loading Page... </h1>:
                            product.map((pdata,index)=>
                                {
                                    return<div className="col-md-3 well productCard" key={index} style={{marginLeft:'80px'}}>
                                        <p className="img"> <img src={pdata.image} height={100} width={100}/></p><br /><br />
                                        <b className="pPrice"> {parseInt(pdata.price-pdata.discountPercentage)}&nbsp;$</b>&nbsp;&nbsp;&nbsp;
                                        <strike>{pdata.price}&nbsp;$</strike>
                                        <div className="discription">
                                            <b className="pname">{pdata.title}</b> |
                                            <b className="pDiscount">Discount : {pdata.discountPercentage}</b>|
                                            <b className="pCategory">Category : {pdata.name}</b>|
                                            <b className="pRating">Rating : {pdata.rating}⭐</b><br />
                                            <button className="btn btn-success" >Add to Cart</button>
                                        </div>
                                    </div>
                                }
                            )}
                            
                        </div>
                </div>
    
    
    </div>
  )
}

export default Mens
