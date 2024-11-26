import { useDispatch, useSelector } from "react-redux"
import { dicrimentQty, incrimentQty, removeData} from "../redux/Slice";

import "./Cart.css"
function Cart() {
  const data = useSelector(state=>state.MyStoreData.value)
   const dispatch = useDispatch()
   console.log(data.length);
   
  return<div className="container">
      <h1>Cart component called...</h1>
<div className="container">
          
        {data.map((cdata,index)=>
        {
          return<div key={index} className="well card-container">
              <b>{index+1}</b>
            <div key={index} style={{marginLeft:'80px'}}>
            <p className="img"> <img src={cdata.productData.thumbnail} height={100} width={100}/></p>
             <div className="card">   
            <b>{cdata.productData.price * cdata.qty } $ </b><br />
            <b>{cdata.productData.title}</b> |
            <b>Discount : {cdata.productData.discountPercentage}</b> |
            <b>Category : {cdata.productData.category}</b><br /><br /><br />
            <div className="qty">
            <button className="btn btn-success btn-dicriment" onClick={()=>dispatch(dicrimentQty(cdata.productData.id))}> - </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <b className="qty-text">{cdata.qty}</b>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success btn-incriment"  onClick={()=>dispatch(incrimentQty(cdata.productData.id))}>+</button> 
            &nbsp;
            <button className="btn btn-danger remove-btn" onClick={()=>dispatch(removeData(cdata.productData.id))}>Remove item</button>

            </div>
            </div>
              </div>
             
          </div>
        })}

      </div>
       </div>
}

export default Cart
