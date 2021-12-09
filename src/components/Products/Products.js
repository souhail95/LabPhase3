import React from 'react';
import {connect}  from "react-redux";
import Product from "./Product/Product";



const  Products = ({ products }) =>  {
console.log(products)
    return(
        <div style={{marginTop:'10%',marginBottom:'10%',marginLeft:"4%"}} class='row'>
           
         {products.map((prod)  => (
             <Product key={prod.id}  productData={prod}  />
             
    ))}   
        </div>
    );
};

const mapStateToProps = (state)  =>  {
    return{
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(Products);

