import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect}  from 'react-redux';

const Navbar = ({cart})  => {
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });
        setCartCount(count);
    },[cart, cartCount]);

    return(
        <div   style={{opacity:"0.97",backgroundColor:'black',width:'100%',position:'fixed',top:'0',zIndex:'5'}} class="navbar  navbar-dark bg-dark">
            <Link to="/"   style={{color:'white',textDecoration:'none'}} >
                <h2 style={{color:'white',textDecoration:'none'}}>Agricultural service home delivery</h2>
            </Link>
            <Link style={{color:'white',textDecoration:'none',display:'inline-flex'}}  to="/cart">
            <img style={{height:'6rem',width:'6rem',borderRadius:'50%'}} src="https://previews.123rf.com/images/vectorlightstudio/vectorlightstudio2001/vectorlightstudio200100102/144161554-shopping-cart-icon.jpg"    alt="shopping cart"  />
              <div  style={{marginTop:'4%'}}>
               <h3 style={{color:'white',textDecoration:'none',marginTop:'4%'}} >Cart</h3>   
               <div  style={{color:'white',textDecoration:'none'}} >{cartCount}</div>
              </div>  
            </Link>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cart: state.shop.cart,
    };
};


export default connect(mapStateToProps)(Navbar);