const initialState = {
  grid: true,
  all_products: [],
  filteredProducts: [],
  sort: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    price: 0,
    max_price: 0,
    shipping: false,
  },
};
export default function filterReducer(state = initialState, action) {
  if (action.type === "FETCH_SUCCESS") {
    let maxprice = action.payload.map((val) => val.price);
    maxprice = Math.max(...maxprice);

    return {
      ...state,
      filters: { ...state.filters, max_price: maxprice, price: maxprice },
      all_products: [...action.payload],
      filteredProducts: [...action.payload.sort((a, b) => a.price - b.price)],
    };
  }
  if (action.type === "SET_GRID") {
    return {
      ...state,
      grid: true,
    };
  }
  if (action.type === "SET_LIST") {
    return {
      ...state,
      grid: false,
    };
  }

  if (action.type === "UPDATE_SORT") {
    let value = action.payload;
    return { ...state, sort: value };
  }
  if (action.type === "UPDATE_FILTERS") {
    console.log(action);
    let { name, value } = action.payload;
    console.log(name, value);
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    console.log(all_products, text);

    let tempProducts = [...all_products];

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().includes(text);
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);

    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    console.log(tempProducts);
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === "SORT_PRODUCTS") {
    const { filteredProducts, sort } = state;
    let tempProducts = [...filteredProducts];
    if (sort === "lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "a-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "z-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  return state;
}
