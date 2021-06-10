const initialState = {
  products: [],
  featuredProducts: [],
  productsLoading: false,
  singleProductLoading: false,
  error: false,
  singleError: false,
  singleProduct: {},
};

export default function productsReducer(state = initialState, action) {
  if (action.type === "FETCH_BEGIN") {
    return { ...state, productsLoading: true };
  }
  if (action.type === "FETCH_SUCCESS") {
    const featuredProducts = action.payload.filter((product) => {
      return product.featured === true;
    });
    return {
      ...state,
      products: action.payload,
      featuredProducts,
      productsLoading: false,
    };
  }
  if (action.type === "FETCH_FAILED") {
    return { ...state, productsLoading: false, error: true };
  }

  if (action.type === "SINGLE_FETCH_BEGIN") {
    return { ...state, singleProductLoading: true };
  }
  if (action.type === "SINGLE_FETCH_SUCCESS") {
    return {
      ...state,
      singleProductLoading: false,
      singleProduct: action.payload,
    };
  }
  if (action.type === "SINGLE_FETCH_FAIL") {
    return {
      ...state,
      singleProductLoading: false,
      singleError: true,
    };
  }
  return state;
}
