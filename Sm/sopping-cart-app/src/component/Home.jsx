import { useEffect, useState } from "react"

import WebAPI from "../services/WebAPI"
// import axios from "axios";
import Webservices from "../services/Webservices"
import { useDispatch } from "react-redux"
import { addCartData } from "../redux/Slice"


function Home() {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
//call the API
    useEffect(()=>{
        loadProduct();
    },[])

var loadProduct= async ()=>
{
    try {
        // const response = await axios.get('https://fake-json-api.mock.beeceptor.com/users');
        // const response = await axios.get(WebAPI.ProductAPI)
        const response = await Webservices.GetAPICall(WebAPI.ProductAPI)
        setProduct(response.data.products); 
        console.log(response.data.products);
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }  
};
  return<div>
        <div className="container"> 
        {/* <h1>Home component called... </h1> */}
           <div className="container">
            <div className="row">
                {product.length==0 ? (<h1 style={{textAlign:'center',justifyContent:'center',alignItems:'center'}}>Loading page...</h1>) : 
                (product.map((item,index)=>
                    {
                        return<div className="col-md-3 well" style={{marginLeft:'55px'}} key={index}>
                                <p><img src={item.thumbnail} alt="" style={{width:100,height:100}} /></p>
                                <div>
                                <b style={{textWrap:'nowrap'}}>Name: {item.title}</b><br/><br/>
                                <b>Category : {item.category}</b><br/><br/>
                                <b>Price : {item.price}</b><br/><br/>
                                <b>Rating : {item.rating}</b><br/><br/>
                                <b>Discount %: {item.discountPercentage}</b><br/><br/>
                                <button className="btn btn-success" onClick={()=>dispatch(addCartData(item))}>Add to Cart</button> 
                             </div>
                           </div>
                    })
                )}
            </div>
           </div>
        </div>
    </div>
}

export default Home


/*
function Home() {
  const [product, setProduct] = useState([]);  // Use lowercase for state naming

  // Call the API inside useEffect
  useEffect(() => {
    loadProduct();
  }, []);  // Empty dependency array to call only once when the component mounts


  return (
    <div>
      <div className="container">
        <h1>Home component called...</h1>
        <div className="container">
          <div className="row">
            {product.length === 0 ? (
              <p>Loading products...</p>
            ) : (
              product.map((item, index) => (
                <div key={index} className="col-md-4">
                  <h2>{item.name}</h2> {/* Replace `item.name` with the correct property 
                  <p><img  src={item.photo}/></p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
*/
