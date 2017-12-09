import axios from 'axios';

const loadProducts = function() {
    return dispache => {
        return axios.get('http://localhost:3001/products')
            .then(response => {
                dispache({
                    type: "REPLACE_PRODUCTS",
                    products: response.data
                })
            });
    }
}


const addToCart = function(product) {
    return {
        type: "ADD_TO_CART",
        product: product
      }
}

const removeToCart = function(product) {
    return {
        type: "REMOVE_FROM_CART",
        product: product
      }
}

export {addToCart, removeToCart, loadProducts}