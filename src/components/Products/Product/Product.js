import React from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './app2.css';
import {addToCart, loadCurrentItem} from "../../../app/Shopping/shopping-actions";


const Product = ({productData,addToCart,loadCurrentItem})  => {
    return(
        <div   class="card"  style={{width: "18rem",marginLeft:'5%',marginRight:'5%',marginTop:'5%',marginBottom:'5%'}}>
            <img class="card-img-top" style={{height: "228px"}} src= {productData.image}  alt={productData.title}  />
            <div class="card-body">
                <h5 class="card-title">{productData.title}</h5>
                <p class="card-text">${productData.price}</p>
            </div>
            <br/>
            <div style={{display:'inline-flex', justifyContent:'space-between'}}>
                <Link to={'/product/:id'}>
                
                    <button class="btn btn-primary" style={{marginLeft:'5px'}}    onClick={() => loadCurrentItem(productData)}>View Item</button>
                </Link>
                <button class="btn btn-primary"   style={{marginRight:'5px'}} onClick={() => addToCart(productData.id)}>Add To Cart</button>
            </div>
            <br/>
        </div>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    };
};

export default connect (null, mapDispatchToProps)(Product);


