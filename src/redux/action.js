import { actionType } from './constant';

export const setProduct = (productData) => ({
  type: actionType.setProduct,
  payload: productData,
});

export const selectedProduct = (product) => ({
  type: actionType.SELECT_PRODUCT,
  payload: product,
});

export const removeProduct = (productId) => ({
  type: actionType.removeProduct,
  payload: productId,
});

export const CountNumber=(value)=>(
  {
    type:actionType.count,
    payload:value,
  }
)