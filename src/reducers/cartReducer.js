function getLocalStorage() {
  let val = localStorage.getItem("cart");
  if (val) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
}
const initialState = {
  cartItems: [...getLocalStorage()],
  total_cartItems: 0,
  total_Amount: 0,
  ship_fee: 500,
};
export default function cartReducer(state = initialState, action) {
  if (action.type === "ADD_TO_CART") {
    const { color, id, amount, product } = action.payload;
    console.log(action);
    const tempItem = state.cartItems.find((item) => item.id === id + color);
    if (tempItem) {
      let tempCart = state.cartItems.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cartItem: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].thumbnails.large.url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cartItems: [...state.cartItems, newItem] };
    }
  }
  if (action.type === "TOGGLE_AMOUNT") {
    const { id, val } = action.payload;
    console.log(id, val);
    const tempCart = state.cartItems.map((item) => {
      if (item.id === id) {
        if (val === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (val === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cartItems: tempCart };
  }
  if (action.type === "DELETE_CART") {
    const { id } = action.payload;
    console.log(id);
    let tempCart = state.cartItems.filter((item) => {
      return item.id !== id;
    });
    return { ...state, cartItems: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    const { total_cartItems, total_Amount } = state.cartItems.reduce(
      (total, current) => {
        total.total_cartItems += current.amount;
        total.total_Amount += current.price * current.amount;
        return total;
      },
      {
        total_cartItems: 0,
        total_Amount: 0,
      }
    );
    return { ...state, total_cartItems, total_Amount };
  }
  return state;
}
