import { useDispatch, useSelector } from "react-redux"
import { decrementqty, incrementqty, removeProduct } from "../redux/Slice"

function Cart() {
    const cartData = useSelector(state=>state.MyStoreData.value)
     const dispatch = useDispatch()

  return<div>
          <div className="container"> 
           <h1 style={{textAlign:'center',textTransform:'uppercase',fontWeight:'900',fontSize:'80px' }}>Cart</h1>
           <hr />
           <br/><br/>
           <div className="table-responsive ">
            <table className="table-hover table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>s No.</th>
                    <th>Product</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((cdata,index)=>{
                    return<><tr>
                      <td key={1}>{index+1}</td>
                      <td key={2}>
                        <p key={3}><img src={cdata.productData.thumbnail} height={100} width={100}/></p>
                        <b key={4}>Name : {cdata.productData.title}                          </b><br /><br />
                        <b key={5}>Category : {cdata.productData.category}</b><br /><br />
                        <b key={6}>Rating : {cdata.productData.rating}</b><br /><br />
                        <b key={7}><button className="btn btn-success" onClick={()=>dispatch(decrementqty(cdata.productData.id))}>-</button>
                        &nbsp;&nbsp;&nbsp;{cdata.qty}&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-success" onClick={()=>dispatch(incrementqty(cdata.productData.id))}>+</button> </b>
                        <b key={8}>Price : {cdata.productData.price*cdata.qty}</b><br /><br />
                        </td>
                        <td><button className="btn btn-success " style={{alignItems:'center',justifyContent:'center'}} onClick={()=>dispatch(removeProduct(cdata.productData.id))}>Remove</button></td>

                    </tr></>
                  })}
                </tbody>
            </table>
           </div>
            </div>
    </div>
}

export default Cart
