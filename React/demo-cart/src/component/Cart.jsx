import { useDispatch, useSelector } from "react-redux"
import { dicrimentQty, incrimentQty, removeData} from "../redux/Slice";

function Cart() {
  
  const data = useSelector(state=>state.MyStoreData.value)
   const dispatch = useDispatch()
   
  return<div className="container">
      <h1>Cart component called...</h1>
<div className="table-responsive ">
      <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th>s No.</th>
          <th>Product </th>
        </tr>
      </thead>
      <tbody>
        {data.map((cdata,index)=>
        {
          return<tr key={index}>
              <td>{index+1}</td>
              <td key={index} style={{marginLeft:'80px'}}>
            <p> <img src={cdata.productData.thumbnail} height={100} width={100}/></p><br /><br />
            <b>{cdata.productData.title}</b><br /><br />
            <b>Discount : {cdata.productData.discountPercentage}</b><br /><br />
            <b>Category : {cdata.productData.category}</b><br /><br />
            <b>Price : {cdata.productData.price * cdata.qty }</b><br /><br />
            <button className="btn btn-success" onClick={()=>dispatch(dicrimentQty(cdata.productData.id))}> - </button>&nbsp;&nbsp;&nbsp;&nbsp;{cdata.qty}&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success"  onClick={()=>dispatch(incrimentQty(cdata.productData.id))}>+</button>
              </td>
              <td>  <button className="btn btn-danger" onClick={()=>dispatch(removeData(cdata.productData.id))}>Remove item</button></td>
          </tr>
        })}
      </tbody>
      </table>
      </div>
       </div>
}

export default Cart
