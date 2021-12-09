import React, { useState } from  'react';
import { connect }  from 'react-redux';
import './app2.css';
import { removeFromCart, adjustQty } from "../../../app/Shopping/shopping-actions";


const CartItem = ({ itemData, removeFromCart, adjustQty })  =>  {
    const [input, setInput] = useState(itemData.qty);
     const onChangeHandler = (e) =>  {
         setInput(e.target.value);
         adjustQty(itemData.id, e.target.value);
     };
    return(
        <div class='card'  style={{width:'18rem',marginLeft:'5%',marginRight:'5%',marginTop:'5%',marginBottom:'5%'}}>
          <img class="card-img-top" style={{height: "228px"}} src={itemData.image}  alt={itemData.title}   />
          <div>
          <h5  style={{color:'blue'}} class="card-title">{itemData.title}</h5>
          <p style={{color:'blue'}}   class='card-text'>${itemData.price}</p>
          </div>
          <br/>
          <div style={{display:'inline-flex',justifyContent:'space-between'}} >
          <div>
          <label style={{color:'blue'}} class="mr-sm-2  sr-only" htmlFor="qty">QTY</label>
           <input style={{width:'100px',height:'35px'}} class="custom-select  mr-sm-2"  min="1" type="number" id="qty"  name="qty"   value={input}  onChange={onChangeHandler} />
          </div>
          <button style={{marginRight:'5px',borderRadius:'5px 5px 5px 5px',backgroundColor:'white'}} onClick={() => removeFromCart(itemData.id)}><img style={{width:'30px',height:'30px',borderRadius:'5px 5px 5px 5px',backgroundColor:'white'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJ3nuTBHpBYlRWOu2OXz9nWqJFQcfBPQZcWVJh5AewPlVT93R0j3lx9EcKdzIwJmaJ24&usqp=CAU"   alt=""   /></button>
          </div>
          <br/>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
       return{
           removeFromCart: (id)  => dispatch(removeFromCart(id)),
           adjustQty: (id, value) => dispatch(adjustQty(id, value)),
       };
};


export default connect(null, mapDispatchToProps)(CartItem);