
import { setCart } from './../helpers/data/cartData.js';
import { cartPortion } from './cartPortion.js';
import { makeModal, chargeIt, showCartItems } from './modalPortion.js';



const makeCart = () => {
    $('#cart').html(`
    ${cartPortion()}
    ${makeModal()}
    `);
    $("#charge-it").click(() => {
        const ccNum = $("#credit-card").val();
        chargeIt(ccNum);
      });
    
      showCartItems();
}

  const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
  
    cartButton.on("click", () => {
      setCart(array[index]);
      makeCart();
    });
  };

  export { makeCart, addToCart }