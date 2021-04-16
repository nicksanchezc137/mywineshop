const initialState = {
  cart_items: [],
};

const setState = (state = initialState, action) => {
  console.log("🚀 ~ file: setState.js ~ line 6 ~ setState ~ action", action);
  switch (action.type) {
    case "CART_ITEMS":
      let data = Object.assign({}, state, {
        cart_items: action.payload,
      });
      return data;

    case "CLEAR_STATE":
      return {
        cart_items: [],
      };
    default:
      return state;
  }
};

export default setState;
