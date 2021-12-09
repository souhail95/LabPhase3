import React from 'react';
import {connect} from "react-redux";
import './app2.css';
import {  addToCart } from "../../app/Shopping/shopping-actions";

const SingleItem = ({ currentItem, addToCart }) => {
    console.log(currentItem);
    return(
        <div style={{display:'flex',justifyContent:'center',marginTop:'30%',marginBottom:'30%'}}>
        <div  style={{width:'18rem',display:'flex',justifyContent:'center'}}   class='card'>
         <img  src={currentItem.image} style={{height:'228px'}} class="card-img-top"  alt={currentItem.title}   />
         <div    class="card-body">
             <h5 class="card-title" >{currentItem.title}</h5>
             <p  class='card-text'>${currentItem.price}</p>
             <br/>
             <div  style={{display:'flex',justifyContent:'center'}} ><button  style={{display:'flex',justifyItem:'center'}}  class='btn btn-primary' onClick={()  => addToCart(currentItem.id)}>Add To Cart</button>
         </div>
         </div>
         <br/>
        </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        currentItem: state.shop.currentItem,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (id) => dispatch(addToCart(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);

