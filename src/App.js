import React from 'react';
import  {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import  SingleItem from "./components/SingleItem/SingleItem";
import { connect } from 'react-redux';

function App({currentItem}) {
  console.log(currentItem);
  return (
    <div className="App">
    <Router     basename={window.location.pathname ||    ''} >
   
      <Navbar/>
<Routes>

        <Route exact path="/"  element={<Products/>}  />
        <Route exact path="/cart"  element={<Cart/>}  /> 
        {!currentItem ? (<Route to="/"    />):(<Route exact path="/product/:id"  element={<SingleItem/>}   /> )}
 </Routes>     
    
    </Router>
    <footer style={{color:'white',textDecoration:'none',paddingTop:'0.5%'}} className="box10" ><h1>Thanks for your visit!</h1></footer>
    </div>
  );
};



const mapStateToProps = state => {
  return{
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);




