const emptyCart = () => {
    cart.length = 0;
  }

  const cart = [];

const setCart = (book) => {
  cart.push(book);
}

const getCart = () => {
  return cart;
}

export { setCart, getCart, emptyCart }