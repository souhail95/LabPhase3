import * as actionTypes from './shopping-types';
import img1 from './almas-caviar.jpg';
import img2 from './black chicken.jpg'
import img3 from './black watermelon.jpg'
import img4 from './caviar.jpg'
import img5 from './foie gras.jpg'
import img6 from './saffron.jpg'
import img7 from './vanilla.jpg'
import img8 from './wagyu beef.jpg'
import img9 from './white truffle.jpg'

const INITIAL_STATE = {
    products: [{
        image: img1,
        id: 1,
        title: "Almas caviar (1kg)",
        price: 25000,        
    },{
        image: img2,
        id: 2,
        title: "Black chicken (1 chicken)",
        price: 2500,        
    },{
        image: img3,
        id: 3,
        title: "Black watermelon (1 watermelon)",
        price: 3000,        
    },{
        image: img4,
        id: 4,
        title: "Caviar (1kg)",
        price: 2000,        
    },{
        image: img5,
        id: 5,
        title: "Foie gras (1kg)",
        price: 250,        
    },{
        image: img6,
        id: 6,
        title: "Saffron (1kg)",
        price: 10000,        
    },{
        image: img7,
        id: 7,
        title: "Vanilla (1kg)",
        price: 400,        
    },{
        image: img8,
        id: 8,
        title: "Wagyu beef (1kg)",
        price: 500,        
    },{
        image: img9,
        id: 9,
        title: "White truffle (1kg)",
        price: 6000,        
    }],
    cart: [],
    currentItem: null,
};


const shopReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
      case actionTypes.ADD_TO_CART:
          const item = state.products.find((prod) => prod.id  === action.payload.id);
          const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
          return{
           ...state,
           cart: inCart  ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}],
          };
      case actionTypes.REMOVE_FROM_CART:
          return{
              ...state,
              cart: state.cart.filter(item => item.id !== action.payload.id)
          };
      case actionTypes.ADJUST_QTY:
          return{
              ...state,
              cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item),
          };
      case actionTypes.LOAD_CURRENT_ITEM:
          return{
              ...state,
              currentItem: action.payload,
          };
      default:
          return state;
    }
};


export default shopReducer;