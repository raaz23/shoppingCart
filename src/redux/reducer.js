const initialState = {
    product: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setProduct":
            return {...state,product:action.payload};
            
        default:
            return state;
    }
};


export const selectedProduct = (state ={}, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return { ...state, ...action.payload };

    case "removeProduct":
      return null;

    default:
      return state;
  }
};
export const CN = (state = 0, action) => {
  switch (action.type) {
    case 'increase':
      return action.payload;
    
    default:
      return state;
  }
};



