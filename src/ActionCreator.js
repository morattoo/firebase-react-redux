const loadProducts = function(){
    
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

export {addToCart, removeToCart}