import   React,{useState, useEffect} from 'react';
import CartItem from "./CartItem/CartItem";
import {connect} from 'react-redux';
import { removeFromCart } from "../../app/Shopping/shopping-actions";



const Cart = ({cart}) => {
const [totalPrice, setTotalPrice] = useState(0);
const [totalItems, setTotalItems] = useState(0);

useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items = items + item.qty ;
      price += item.qty*item.price; 
    })  
    setTotalPrice(price) ;  
    setTotalItems(items) ;
}, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
function purchaseClicked(){
   let arr = [];
   
    if(totalItems===0){
        
         alert('no items added!')

    }
else     {console.log(cart);
        cart = arr;
         alert('Thank you for your purchase!');
         cart = arr;
         cart.forEach(item  => {removeFromCart(item)})
         cart.filter((item) => (<CartItem key={item.id}   itemData={item}   />))
         windows.location.href = windows.location.href;
        return [];}
    
}
return(
   <div>
   <div style={{marginTop:'10%',marginBottom:'10%',marginLeft:'4%'}} class='row'  >
   {cart.map((item) => (<CartItem key={item.id}   itemData={item}   />))}
   </div>
   <div   style={{display:'flex',justifyContent:"space-around",marginTop:'50%',marginBottom:'150%',backgroundColor:'transparent'}}>
   <h4   style={{color:'red'}}>Cart Summary</h4>
   <div>
       <span style={{color:'white'}} >TOTAL: ({totalItems }   items)</span>
       <span  style={{color:'white'}} >$ {totalPrice} </span>
   </div>
   <button   class="btn btn-light" onClick={()=>purchaseClicked()} >Purchase</button>
   </div>
   </div>
);
};

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: (id)  => dispatch(removeFromCart(id)),
        
    };
};

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart,
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
